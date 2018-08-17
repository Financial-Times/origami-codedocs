"use strict";

const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const Codedoc = require('./codedoc');

class JsDoc extends Codedoc {
    constructor() {
        super('js');
    }

    generateFor(codeDirectory) {
        return new Promise((resolve, reject) => {
            let doclets = '';
            const mainJs = fs.existsSync(path.join(codeDirectory, 'main.js')) ? path.join(codeDirectory, 'main.js') : '';
            const srcJs = fs.existsSync(path.join(codeDirectory, '/src')) ? path.join(codeDirectory, '/src') : '';
            child_process.exec(`${require.resolve('jsdoc/jsdoc')} --explain --recurse --nocolor ${mainJs} ${srcJs} | sed  's|'${codeDirectory}'||g'`).stdout.on('data', function (data) {
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
}

module.exports = JsDoc;
