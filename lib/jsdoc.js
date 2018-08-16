"use strict";

const path = require('path');
const fs = require('fs');
const child_process = require('child_process');

module.exports = (dir) => {
    return new Promise((resolve, reject) => {
        let doclets = '';
        const mainJs = fs.existsSync(path.join(dir, 'main.js')) ? path.join(dir, 'main.js') : '';
        const srcJs = fs.existsSync(path.join(dir, '/src')) ? path.join(dir, '/src') : '';
        child_process.exec(`${require.resolve('jsdoc/jsdoc')} --explain --recurse --nocolor ${mainJs} ${srcJs} | sed  's|'${dir}'||g'`).stdout.on('data', function (data) {
            doclets = doclets += data;
        }).on('end', () => {
            if (doclets == '') {
                reject(new Error('No doclets were generated.'));
            } else {
                resolve(doclets);
            }
        });
    });
}
