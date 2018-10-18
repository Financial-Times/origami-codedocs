/* eslint-disable */
module.exports = [
    {
        "comment": "",
        "meta": {
            "range": [
                21,
                58
            ],
            "filename": "client.js",
            "lineno": 3,
            "columnno": 6,
            "path": "/lib",
            "code": {
                "id": "astnode100000005",
                "name": "defaults",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "defaults",
        "longname": "defaults",
        "kind": "constant",
        "scope": "global",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                66,
                109
            ],
            "filename": "client.js",
            "lineno": 4,
            "columnno": 6,
            "path": "/lib",
            "code": {
                "id": "astnode100000011",
                "name": "request",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "request",
        "longname": "request",
        "kind": "constant",
        "scope": "global",
        "params": []
    },
    {
        "comment": "/**\n * Class representing an Origami Repo Data client.\n *\n * @example <caption>Create a client</caption>\n * const repoData = new RepoDataClient({\n *     apiKey: 'xxxXxXxX-XXXX-XXXX-xXXx-xxxXXXxXXXXX',\n *     apiSecret: 'xxXXXxxXXXXXXXXXxxxxxxxXXXxXxXXXXXXxxXXx'\n * });\n */",
        "meta": {
            "range": [
                385,
                23421
            ],
            "filename": "client.js",
            "lineno": 15,
            "columnno": 0,
            "path": "/lib",
            "code": {
                "id": "astnode100000016",
                "name": "RepoDataClient",
                "type": "ClassDeclaration",
                "paramnames": [
                    "options"
                ]
            }
        },
        "classdesc": "Class representing an Origami Repo Data client.",
        "examples": [
            "<caption>Create a client</caption>\nconst repoData = new RepoDataClient({\n    apiKey: 'xxxXxXxX-XXXX-XXXX-xXXx-xxxXXXxXXXXX',\n    apiSecret: 'xxXXXxxXXXXXXXXXxxxxxxxXXXxXxXXXXXXxxXXx'\n});"
        ],
        "name": "RepoDataClient",
        "longname": "RepoDataClient",
        "kind": "class",
        "scope": "global",
        "description": "Create an Origami Repo Data client.",
        "params": [
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "optional": true,
                "description": "The client options.",
                "name": "options"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "optional": true,
                "description": "The API key to use when making requests.\nDefaults to the value of the <code>REPO_DATA_API_KEY</code> environment variable.",
                "name": "options.apiKey"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "optional": true,
                "description": "The API secret to use when making requests.\nDefaults to the value of the <code>REPO_DATA_API_SECRET</code> environment variable.",
                "name": "options.apiSecret"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "optional": true,
                "description": "The URL of the Origami Repo Data service.\nDefaults to the value of the <code>REPO_DATA_API_URL</code> environment variable or the production service.",
                "name": "options.apiUrl"
            }
        ]
    },
    {
        "comment": "/**\n\t * Create an Origami Repo Data client.\n\t * @param {Object} [options] - The client options.\n\t * @param {String} [options.apiKey] - The API key to use when making requests.\n\t * Defaults to the value of the <code>REPO_DATA_API_KEY</code> environment variable.\n\t * @param {String} [options.apiSecret] - The API secret to use when making requests.\n\t * Defaults to the value of the <code>REPO_DATA_API_SECRET</code> environment variable.\n\t * @param {String} [options.apiUrl] - The URL of the Origami Repo Data service.\n\t * Defaults to the value of the <code>REPO_DATA_API_URL</code> environment variable or the production service.\n\t * @returns {RepoDataClient} A new RepoDataClient instance.\n\t */",
        "meta": {
            "range": [
                1107,
                1189
            ],
            "filename": "client.js",
            "lineno": 28,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000019",
                "name": "RepoDataClient",
                "type": "MethodDefinition",
                "paramnames": [
                    "options"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Create an Origami Repo Data client.",
        "params": [
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "optional": true,
                "description": "The client options.",
                "name": "options"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "optional": true,
                "description": "The API key to use when making requests.\nDefaults to the value of the <code>REPO_DATA_API_KEY</code> environment variable.",
                "name": "options.apiKey"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "optional": true,
                "description": "The API secret to use when making requests.\nDefaults to the value of the <code>REPO_DATA_API_SECRET</code> environment variable.",
                "name": "options.apiSecret"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "optional": true,
                "description": "The URL of the Origami Repo Data service.\nDefaults to the value of the <code>REPO_DATA_API_URL</code> environment variable or the production service.",
                "name": "options.apiUrl"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "RepoDataClient"
                    ]
                },
                "description": "A new RepoDataClient instance."
            }
        ],
        "name": "RepoDataClient",
        "longname": "RepoDataClient",
        "kind": "class",
        "scope": "global",
        "undocumented": true
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1132,
                1185
            ],
            "filename": "client.js",
            "lineno": 29,
            "columnno": 2,
            "path": "/lib",
            "code": {
                "id": "astnode100000025",
                "name": "this.options",
                "type": "CallExpression",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "options",
        "longname": "RepoDataClient#options",
        "kind": "member",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Get a list of all available Origami repositories as an array.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos}\n\t * @param {Object} [filters] - Parameters to filter repositories by.\n\t * @param {(Array.<String>|String|null)} [filters.brand] - A brand (or an array of brands) to filter repositories by.\n\t * One of: <code>'master'</code>, <code>'internal'</code>, <code>'whitelabel'</code>.\n\t * Any repository which doesn't include this brand will not be included in the response.\n\t * If this parameter is set to <code>'none'</code> or <code>null</code> then only repositories which are not branded will be output.\n\t * If this parameter is set to <code>'all'</code> then only repositories which have at least one brand will be output.\n\t * @param {String} [filters.search] - free text to search repositories by.\n\t * Searchable fields are name, description, keywords, and demo titles.\n\t * Any repository which doesn't match the search string will not be included in the response.\n\t * @param {(Array.<String>|String)} [filters.status] - An Origami component support status (or an array of statuses) to filter repositories by.\n\t * One of: <code>'active'</code>, <code>'maintained'</code>, <code>'experimental'</code>, <code>'deprecated'</code>, <code>'dead'</code>.\n\t * Any repository which doesn't have this status will not be included in the response.\n\t * @param {(Array.<String>|String)} [filters.type] - An Origami repo type (or an array of types) to filter repositories by.\n\t * One of: <code>'module'</code>, <code>'service'</code>, <code>'imageset'</code>.\n\t * Any repository which doesn't have this type will not be included in the response.\n\t * @returns {Promise<Array>} A promise which resolves with the repositories.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>List repositories</caption>\n\t * const repos = await repoData.listRepos();\n\t *\n\t * @example <caption>List repositories with filters</caption>\n\t * const repos = await repoData.listRepos({\n\t *     brand: 'master',\n\t *     search: 'color',\n\t *     status: 'active',\n\t *     type: 'module'\n\t *});\n\t */",
        "meta": {
            "range": [
                3386,
                4198
            ],
            "filename": "client.js",
            "lineno": 64,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000034",
                "name": "RepoDataClient#listRepos",
                "type": "MethodDefinition",
                "paramnames": [
                    "filters"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a list of all available Origami repositories as an array.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "optional": true,
                "description": "Parameters to filter repositories by.",
                "name": "filters"
            },
            {
                "type": {
                    "names": [
                        "Array.<String>",
                        "String",
                        "null"
                    ]
                },
                "optional": true,
                "description": "A brand (or an array of brands) to filter repositories by.\nOne of: <code>'master'</code>, <code>'internal'</code>, <code>'whitelabel'</code>.\nAny repository which doesn't include this brand will not be included in the response.\nIf this parameter is set to <code>'none'</code> or <code>null</code> then only repositories which are not branded will be output.\nIf this parameter is set to <code>'all'</code> then only repositories which have at least one brand will be output.",
                "name": "filters.brand"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "optional": true,
                "description": "free text to search repositories by.\nSearchable fields are name, description, keywords, and demo titles.\nAny repository which doesn't match the search string will not be included in the response.",
                "name": "filters.search"
            },
            {
                "type": {
                    "names": [
                        "Array.<String>",
                        "String"
                    ]
                },
                "optional": true,
                "description": "An Origami component support status (or an array of statuses) to filter repositories by.\nOne of: <code>'active'</code>, <code>'maintained'</code>, <code>'experimental'</code>, <code>'deprecated'</code>, <code>'dead'</code>.\nAny repository which doesn't have this status will not be included in the response.",
                "name": "filters.status"
            },
            {
                "type": {
                    "names": [
                        "Array.<String>",
                        "String"
                    ]
                },
                "optional": true,
                "description": "An Origami repo type (or an array of types) to filter repositories by.\nOne of: <code>'module'</code>, <code>'service'</code>, <code>'imageset'</code>.\nAny repository which doesn't have this type will not be included in the response.",
                "name": "filters.type"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Array>"
                    ]
                },
                "description": "A promise which resolves with the repositories."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>List repositories</caption>\nconst repos = await repoData.listRepos();",
            "<caption>List repositories with filters</caption>\nconst repos = await repoData.listRepos({\n    brand: 'master',\n    search: 'color',\n    status: 'active',\n    type: 'module'\n});"
        ],
        "name": "listRepos",
        "longname": "RepoDataClient#listRepos",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3421,
                3426
            ],
            "filename": "client.js",
            "lineno": 65,
            "columnno": 9,
            "path": "/lib",
            "code": {
                "id": "astnode100000044",
                "name": "brand",
                "type": "Identifier",
                "value": "brand"
            }
        },
        "undocumented": true,
        "name": "brand",
        "longname": "brand",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3428,
                3434
            ],
            "filename": "client.js",
            "lineno": 65,
            "columnno": 16,
            "path": "/lib",
            "code": {
                "id": "astnode100000046",
                "name": "search",
                "type": "Identifier",
                "value": "search"
            }
        },
        "undocumented": true,
        "name": "search",
        "longname": "search",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3436,
                3442
            ],
            "filename": "client.js",
            "lineno": 65,
            "columnno": 24,
            "path": "/lib",
            "code": {
                "id": "astnode100000048",
                "name": "status",
                "type": "Identifier",
                "value": "status"
            }
        },
        "undocumented": true,
        "name": "status",
        "longname": "status",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3444,
                3448
            ],
            "filename": "client.js",
            "lineno": 65,
            "columnno": 32,
            "path": "/lib",
            "code": {
                "id": "astnode100000050",
                "name": "type",
                "type": "Identifier",
                "value": "type"
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "type",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3469,
                3479
            ],
            "filename": "client.js",
            "lineno": 66,
            "columnno": 8,
            "path": "/lib",
            "code": {
                "id": "astnode100000054",
                "name": "query",
                "type": "ObjectExpression",
                "value": "{}"
            }
        },
        "undocumented": true,
        "name": "query",
        "longname": "<anonymous>~query",
        "kind": "constant",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3552,
                3581
            ],
            "filename": "client.js",
            "lineno": 70,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000067",
                "name": "query.brand",
                "type": "CallExpression",
                "funcscope": "<anonymous>",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "brand",
        "longname": "<anonymous>~query.brand",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3614,
                3634
            ],
            "filename": "client.js",
            "lineno": 73,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000082",
                "name": "query.brand",
                "type": "Literal",
                "funcscope": "<anonymous>",
                "value": "none",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "brand",
        "longname": "<anonymous>~query.brand",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3687,
                3706
            ],
            "filename": "client.js",
            "lineno": 76,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000096",
                "name": "query.brand",
                "type": "Identifier",
                "funcscope": "<anonymous>",
                "value": "brand",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "brand",
        "longname": "<anonymous>~query.brand",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3778,
                3794
            ],
            "filename": "client.js",
            "lineno": 81,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000110",
                "name": "query.q",
                "type": "Identifier",
                "funcscope": "<anonymous>",
                "value": "search",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "q",
        "longname": "<anonymous>~query.q",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3874,
                3905
            ],
            "filename": "client.js",
            "lineno": 86,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000125",
                "name": "query.status",
                "type": "CallExpression",
                "funcscope": "<anonymous>",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "status",
        "longname": "<anonymous>~query.status",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3960,
                3981
            ],
            "filename": "client.js",
            "lineno": 89,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000143",
                "name": "query.status",
                "type": "Identifier",
                "funcscope": "<anonymous>",
                "value": "status",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "status",
        "longname": "<anonymous>~query.status",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4055,
                4082
            ],
            "filename": "client.js",
            "lineno": 94,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000158",
                "name": "query.type",
                "type": "CallExpression",
                "funcscope": "<anonymous>",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "<anonymous>~query.type",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4133,
                4150
            ],
            "filename": "client.js",
            "lineno": 97,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000176",
                "name": "query.type",
                "type": "Identifier",
                "funcscope": "<anonymous>",
                "value": "type",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "<anonymous>~query.type",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "/**\n\t * Get a list of all branded Origami repositories as an array.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos}\n\t * @param {String} brand Brand to look for. One of: 'all', 'master', 'internal', 'whitelabel' or 'none'\n\t * @returns {Promise<Array>} A promise which resolves with the repositories.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t * @deprecated Deprecated in favour of filter options for {@link RepoDataClient#listRepos}.\n\t *\n\t * @example <caption>List repositories based on brand</caption>\n\t * const repos = await repoData.listBrandedRepos('all');\n\t */",
        "meta": {
            "range": [
                4870,
                5000
            ],
            "filename": "client.js",
            "lineno": 114,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000188",
                "name": "RepoDataClient#listBrandedRepos",
                "type": "MethodDefinition",
                "paramnames": [
                    "brand"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a list of all branded Origami repositories as an array.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "Brand to look for. One of: 'all', 'master', 'internal', 'whitelabel' or 'none'",
                "name": "brand"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Array>"
                    ]
                },
                "description": "A promise which resolves with the repositories."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "deprecated": "Deprecated in favour of filter options for {@link RepoDataClient#listRepos}.",
        "examples": [
            "<caption>List repositories based on brand</caption>\nconst repos = await repoData.listBrandedRepos('all');"
        ],
        "name": "listBrandedRepos",
        "longname": "RepoDataClient#listBrandedRepos",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4904,
                4914
            ],
            "filename": "client.js",
            "lineno": 115,
            "columnno": 8,
            "path": "/lib",
            "code": {
                "id": "astnode100000194",
                "name": "query",
                "type": "ObjectExpression",
                "value": "{}"
            }
        },
        "undocumented": true,
        "name": "query",
        "longname": "<anonymous>~query",
        "kind": "constant",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4934,
                4953
            ],
            "filename": "client.js",
            "lineno": 117,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000201",
                "name": "query.brand",
                "type": "Identifier",
                "funcscope": "<anonymous>",
                "value": "brand",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "brand",
        "longname": "<anonymous>~query.brand",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "/**\n\t * Get a single Origami repository by ID or name.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)}\n\t * @param {String} repoId - The repository UUID or name. Warning: using name over ID incurs a redirect.\n\t * @returns {Promise<Object>} A promise which resolves with the repository.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get a repository using a UUID</caption>\n\t * const repo = await repoData.getRepo('c3a499f8-3d20-503c-95b0-c4705bc272b3');\n\t *\n\t * @example <caption>Get a repository using a name</caption>\n\t * const repo = await repoData.getRepo('origami-repo-data');\n\t */",
        "meta": {
            "range": [
                5718,
                5780
            ],
            "filename": "client.js",
            "lineno": 135,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000213",
                "name": "RepoDataClient#getRepo",
                "type": "MethodDefinition",
                "paramnames": [
                    "repoId"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a single Origami repository by ID or name.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The repository UUID or name. Warning: using name over ID incurs a redirect.",
                "name": "repoId"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Object>"
                    ]
                },
                "description": "A promise which resolves with the repository."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get a repository using a UUID</caption>\nconst repo = await repoData.getRepo('c3a499f8-3d20-503c-95b0-c4705bc272b3');",
            "<caption>Get a repository using a name</caption>\nconst repo = await repoData.getRepo('origami-repo-data');"
        ],
        "name": "getRepo",
        "longname": "RepoDataClient#getRepo",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Get a list of all versions for an Origami repository as an array.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions}\n\t * @param {String} repoId - The repository UUID or name. Warning: using name over ID incurs a redirect.\n\t * @returns {Promise<Array>} A promise which resolves with the versions.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get all repository versions using a UUID</caption>\n\t * const versions = await repoData.listVersions('c3a499f8-3d20-503c-95b0-c4705bc272b3');\n\t *\n\t * @example <caption>Get all repository versions using a name</caption>\n\t * const versions = await repoData.listVersions('origami-repo-data');\n\t */",
        "meta": {
            "range": [
                6563,
                6639
            ],
            "filename": "client.js",
            "lineno": 152,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000227",
                "name": "RepoDataClient#listVersions",
                "type": "MethodDefinition",
                "paramnames": [
                    "repoId"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a list of all versions for an Origami repository as an array.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The repository UUID or name. Warning: using name over ID incurs a redirect.",
                "name": "repoId"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Array>"
                    ]
                },
                "description": "A promise which resolves with the versions."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get all repository versions using a UUID</caption>\nconst versions = await repoData.listVersions('c3a499f8-3d20-503c-95b0-c4705bc272b3');",
            "<caption>Get all repository versions using a name</caption>\nconst versions = await repoData.listVersions('origami-repo-data');"
        ],
        "name": "listVersions",
        "longname": "RepoDataClient#listVersions",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Get a single version for an Origami repository by ID or name.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)}\n\t * @param {String} repoId - The repository UUID or name. Warning: using name over ID incurs a redirect.\n\t * @param {String} versionId - The version UUID or number. Warning: using number over ID incurs a redirect.\n\t * @returns {Promise<Object>} A promise which resolves with the version.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get a repository version using UUIDs</caption>\n\t * const version = await repoData.getVersion('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');\n\t *\n\t * @example <caption>Get a repository version using a name and number</caption>\n\t * const version = await repoData.getVersion('origami-repo-data', '57.0.0');\n\t */",
        "meta": {
            "range": [
                7580,
                7678
            ],
            "filename": "client.js",
            "lineno": 170,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000241",
                "name": "RepoDataClient#getVersion",
                "type": "MethodDefinition",
                "paramnames": [
                    "repoId",
                    "versionId"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a single version for an Origami repository by ID or name.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The repository UUID or name. Warning: using name over ID incurs a redirect.",
                "name": "repoId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The version UUID or number. Warning: using number over ID incurs a redirect.",
                "name": "versionId"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Object>"
                    ]
                },
                "description": "A promise which resolves with the version."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get a repository version using UUIDs</caption>\nconst version = await repoData.getVersion('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');",
            "<caption>Get a repository version using a name and number</caption>\nconst version = await repoData.getVersion('origami-repo-data', '57.0.0');"
        ],
        "name": "getVersion",
        "longname": "RepoDataClient#getVersion",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Get a single manifest for an Origami repository and version by type.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-manifests-(type)}\n\t * @param {String} repoId - The repository UUID or name. Warning: using name over ID incurs a redirect.\n\t * @param {String} versionId - The version UUID or number. Warning: using number over ID incurs a redirect.\n\t * @param {String} manifestType - The type of manifest to retrieve. One of \"about\", \"bower\", \"imageSet\", \"origami\", or \"package\".\n\t * @returns {Promise<Object>} A promise which resolves with the manifest file contents parsed as JSON.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get a manifest using UUIDs</caption>\n\t * const packageManifest = await repoData.getManifest('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c', 'package');\n\t *\n\t * @example <caption>Get a manifest using a name and number</caption>\n\t * const packageManifest = await repoData.getManifest('origami-repo-data', '57.0.0', 'package');\n\t */",
        "meta": {
            "range": [
                8824,
                8963
            ],
            "filename": "client.js",
            "lineno": 189,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000258",
                "name": "RepoDataClient#getManifest",
                "type": "MethodDefinition",
                "paramnames": [
                    "repoId",
                    "versionId",
                    "manifestType"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a single manifest for an Origami repository and version by type.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-manifests-(type)}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The repository UUID or name. Warning: using name over ID incurs a redirect.",
                "name": "repoId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The version UUID or number. Warning: using number over ID incurs a redirect.",
                "name": "versionId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The type of manifest to retrieve. One of \"about\", \"bower\", \"imageSet\", \"origami\", or \"package\".",
                "name": "manifestType"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Object>"
                    ]
                },
                "description": "A promise which resolves with the manifest file contents parsed as JSON."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get a manifest using UUIDs</caption>\nconst packageManifest = await repoData.getManifest('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c', 'package');",
            "<caption>Get a manifest using a name and number</caption>\nconst packageManifest = await repoData.getManifest('origami-repo-data', '57.0.0', 'package');"
        ],
        "name": "getManifest",
        "longname": "RepoDataClient#getManifest",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Get a single markdown document for an Origami repository and version by type.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-markdown-(type)}\n\t * @param {String} repoId - The repository UUID or name. Warning: using name over ID incurs a redirect.\n\t * @param {String} versionId - The version UUID or number. Warning: using number over ID incurs a redirect.\n\t * @param {String} markdownType - The type of markdown document to retrieve. One of \"designguidelines\" or \"readme\".\n\t * @returns {Promise<String>} A promise which resolves with the markdown document as a string.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get a markdown document using UUIDs</caption>\n\t * const readme = await repoData.getMarkdown('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c', 'readme');\n\t *\n\t * @example <caption>Get a markdown document using a name and number</caption>\n\t * const readme = await repoData.getMarkdown('origami-repo-data', '57.0.0', 'readme');\n\t */",
        "meta": {
            "range": [
                10093,
                10231
            ],
            "filename": "client.js",
            "lineno": 208,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000278",
                "name": "RepoDataClient#getMarkdown",
                "type": "MethodDefinition",
                "paramnames": [
                    "repoId",
                    "versionId",
                    "markdownType"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a single markdown document for an Origami repository and version by type.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-markdown-(type)}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The repository UUID or name. Warning: using name over ID incurs a redirect.",
                "name": "repoId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The version UUID or number. Warning: using number over ID incurs a redirect.",
                "name": "versionId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The type of markdown document to retrieve. One of \"designguidelines\" or \"readme\".",
                "name": "markdownType"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<String>"
                    ]
                },
                "description": "A promise which resolves with the markdown document as a string."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get a markdown document using UUIDs</caption>\nconst readme = await repoData.getMarkdown('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c', 'readme');",
            "<caption>Get a markdown document using a name and number</caption>\nconst readme = await repoData.getMarkdown('origami-repo-data', '57.0.0', 'readme');"
        ],
        "name": "getMarkdown",
        "longname": "RepoDataClient#getMarkdown",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Get the README text for an Origami repository and version. This is a shortcut method which uses {@link RepoDataClient.getMarkdown}.\n\t * @param {String} repoId - The repository UUID or name. Warning: using name over ID incurs a redirect.\n\t * @param {String} versionId - The version UUID or number. Warning: using number over ID incurs a redirect.\n\t * @returns {Promise<String>} A promise which resolves with the README as a string.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get the README using UUIDs</caption>\n\t * const readme = await repoData.getReadme('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');\n\t *\n\t * @example <caption>Get the README using a name and number</caption>\n\t * const readme = await repoData.getReadme('origami-repo-data', '57.0.0');\n\t */",
        "meta": {
            "range": [
                11122,
                11211
            ],
            "filename": "client.js",
            "lineno": 225,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000298",
                "name": "RepoDataClient#getReadme",
                "type": "MethodDefinition",
                "paramnames": [
                    "repoId",
                    "versionId"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get the README text for an Origami repository and version. This is a shortcut method which uses {@link RepoDataClient.getMarkdown}.",
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The repository UUID or name. Warning: using name over ID incurs a redirect.",
                "name": "repoId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The version UUID or number. Warning: using number over ID incurs a redirect.",
                "name": "versionId"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<String>"
                    ]
                },
                "description": "A promise which resolves with the README as a string."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get the README using UUIDs</caption>\nconst readme = await repoData.getReadme('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');",
            "<caption>Get the README using a name and number</caption>\nconst readme = await repoData.getReadme('origami-repo-data', '57.0.0');"
        ],
        "name": "getReadme",
        "longname": "RepoDataClient#getReadme",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Get a list of all demos for an Origami repository and version as an array.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-demos}\n\t * @param {String} repoId - The repository UUID or name. Warning: using name over ID incurs a redirect.\n\t * @param {String} versionId - The version UUID or number. Warning: using number over ID incurs a redirect.\n\t * @param {String} [brand=null] - The brand to filter demos by. If included, only demos with the specified brand (or no brands at all) will be returned.\n\t * @returns {Promise<String>} A promise which resolves with the demos.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get all demos</caption>\n\t * const demos = await repoData.listDemos('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');\n\t *\n\t * @example <caption>Get all demos with a brand filter</caption>\n\t * const demos = await repoData.listDemos('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c', 'internal');\n\t */",
        "meta": {
            "range": [
                12340,
                12527
            ],
            "filename": "client.js",
            "lineno": 244,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000312",
                "name": "RepoDataClient#listDemos",
                "type": "MethodDefinition",
                "paramnames": [
                    "repoId",
                    "versionId",
                    "brand"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a list of all demos for an Origami repository and version as an array.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-demos}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The repository UUID or name. Warning: using name over ID incurs a redirect.",
                "name": "repoId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The version UUID or number. Warning: using number over ID incurs a redirect.",
                "name": "versionId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "optional": true,
                "defaultvalue": null,
                "description": "The brand to filter demos by. If included, only demos with the specified brand (or no brands at all) will be returned.",
                "name": "brand"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<String>"
                    ]
                },
                "description": "A promise which resolves with the demos."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get all demos</caption>\nconst demos = await repoData.listDemos('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');",
            "<caption>Get all demos with a brand filter</caption>\nconst demos = await repoData.listDemos('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c', 'internal');"
        ],
        "name": "listDemos",
        "longname": "RepoDataClient#listDemos",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                12393,
                12403
            ],
            "filename": "client.js",
            "lineno": 245,
            "columnno": 8,
            "path": "/lib",
            "code": {
                "id": "astnode100000322",
                "name": "query",
                "type": "ObjectExpression",
                "value": "{}"
            }
        },
        "undocumented": true,
        "name": "query",
        "longname": "<anonymous>~query",
        "kind": "constant",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                12423,
                12442
            ],
            "filename": "client.js",
            "lineno": 247,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000329",
                "name": "query.brand",
                "type": "Identifier",
                "funcscope": "<anonymous>",
                "value": "brand",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "brand",
        "longname": "<anonymous>~query.brand",
        "kind": "member",
        "memberof": "<anonymous>~query",
        "scope": "static"
    },
    {
        "comment": "/**\n\t * Get a list of all image set images for an Origami repository and version as an array.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-images}\n\t * @param {String} repoId - The repository UUID or name. Warning: using name over ID incurs a redirect.\n\t * @param {String} versionId - The version UUID or number. Warning: using number over ID incurs a redirect.\n\t * @param {Object} [imageOptions] - Options which change the format of the returned images.\n\t * @param {String} [imageOptions.sourceParam] - The Image Service source parameter to add to the returned image URLs.\n\t * Defaults to \"origami-repo-data-client-node\".\n\t * @returns {Promise<String>} A promise which resolves with the images.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get all images in an image set</caption>\n\t * const images = await repoData.listImages('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');\n\t */",
        "meta": {
            "range": [
                13589,
                13856
            ],
            "filename": "client.js",
            "lineno": 266,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000346",
                "name": "RepoDataClient#listImages",
                "type": "MethodDefinition",
                "paramnames": [
                    "repoId",
                    "versionId",
                    "imageOptions"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a list of all image set images for an Origami repository and version as an array.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-images}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The repository UUID or name. Warning: using name over ID incurs a redirect.",
                "name": "repoId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The version UUID or number. Warning: using number over ID incurs a redirect.",
                "name": "versionId"
            },
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "optional": true,
                "description": "Options which change the format of the returned images.",
                "name": "imageOptions"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "optional": true,
                "description": "The Image Service source parameter to add to the returned image URLs.\nDefaults to \"origami-repo-data-client-node\".",
                "name": "imageOptions.sourceParam"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<String>"
                    ]
                },
                "description": "A promise which resolves with the images."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get all images in an image set</caption>\nconst images = await repoData.listImages('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');"
        ],
        "name": "listImages",
        "longname": "RepoDataClient#listImages",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                13637,
                13733
            ],
            "filename": "client.js",
            "lineno": 267,
            "columnno": 2,
            "path": "/lib",
            "code": {
                "id": "astnode100000354",
                "name": "imageOptions",
                "type": "CallExpression",
                "funcscope": "<anonymous>",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "imageOptions",
        "longname": "<anonymous>~imageOptions",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                13684,
                13728
            ],
            "filename": "client.js",
            "lineno": 268,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000361",
                "name": "sourceParam",
                "type": "Literal",
                "value": "origami-repo-data-client-node"
            }
        },
        "undocumented": true,
        "name": "sourceParam",
        "longname": "sourceParam",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                13810,
                13847
            ],
            "filename": "client.js",
            "lineno": 271,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000375",
                "name": "sourceParam",
                "type": "MemberExpression",
                "value": "imageOptions.sourceParam"
            }
        },
        "undocumented": true,
        "name": "sourceParam",
        "longname": "sourceParam",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "/**\n\t * Get a list of all dependencies for an Origami repository and version as an array.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-dependencies}\n\t * @param {String} repoId - The repository UUID or name. Warning: using name over ID incurs a redirect.\n\t * @param {String} versionId - The version UUID or number. Warning: using number over ID incurs a redirect.\n\t * @returns {Promise<String>} A promise which resolves with the dependencies.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get all dependencies</caption>\n\t * const dependencies = await repoData.listDependencies('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');\n\t */",
        "meta": {
            "range": [
                14667,
                14784
            ],
            "filename": "client.js",
            "lineno": 286,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000379",
                "name": "RepoDataClient#listDependencies",
                "type": "MethodDefinition",
                "paramnames": [
                    "repoId",
                    "versionId"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a list of all dependencies for an Origami repository and version as an array.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/repositories#get-v1-repos-(id)-versions-(id)-dependencies}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The repository UUID or name. Warning: using name over ID incurs a redirect.",
                "name": "repoId"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The version UUID or number. Warning: using number over ID incurs a redirect.",
                "name": "versionId"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<String>"
                    ]
                },
                "description": "A promise which resolves with the dependencies."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get all dependencies</caption>\nconst dependencies = await repoData.listDependencies('c3a499f8-3d20-503c-95b0-c4705bc272b3', 'a530dab8-f6ff-410a-9e56-8d6f49ecff2c');"
        ],
        "name": "listDependencies",
        "longname": "RepoDataClient#listDependencies",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Create a new API key which can be used to access the service (requires admin permissions).\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/keys#post-v1-keys}\n\t * @param {Object} data - Information about the key being created.\n\t * @param {String} data.description - A short human-readable description of the API key.\n\t * @param {Boolean} [data.read=true] - Whether the API key grants read permissions.\n\t * @param {Boolean} [data.write=false] - Whether the API key grants write permissions.\n\t * @param {Boolean} [data.admin=false] - Whether the API key grants admin permissions.\n\t * @returns {Promise<Object>} A promise which resolves with the new credentials.\n\t * These will need to be stored somewhere, as the secret will never be displayed again.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Create an API key</caption>\n\t * const credentials = await repoData.createKey({\n\t *     description: 'A write key for manually adding ingestions',\n\t *     read: true,\n\t *     write: true,\n\t *     admin: false\n\t * });\n\t */",
        "meta": {
            "range": [
                15908,
                15966
            ],
            "filename": "client.js",
            "lineno": 310,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000396",
                "name": "RepoDataClient#createKey",
                "type": "MethodDefinition",
                "paramnames": [
                    "data"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Create a new API key which can be used to access the service (requires admin permissions).",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/keys#post-v1-keys}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "description": "Information about the key being created.",
                "name": "data"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "A short human-readable description of the API key.",
                "name": "data.description"
            },
            {
                "type": {
                    "names": [
                        "Boolean"
                    ]
                },
                "optional": true,
                "defaultvalue": true,
                "description": "Whether the API key grants read permissions.",
                "name": "data.read"
            },
            {
                "type": {
                    "names": [
                        "Boolean"
                    ]
                },
                "optional": true,
                "defaultvalue": false,
                "description": "Whether the API key grants write permissions.",
                "name": "data.write"
            },
            {
                "type": {
                    "names": [
                        "Boolean"
                    ]
                },
                "optional": true,
                "defaultvalue": false,
                "description": "Whether the API key grants admin permissions.",
                "name": "data.admin"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Object>"
                    ]
                },
                "description": "A promise which resolves with the new credentials.\nThese will need to be stored somewhere, as the secret will never be displayed again."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Create an API key</caption>\nconst credentials = await repoData.createKey({\n    description: 'A write key for manually adding ingestions',\n    read: true,\n    write: true,\n    admin: false\n});"
        ],
        "name": "createKey",
        "longname": "RepoDataClient#createKey",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Get a list of all available API keys for the service as an array (requires admin permissions).\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/keys#get-v1-keys}\n\t * @returns {Promise<Array>} A promise which resolves with the API keys.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>List API keys</caption>\n\t * const repos = await repoData.listKeys();\n\t */",
        "meta": {
            "range": [
                16430,
                16476
            ],
            "filename": "client.js",
            "lineno": 323,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000408",
                "name": "RepoDataClient#listKeys",
                "type": "MethodDefinition",
                "paramnames": []
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a list of all available API keys for the service as an array (requires admin permissions).",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/keys#get-v1-keys}"
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Array>"
                    ]
                },
                "description": "A promise which resolves with the API keys."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>List API keys</caption>\nconst repos = await repoData.listKeys();"
        ],
        "name": "listKeys",
        "longname": "RepoDataClient#listKeys",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance",
        "params": []
    },
    {
        "comment": "/**\n\t * Get a single API key for the service by ID.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/keys#get-v1-keys-(id)}\n\t * @param {String} keyId - The key UUID.\n\t * @returns {Promise<Object>} A promise which resolves with the API key.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get an API key</caption>\n\t * const key = await repoData.getKey('xxxXxXxX-XXXX-XXXX-xXXx-xxxXXXxXXXXX');\n\t */",
        "meta": {
            "range": [
                16971,
                17029
            ],
            "filename": "client.js",
            "lineno": 337,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000418",
                "name": "RepoDataClient#getKey",
                "type": "MethodDefinition",
                "paramnames": [
                    "keyId"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a single API key for the service by ID.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/keys#get-v1-keys-(id)}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The key UUID.",
                "name": "keyId"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Object>"
                    ]
                },
                "description": "A promise which resolves with the API key."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get an API key</caption>\nconst key = await repoData.getKey('xxxXxXxX-XXXX-XXXX-xXXx-xxxXXXxXXXXX');"
        ],
        "name": "getKey",
        "longname": "RepoDataClient#getKey",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Delete a single API key from the service by ID.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/keys#delete-v1-keys-(id)}\n\t * @param {String} keyId - The key UUID.\n\t * @returns {Promise<Object>} A promise which resolves when the key is deleted.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Delete an API key</caption>\n\t * await repoData.deleteKey('xxxXxXxX-XXXX-XXXX-xXXx-xxxXXXxXXXXX');\n\t */",
        "meta": {
            "range": [
                17532,
                17596
            ],
            "filename": "client.js",
            "lineno": 351,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000432",
                "name": "RepoDataClient#deleteKey",
                "type": "MethodDefinition",
                "paramnames": [
                    "keyId"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Delete a single API key from the service by ID.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/keys#delete-v1-keys-(id)}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The key UUID.",
                "name": "keyId"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Object>"
                    ]
                },
                "description": "A promise which resolves when the key is deleted."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Delete an API key</caption>\nawait repoData.deleteKey('xxxXxXxX-XXXX-XXXX-xXXx-xxxXXXxXXXXX');"
        ],
        "name": "deleteKey",
        "longname": "RepoDataClient#deleteKey",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Create a new ingestion and add it to the queue (requires write permissions).\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/queue#post-v1-queue}\n\t * @param {Object} data - Information about the ingestion being created.\n\t * @param {String} data.url - The GitHub repository URL to ingest.\n\t * @param {String} data.tag - The GitHub repository tag to ingest.\n\t * @returns {Promise<Object>} A promise which resolves with the new ingestion.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Create an ingestion</caption>\n\t * const credentials = await repoData.createIngestion({\n\t *     url: 'https://github.com/Financial-Times/origami-repo-data',\n\t *     tag: '57.0.0'\n\t * });\n\t */",
        "meta": {
            "range": [
                18378,
                18443
            ],
            "filename": "client.js",
            "lineno": 370,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000446",
                "name": "RepoDataClient#createIngestion",
                "type": "MethodDefinition",
                "paramnames": [
                    "data"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Create a new ingestion and add it to the queue (requires write permissions).",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/queue#post-v1-queue}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "description": "Information about the ingestion being created.",
                "name": "data"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The GitHub repository URL to ingest.",
                "name": "data.url"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The GitHub repository tag to ingest.",
                "name": "data.tag"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Object>"
                    ]
                },
                "description": "A promise which resolves with the new ingestion."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Create an ingestion</caption>\nconst credentials = await repoData.createIngestion({\n    url: 'https://github.com/Financial-Times/origami-repo-data',\n    tag: '57.0.0'\n});"
        ],
        "name": "createIngestion",
        "longname": "RepoDataClient#createIngestion",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Get a list of all current ingestions in the queue as an array.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/queue#get-v1-queue}\n\t * @returns {Promise<Array>} A promise which resolves with the ingestion queue.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>List the ingestion queue</caption>\n\t * const ingestionQueue = await repoData.listIngestions();\n\t */",
        "meta": {
            "range": [
                18910,
                18963
            ],
            "filename": "client.js",
            "lineno": 383,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000458",
                "name": "RepoDataClient#listIngestions",
                "type": "MethodDefinition",
                "paramnames": []
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a list of all current ingestions in the queue as an array.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/queue#get-v1-queue}"
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Array>"
                    ]
                },
                "description": "A promise which resolves with the ingestion queue."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>List the ingestion queue</caption>\nconst ingestionQueue = await repoData.listIngestions();"
        ],
        "name": "listIngestions",
        "longname": "RepoDataClient#listIngestions",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance",
        "params": []
    },
    {
        "comment": "/**\n\t * Get a single ingestion in the queue by ID.\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/queue#get-v1-queue-(id)}\n\t * @param {String} ingestionId - The ingestion UUID.\n\t * @returns {Promise<Object>} A promise which resolves with the ingestion.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Get an ingestion</caption>\n\t * const ingestion = await repoData.getIngestion('799798e6-967d-492e-8fee-f7f35ec39d44');\n\t */",
        "meta": {
            "range": [
                19487,
                19564
            ],
            "filename": "client.js",
            "lineno": 397,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000468",
                "name": "RepoDataClient#getIngestion",
                "type": "MethodDefinition",
                "paramnames": [
                    "ingestionId"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Get a single ingestion in the queue by ID.",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/queue#get-v1-queue-(id)}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The ingestion UUID.",
                "name": "ingestionId"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Object>"
                    ]
                },
                "description": "A promise which resolves with the ingestion."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Get an ingestion</caption>\nconst ingestion = await repoData.getIngestion('799798e6-967d-492e-8fee-f7f35ec39d44');"
        ],
        "name": "getIngestion",
        "longname": "RepoDataClient#getIngestion",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Delete a single ingestion from the queue by ID, preventing that repo/tag combination from being ingested (requires admin permissions).\n\t * @see {@link https://origami-repo-data.ft.com/v1/docs/api/queue#delete-v1-queue-(id)}\n\t * @param {String} ingestionID - The ingestion UUID.\n\t * @returns {Promise<Object>} A promise which resolves when the ingestion is deleted.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t *\n\t * @example <caption>Delete an ingestion</caption>\n\t * await repoData.deleteIngestion('799798e6-967d-492e-8fee-f7f35ec39d44');\n\t */",
        "meta": {
            "range": [
                20182,
                20265
            ],
            "filename": "client.js",
            "lineno": 411,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000482",
                "name": "RepoDataClient#deleteIngestion",
                "type": "MethodDefinition",
                "paramnames": [
                    "ingestionID"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Delete a single ingestion from the queue by ID, preventing that repo/tag combination from being ingested (requires admin permissions).",
        "see": [
            "{@link https://origami-repo-data.ft.com/v1/docs/api/queue#delete-v1-queue-(id)}"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The ingestion UUID.",
                "name": "ingestionID"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise.<Object>"
                    ]
                },
                "description": "A promise which resolves when the ingestion is deleted."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "examples": [
            "<caption>Delete an ingestion</caption>\nawait repoData.deleteIngestion('799798e6-967d-492e-8fee-f7f35ec39d44');"
        ],
        "name": "deleteIngestion",
        "longname": "RepoDataClient#deleteIngestion",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Perform a GET request.\n\t * @private\n\t * @param {String} endpoint - The service endpoint to request. The service base URL will be prepended.\n\t * @param {Object} [query] - Parameters to append to the URL, which will be serialized as a querystring.\n\t * @returns {Promise} A promise which resolves with the response body.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t */",
        "meta": {
            "range": [
                20704,
                20776
            ],
            "filename": "client.js",
            "lineno": 423,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000496",
                "name": "RepoDataClient#get",
                "type": "MethodDefinition",
                "paramnames": [
                    "endpoint",
                    "query"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Perform a GET request.",
        "access": "private",
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The service endpoint to request. The service base URL will be prepended.",
                "name": "endpoint"
            },
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "optional": true,
                "description": "Parameters to append to the URL, which will be serialized as a querystring.",
                "name": "query"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise"
                    ]
                },
                "description": "A promise which resolves with the response body."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "name": "get",
        "longname": "RepoDataClient#get",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Perform a POST request.\n\t * @private\n\t * @param {String} endpoint - The service endpoint to request. The service base URL will be prepended.\n\t * @param {Object} data - The POST data to send, which will be serialized as JSON.\n\t * @returns {Promise} A promise which resolves with the response body.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t */",
        "meta": {
            "range": [
                21194,
                21277
            ],
            "filename": "client.js",
            "lineno": 435,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000510",
                "name": "RepoDataClient#post",
                "type": "MethodDefinition",
                "paramnames": [
                    "endpoint",
                    "data"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Perform a POST request.",
        "access": "private",
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The service endpoint to request. The service base URL will be prepended.",
                "name": "endpoint"
            },
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "description": "The POST data to send, which will be serialized as JSON.",
                "name": "data"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise"
                    ]
                },
                "description": "A promise which resolves with the response body."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "name": "post",
        "longname": "RepoDataClient#post",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Perform a DELETE request.\n\t * @private\n\t * @param {String} endpoint - The service endpoint to request. The service base URL will be prepended.\n\t * @returns {Promise} A promise which resolves with the response body.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t */",
        "meta": {
            "range": [
                21613,
                21677
            ],
            "filename": "client.js",
            "lineno": 446,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000525",
                "name": "RepoDataClient#delete",
                "type": "MethodDefinition",
                "paramnames": [
                    "endpoint"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Perform a DELETE request.",
        "access": "private",
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The service endpoint to request. The service base URL will be prepended.",
                "name": "endpoint"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise"
                    ]
                },
                "description": "A promise which resolves with the response body."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "name": "delete",
        "longname": "RepoDataClient#delete",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Perform an HTTP request.\n\t * @private\n\t * @param {String} method - The HTTP method to perform the request with.\n\t * @param {String} endpoint - The service endpoint to request. The service base URL will be prepended.\n\t * @param {Object} [query] - Parameters to append to the URL, which will be serialized as a querystring.\n\t * @param {Object} [postData] - The data to send (if method is POST), which will be serialized as JSON.\n\t * @returns {Promise} A promise which resolves with the response body.\n\t * @throws {Error} Will throw if a network error occurs, or if the API responds with a 40x/50x status.\n\t */",
        "meta": {
            "range": [
                22297,
                22990
            ],
            "filename": "client.js",
            "lineno": 460,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000537",
                "name": "RepoDataClient#request",
                "type": "MethodDefinition",
                "paramnames": [
                    "method",
                    "endpoint",
                    "query",
                    "postData"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Perform an HTTP request.",
        "access": "private",
        "params": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The HTTP method to perform the request with.",
                "name": "method"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "The service endpoint to request. The service base URL will be prepended.",
                "name": "endpoint"
            },
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "optional": true,
                "description": "Parameters to append to the URL, which will be serialized as a querystring.",
                "name": "query"
            },
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "optional": true,
                "description": "The data to send (if method is POST), which will be serialized as JSON.",
                "name": "postData"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Promise"
                    ]
                },
                "description": "A promise which resolves with the response body."
            }
        ],
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "Will throw if a network error occurs, or if the API responds with a 40x/50x status."
            }
        ],
        "name": "request",
        "longname": "RepoDataClient#request",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "instance",
        "async": true
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22356,
                22651
            ],
            "filename": "client.js",
            "lineno": 461,
            "columnno": 8,
            "path": "/lib",
            "code": {
                "id": "astnode100000546",
                "name": "response",
                "type": "AwaitExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "response",
        "longname": "<anonymous>~response",
        "kind": "constant",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22386,
                22400
            ],
            "filename": "client.js",
            "lineno": 462,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000552",
                "name": "method",
                "type": "Identifier",
                "value": "method"
            }
        },
        "undocumented": true,
        "name": "method",
        "longname": "method",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22405,
                22445
            ],
            "filename": "client.js",
            "lineno": 463,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000554",
                "name": "uri",
                "type": "TemplateLiteral",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "uri",
        "longname": "uri",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22450,
                22459
            ],
            "filename": "client.js",
            "lineno": 464,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000565",
                "name": "qs",
                "type": "Identifier",
                "value": "query"
            }
        },
        "undocumented": true,
        "name": "qs",
        "longname": "qs",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22464,
                22560
            ],
            "filename": "client.js",
            "lineno": 465,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000567",
                "name": "headers",
                "type": "ObjectExpression",
                "value": "{\"undefined\":\"\"}"
            }
        },
        "undocumented": true,
        "name": "headers",
        "longname": "headers",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22479,
                22511
            ],
            "filename": "client.js",
            "lineno": 466,
            "columnno": 4,
            "path": "/lib",
            "code": {
                "id": "astnode100000569",
                "name": "\"X-Api-Key\"",
                "type": "MemberExpression",
                "value": "this.options.apiKey"
            }
        },
        "undocumented": true,
        "name": "\"X-Api-Key\"",
        "longname": "headers.\"X-Api-Key\"",
        "kind": "member",
        "memberof": "headers",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22517,
                22555
            ],
            "filename": "client.js",
            "lineno": 467,
            "columnno": 4,
            "path": "/lib",
            "code": {
                "id": "astnode100000575",
                "name": "\"X-Api-Secret\"",
                "type": "MemberExpression",
                "value": "this.options.apiSecret"
            }
        },
        "undocumented": true,
        "name": "\"X-Api-Secret\"",
        "longname": "headers.\"X-Api-Secret\"",
        "kind": "member",
        "memberof": "headers",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22565,
                22579
            ],
            "filename": "client.js",
            "lineno": 469,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000581",
                "name": "body",
                "type": "Identifier",
                "value": "postData"
            }
        },
        "undocumented": true,
        "name": "body",
        "longname": "body",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22584,
                22613
            ],
            "filename": "client.js",
            "lineno": 470,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000583",
                "name": "resolveWithFullResponse",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "resolveWithFullResponse",
        "longname": "resolveWithFullResponse",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22618,
                22631
            ],
            "filename": "client.js",
            "lineno": 471,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000585",
                "name": "simple",
                "type": "Literal",
                "value": false
            }
        },
        "undocumented": true,
        "name": "simple",
        "longname": "simple",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22636,
                22646
            ],
            "filename": "client.js",
            "lineno": 472,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000587",
                "name": "json",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "json",
        "longname": "json",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22696,
                22701
            ],
            "filename": "client.js",
            "lineno": 475,
            "columnno": 7,
            "path": "/lib",
            "code": {
                "id": "astnode100000597",
                "name": "error"
            }
        },
        "undocumented": true,
        "name": "error",
        "longname": "<anonymous>~error",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22742,
                22827
            ],
            "filename": "client.js",
            "lineno": 477,
            "columnno": 4,
            "path": "/lib",
            "code": {
                "id": "astnode100000607",
                "name": "error",
                "type": "NewExpression",
                "funcscope": "<anonymous>",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "error",
        "longname": "<anonymous>~error",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22845,
                22885
            ],
            "filename": "client.js",
            "lineno": 479,
            "columnno": 4,
            "path": "/lib",
            "code": {
                "id": "astnode100000631",
                "name": "error",
                "type": "NewExpression",
                "funcscope": "<anonymous>",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "error",
        "longname": "<anonymous>~error",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                22895,
                22929
            ],
            "filename": "client.js",
            "lineno": 481,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000641",
                "name": "error.status",
                "type": "MemberExpression",
                "funcscope": "<anonymous>",
                "value": "response.statusCode",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "status",
        "longname": "<anonymous>~error.status",
        "kind": "member",
        "memberof": "<anonymous>~error",
        "scope": "static"
    },
    {
        "comment": "/**\n\t * Default the client options.\n\t * @private\n\t * @param {Object} [options] - The user options to be defaulted.\n\t * @returns {Object} The defaulted options.\n\t */",
        "meta": {
            "range": [
                23159,
                23418
            ],
            "filename": "client.js",
            "lineno": 493,
            "columnno": 1,
            "path": "/lib",
            "code": {
                "id": "astnode100000656",
                "name": "RepoDataClient.defaultOptions",
                "type": "MethodDefinition",
                "paramnames": [
                    "options"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Default the client options.",
        "access": "private",
        "params": [
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "optional": true,
                "description": "The user options to be defaulted.",
                "name": "options"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "description": "The defaulted options."
            }
        ],
        "name": "defaultOptions",
        "longname": "RepoDataClient.defaultOptions",
        "kind": "function",
        "memberof": "RepoDataClient",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                23228,
                23265
            ],
            "filename": "client.js",
            "lineno": 495,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000667",
                "name": "apiUrl",
                "type": "MemberExpression",
                "value": "process.env.REPO_DATA_API_URL"
            }
        },
        "undocumented": true,
        "name": "apiUrl",
        "longname": "apiUrl",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                23270,
                23307
            ],
            "filename": "client.js",
            "lineno": 496,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000673",
                "name": "apiKey",
                "type": "MemberExpression",
                "value": "process.env.REPO_DATA_API_KEY"
            }
        },
        "undocumented": true,
        "name": "apiKey",
        "longname": "apiKey",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                23312,
                23355
            ],
            "filename": "client.js",
            "lineno": 497,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000679",
                "name": "apiSecret",
                "type": "MemberExpression",
                "value": "process.env.REPO_DATA_API_SECRET"
            }
        },
        "undocumented": true,
        "name": "apiSecret",
        "longname": "apiSecret",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                23367,
                23409
            ],
            "filename": "client.js",
            "lineno": 499,
            "columnno": 3,
            "path": "/lib",
            "code": {
                "id": "astnode100000686",
                "name": "apiUrl",
                "type": "Literal",
                "value": "https://origami-repo-data.ft.com"
            }
        },
        "undocumented": true,
        "name": "apiUrl",
        "longname": "apiUrl",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                23424,
                23455
            ],
            "filename": "client.js",
            "lineno": 505,
            "columnno": 0,
            "path": "/lib",
            "code": {
                "id": "astnode100000690",
                "name": "module.exports",
                "type": "Identifier",
                "value": "RepoDataClient",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "exports",
        "longname": "module.exports",
        "kind": "member",
        "memberof": "module",
        "scope": "static"
    },
    {
        "kind": "package",
        "longname": "package:undefined",
        "files": [
            "/lib/client.js"
        ]
    }
]
