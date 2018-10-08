'use strict';

const path = require('path');
const fs = require('fs');
const Codedoc = require('./codedoc');
const execa = require('execa');

class JsDoc extends Codedoc {
    constructor() {
        super('js');
    }

    async generateFor(codeDirectory) {
        const mainJs = fs.existsSync(path.join(codeDirectory, 'main.js')) ? path.join(codeDirectory, 'main.js') : '';
        const srcJs = fs.existsSync(path.join(codeDirectory, '/src')) ? path.join(codeDirectory, '/src') : '';
        try {
            const { stdout } = await execa.shell(`${require.resolve('jsdoc/jsdoc')} --explain --recurse --nocolor ${mainJs} ${srcJs} | sed  's|'${codeDirectory}'||g'`);
            return stdout;
        } catch (error) {
            console.log('jsdoc failed to generate doclets: ' + error.message);
            throw new Error('jsdoc failed to generate doclets');
        }
    }
}

module.exports = JsDoc;
