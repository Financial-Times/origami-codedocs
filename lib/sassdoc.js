"use strict";

const sassdoc = require('sassdoc');
const tmpDir = require('os').tmpdir();
const path = require('path');
const Codedoc = require('./codedoc');

class SassDoc extends Codedoc {
    constructor() {
        super('scss');
    }

    generateFor(codeDirectory) {
        const sassdocTheme = function (doclets) {
            return (dest, ctx) => {
                return new Promise((resolve, reject) => {
                    doclets.push(...ctx.data)
                    resolve(doclets);
                });
            }
        };
        sassdocTheme.annotations = [];
        sassdocTheme.annotations.push(function () {
            return {
                name: 'brand',
                parse: brand => {
                    const brandRegex = new RegExp('^[ \t]*((?:(?:master|internal|whitelabel)(?:[ \t|]*))+)[ \t]*([^\n]*?)[ \t]*$');
                    const brandString = brandRegex.exec(brand)[1];
                    const description = brandRegex.exec(brand)[2];
                    const brands = brandString.split('|').map(brand => {
                        return brand.trim();
                    });
                    return {
                        supported: brands,
                        description
                    };
                },
                multiple: false
            };
        });

        return new Promise((resolve, reject) => {
            let doclets = [];
            const config = {
                theme: sassdocTheme(doclets),
                dest: path.join(tmpDir, '/sass'),
                exclude: [
                    'bower_components/**/*',
                    'node_modules/**/*',
                ]
            };
            sassdoc(codeDirectory, config).then(() => {
                if (doclets.length === 0) {
                    reject(new Error('No doclets were generated.'));
                } else {
                    resolve(JSON.stringify(doclets));
                }
            });
        });
    }
}

module.exports = SassDoc;
