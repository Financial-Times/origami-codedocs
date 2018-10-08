'use strict';

const got = require('got');
const untar = require('decompress');
const fs = require('fs');
const path = require('path');
const tmpDir = require('os').tmpdir();

module.exports = (name, version, language) => {
    const paths = [
        `${language}/`,
        `main.${language}`,
        'origami.json'
    ];
    return new Promise((resolve, reject) => {
        const tarPath = path.join(tmpDir, 'component.tar');
        const file = fs.createWriteStream(tarPath);
        got.stream(`https://api.github.com/repos/Financial-Times/${name}/tarball/${version}`, {
            decompress: true,
            headers: { 'User-Agent': 'OrigamiCodedocsService' }
        }).pipe(file).on('finish', () => {
            untar(tarPath, tmpDir, {
                filter: file => !file.path.includes('demos/src') && paths.find((path) => file.path.includes(path))
            }).then(files => {
                const origamiJsonPath = files.find((file) => file.path.includes('origami.json')).path;
                resolve(path.join(tmpDir, path.dirname(origamiJsonPath)));
            }, error => reject(error));
        }).on('error', (error) => {
            reject(error);
        });
    });
};
