'use strict';

const env = require('../env.js')();
const got = require('got');
const newHost = process.env.HOST_PROD;
const fastlyKey = env.FASTLY_PROD;
const fastlyService = env.FASTLY_SERVICE_PROD;
const fastlyBackendName = env.FASTLY_BACKEND_NAME_PROD;

const updateFastlyBackend = async () => {
    if (!newHost) {
        throw new Error('Could not find the hostname for the latest deployment.');
    }

    // Get all versions of Fastly config.
    const version = await got.get(`https://api.fastly.com/service/${fastlyService}/version`, {
        headers: {
            'Fastly-Key': fastlyKey
        }
    });

    // Find active Fastly config.
    const activeVersion = JSON.parse(version.body).find(version => version.active === true);
    if (!activeVersion.number || isNaN(activeVersion.number)) {
        throw new Error('Could not find the active Fastly service version.');
    }

    // Get active Fastly codedocs backend.
    const backend = await got.get(`https://api.fastly.com/service/${fastlyService}/version/${activeVersion.number}/backend/${fastlyBackendName}`, {
        headers: {
            'Fastly-Key': fastlyKey
        }
    });

    const activeFastlyHostname = (JSON.parse(backend.body)).hostname;
    if (!activeFastlyHostname) {
        throw new Error('Current backend "hostname" not found from Fastly.');
    }

    // Check if Fastly needs to be updated with a new backend.
    if (newHost === activeFastlyHostname) {
        console.log(`Fastly backend hostname is already correctly configured to "${newHost}".`);
        return;
    }

    console.log(`Updating Fastly hostname from "${activeFastlyHostname}" to "${newHost}".`);

    // Clone currently active Fastly version.
    const newVersionResponse = await got.put(`https://api.fastly.com/service/${fastlyService}/version/${activeVersion.number}/clone`, {
        headers: {
            'Fastly-Key': fastlyKey
        }
    });
    const newVersion = JSON.parse(newVersionResponse.body);
    if (!newVersion.number || isNaN(newVersion.number)) {
        throw new Error('Could not clone the active Fastly version and find a new version number.');
    }

    // Update backend.
    await got.put(`https://api.fastly.com/service/${fastlyService}/version/${newVersion.number}/backend/${fastlyBackendName}`, {
        headers: {
            'Fastly-Key': fastlyKey,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body: `address=${newHost}&hostname=${newHost}&ssl_cert_hostname=${newHost}&ssl_sni_hostname=${newHost}`
    });

    // Update "host" VCL snippet.
    const hostSnippetName = 'host';
    const hostSnippet = await got.get(`https://api.fastly.com/service/${fastlyService}/version/${newVersion.number}/snippet/${hostSnippetName}`, {
        headers: {
            'Fastly-Key': fastlyKey,
        }
    });
    const hostSnippetContent = JSON.parse(hostSnippet.body).content;
    await got.put(`https://api.fastly.com/service/${fastlyService}/version/${newVersion.number}/snippet/${hostSnippetName}`, {
        headers: {
            'Fastly-Key': fastlyKey,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body: `content=${encodeURIComponent(hostSnippetContent.replace(activeFastlyHostname, newHost))}`
    });


    // Activate new version.
    await got.put(`https://api.fastly.com/service/${fastlyService}/version/${newVersion.number}/activate`, {
        headers: {
            'Fastly-Key': fastlyKey
        }
    });
};

(async () => {
    try {
        await updateFastlyBackend();
    } catch (error) {
        console.error(`Error: Unable confirm Fastly is correctly configured for the latest AWS backend "${newHost}".`, error);
    }
})();
