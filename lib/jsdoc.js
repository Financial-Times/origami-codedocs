'use strict';

const path = require('path');
const fs = require('fs');
const { Codedoc, NoCodeInputError} = require('./codedoc');
const execa = require('execa');

class JsDoc extends Codedoc {
    constructor() {
        super('js');
    }

    /**
     * @param {string} codeDirectory
     * @throws {NoCodeInputError} - When the codeDirectory appears to have no js files.
     */
    async generateFor(codeDirectory) {
        // Get paths with JS.
        const mainJs = fs.existsSync(path.join(codeDirectory, 'main.js')) ? path.join(codeDirectory, 'main.js') : '';
        const srcJs = fs.existsSync(path.join(codeDirectory, '/src')) ? path.join(codeDirectory, '/src') : '';
        const libJs = fs.existsSync(path.join(codeDirectory, '/lib')) ? path.join(codeDirectory, '/lib') : '';

        // Validate the JS directory includes a path with a '.js' extension.
        const dirHasJs = (dir) => {
            const paths = dir ? fs.readdirSync(dir, { withFileTypes: true }) : [];
            return paths.some(p => {
                if (p.isDirectory()) {
                    return dirHasJs(path.join(dir, p.name));
                }
                return p.name.match(/\.js$/);
            });
        };
        if (!mainJs && !dirHasJs(srcJs) && !dirHasJs(libJs)) {
            console.log(`No JavaScript files detected in: ${mainJs}, ${srcJs}, ${libJs}`);
            throw new NoCodeInputError('No JavaScript files detected to generate codedocs for');
        }

        // Generate jsdoc doclets for the JS paths.
        let jsdocOutput = '';
        try {
            const { stdout } = await execa.command(`${require.resolve('jsdoc/jsdoc')} --explain --recurse --nocolor ${mainJs} ${srcJs} ${libJs}`);
            const codeDirectoryRegex = new RegExp(codeDirectory, 'g');
            jsdocOutput = stdout.replace(codeDirectoryRegex, '');
        } catch (error) {
            console.log('Jsdoc failed to generate doclets: ' + error.message);
            throw new Error('Jsdoc failed to generate doclets');
        }
        // Validate jsdoc output can be parsed as json.
        try {
            JSON.parse(jsdocOutput);
        } catch (error) {
            console.log(`Unable to parse jsdoc output as json. Jsdoc output: ${jsdocOutput}`);
            throw new Error('Unable to parse jsdoc output as json.');
        }
        // Return jsdoc output.
        return jsdocOutput;
    }
}

module.exports = JsDoc;
