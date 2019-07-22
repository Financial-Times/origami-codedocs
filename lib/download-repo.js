'use strict';

const got = require('got');
const untar = require('decompress');
const fs = require('fs');
const path = require('path');
const tmpDir = require('os').tmpdir();
const { URL } = require('url');

module.exports = (repoUrl, name, version, language) => {
    return new Promise((resolve, reject) => {
        const tarPath = path.join(tmpDir, 'component.tar');
        const file = fs.createWriteStream(tarPath);
        const url = new URL(repoUrl);
        if (url.host !== 'github.com') {
            throw new Error(`Could not download repo from "${repoUrl}". Only github.com is supported."`);
        }
        const githubOrganisation = url.pathname.split('/').find(path => path);
        const githubTimeout = 500;
        const stream = got.stream(`https://api.github.com/repos/${githubOrganisation}/${name}/tarball/${version}`, {
            timeout: {
                response: githubTimeout
            },
            decompress: true,
            headers: { 'User-Agent': 'OrigamiCodedocsService' }
        });
        stream.on('error', error => {
            if (error.code === 'ETIMEDOUT') {
                error.message = `Github took longer than ${githubTimeout}ms to respond.`;
            }
            reject(error)
        });

        const fileStream = stream.pipe(file);
        fileStream.on('error', error => reject(error));
        fileStream.on('finish', () => {
            const filterRegex = new RegExp(`^(?:[^\/]*)\/(?:lib\/|src\/|main\.${language}|origami\.json)`, 'g');
            untar(tarPath, tmpDir, {
                filter: file => {
                    return file.path && file.path.match(filterRegex);
                }
            }).then(files => {
                const origamiJsonPath = files.find((file) => file.path && file.path.includes('origami.json')).path;
                resolve(path.join(tmpDir, path.dirname(origamiJsonPath)));
            }, error => reject(error));
        });
    });
};
