'use strict';

const Sassdoc = require('./../../../lib/sassdoc');
const proclaim = require('proclaim');

describe('lib/sassdoc', () => {
    it('parses @brand annotation', async () => {
        const testSassdoc = new Sassdoc();
        const docletJson = await testSassdoc.generateFor('./test/unit/mock/brand-scss-code/main.scss');
        const doclets = JSON.parse(docletJson);

        const singleBrand = doclets.find(doclet => doclet.context.name === 'singleBrand');
        proclaim.deepEqual(singleBrand.brand, {
            'supported': [
                'master'
            ],
            'description': ''
        });

        const singleBrandPlusParam = doclets.find(doclet => doclet.context.name === 'singleBrandPlusParam');
        proclaim.deepEqual(singleBrandPlusParam.brand, {
            'supported': [
                'master'
            ],
            'description': ''
        });

        const singleBrandDesc = doclets.find(doclet => doclet.context.name === 'singleBrandDesc');
        proclaim.deepEqual(singleBrandDesc.brand, {
            'supported': [
                'internal'
            ],
            'description': 'My description.'
        });

        const multipleBrands = doclets.find(doclet => doclet.context.name === 'multipleBrands');
        proclaim.deepEqual(multipleBrands.brand, {
            'supported': [
                'master',
                'internal'
            ],
            'description': ''
        });

        const multipleBrandPlusParam = doclets.find(doclet => doclet.context.name === 'multipleBrandPlusParam');
        proclaim.deepEqual(multipleBrandPlusParam.brand, {
            'supported': [
                'master',
                'internal'
            ],
            'description': ''
        });

        const multipleBrandsDesc = doclets.find(doclet => doclet.context.name === 'multipleBrandsDesc');
        proclaim.deepEqual(multipleBrandsDesc.brand, {
            'supported': [
                'master',
                'internal'
            ],
            'description': 'My description.'
        });

        const multipleBrandsWithSpace = doclets.find(doclet => doclet.context.name === 'multipleBrandsWithSpace');
        proclaim.deepEqual(multipleBrandsWithSpace.brand, {
            'supported': [
                'master',
                'internal'
            ],
            'description': ''
        });

        const multipleBrandsWithSpaceDesc = doclets.find(doclet => doclet.context.name === 'multipleBrandsWithSpaceDesc');
        proclaim.deepEqual(multipleBrandsWithSpaceDesc.brand, {
            'supported': [
                'master',
                'internal'
            ],
            'description': 'My description.'
        });
    });
});
