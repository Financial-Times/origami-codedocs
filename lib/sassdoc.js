'use strict';

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
            const sassdocThemeFunction = function (dest, ctx) {
                return new Promise((resolve) => {
                    doclets.push(...ctx.data);
                    resolve(doclets);
                });
            };
            sassdocThemeFunction.annotations = [];
            sassdocThemeFunction.annotations.push(function() {
                return {
                    name: 'brand',
                    parse: brand => {
                        const brandRegex = new RegExp('^[ \t]*((?:(?:master|internal|whitelabel)(?:[ \t|]*))+)[ \t]*([^\n]*?)[ \t]*$');
                        const brandString = brandRegex.exec(brand)[1];
                        const description = brandRegex.exec(brand)[2];
                        const brands = brandString.split('|').map(brand => {
                            return brand.trim();
                        }).reverse();
                        return {
                            supported: brands,
                            description
                        };
                    },
                    multiple: false
                };
            });
            return sassdocThemeFunction;
        };

        return new Promise((resolve, reject) => {
            const doclets = [];
            const config = {
                theme: sassdocTheme(doclets),
                dest: path.join(tmpDir, '/sass'),
                exclude: [
                    'bower_components/**/*',
                    'node_modules/**/*',
                ]
            };
            sassdoc(codeDirectory, config).then(() => {
                resolve(JSON.stringify(doclets));
            }).catch(() => {
                reject(new Error('sassdoc failed to generate doclets'));
            });
        });
    }
}

module.exports = SassDoc;
