/* eslint-disable */
module.exports = [
    {
        "comment": "/**\n * A global variable called 'foo'.\n * http://usejsdoc.org/tags-member.html\n * @type {number}\n */",
        "meta": {
            "range": [
                107,
                115
            ],
            "filename": "main.js",
            "lineno": 6,
            "columnno": 6,
            "path": "",
            "code": {
                "id": "astnode100000003",
                "name": "foo",
                "type": "Literal",
                "value": 42
            }
        },
        "description": "A global variable called 'foo'.\nhttp://usejsdoc.org/tags-member.html",
        "type": {
            "names": [
                "number"
            ]
        },
        "name": "foo",
        "longname": "foo",
        "kind": "constant",
        "scope": "global",
        "params": []
    },
    {
        "comment": "/**\n * A global function with param, to say hello to somebody. Anything could say hello!\n * Even an alian could say hello! If a person is saying hello consider using {@link Person#sayHello} instead.\n * This peculiar example is inspired by [a jsdoc example]{@link http://usejsdoc.org/tags-function.html}.\n * This comment is also a great test of the jsdoc {@link http://usejsdoc.org/tags-function.html link tag}\n * @param {string} somebody\n */",
        "meta": {
            "range": [
                560,
                626
            ],
            "filename": "main.js",
            "lineno": 15,
            "columnno": 0,
            "path": "",
            "code": {
                "id": "astnode100000006",
                "name": "sayHello",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "somebody"
                ]
            }
        },
        "description": "A global function with param, to say hello to somebody. Anything could say hello!\nEven an alian could say hello! If a person is saying hello consider using {@link Person#sayHello} instead.\nThis peculiar example is inspired by [a jsdoc example]{@link http://usejsdoc.org/tags-function.html}.\nThis comment is also a great test of the jsdoc {@link http://usejsdoc.org/tags-function.html link tag}",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "name": "somebody"
            }
        ],
        "name": "sayHello",
        "longname": "sayHello",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "/**\n * An explicit private member.\n * http://usejsdoc.org/tags-private.html\n * @type {string}\n * @private\n */",
        "meta": {
            "range": [
                116,
                138
            ],
            "filename": "access.js",
            "lineno": 7,
            "columnno": 6,
            "path": "/src/js",
            "code": {
                "id": "astnode100000030",
                "name": "privateMember",
                "type": "Literal",
                "value": "shhh"
            }
        },
        "description": "An explicit private member.\nhttp://usejsdoc.org/tags-private.html",
        "type": {
            "names": [
                "string"
            ]
        },
        "access": "private",
        "name": "privateMember",
        "longname": "privateMember",
        "kind": "constant",
        "scope": "global",
        "params": []
    },
    {
        "comment": "/**\n * A explicit private function.\n * http://usejsdoc.org/tags-private.html\n * @private\n */",
        "meta": {
            "range": [
                234,
                285
            ],
            "filename": "access.js",
            "lineno": 14,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000033",
                "name": "whisper",
                "type": "FunctionDeclaration",
                "paramnames": []
            }
        },
        "description": "A explicit private function.\nhttp://usejsdoc.org/tags-private.html",
        "access": "private",
        "name": "whisper",
        "longname": "whisper",
        "kind": "function",
        "scope": "global",
        "params": []
    },
    {
        "comment": "/**\n * An Origami implicitly private function (with underscore).\n * http://usejsdoc.org/tags-private.html\n */",
        "meta": {
            "range": [
                397,
                454
            ],
            "filename": "access.js",
            "lineno": 22,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000042",
                "name": "_utterQuietly",
                "type": "FunctionDeclaration",
                "paramnames": []
            }
        },
        "description": "An Origami implicitly private function (with underscore).\nhttp://usejsdoc.org/tags-private.html",
        "name": "_utterQuietly",
        "longname": "_utterQuietly",
        "kind": "function",
        "scope": "global",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                456,
                517
            ],
            "filename": "access.js",
            "lineno": 26,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000052",
                "name": "module.exports",
                "type": "ObjectExpression",
                "value": "{\"privateMember\":\"\",\"whisper\":\"\",\"_utterQuietly\":\"\"}",
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
        "comment": "",
        "meta": {
            "range": [
                476,
                489
            ],
            "filename": "access.js",
            "lineno": 27,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000057",
                "name": "privateMember",
                "type": "Identifier",
                "value": "privateMember"
            }
        },
        "undocumented": true,
        "name": "privateMember",
        "longname": "module.exports.privateMember",
        "kind": "member",
        "memberof": "module.exports",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                492,
                499
            ],
            "filename": "access.js",
            "lineno": 28,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000059",
                "name": "whisper",
                "type": "Identifier",
                "value": "whisper"
            }
        },
        "undocumented": true,
        "name": "whisper",
        "longname": "module.exports.whisper",
        "kind": "member",
        "memberof": "module.exports",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                502,
                515
            ],
            "filename": "access.js",
            "lineno": 29,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000061",
                "name": "_utterQuietly",
                "type": "Identifier",
                "value": "_utterQuietly"
            }
        },
        "undocumented": true,
        "name": "_utterQuietly",
        "longname": "module.exports._utterQuietly",
        "kind": "member",
        "memberof": "module.exports",
        "scope": "static"
    },
    {
        "comment": "/**\n * Creates a new Person.\n * http://usejsdoc.org/tags-class.html\n * @constructor\n * @param {string} name\n */",
        "meta": {
            "range": [
                112,
                181
            ],
            "filename": "class.js",
            "lineno": 7,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000065",
                "name": "Person",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "name"
                ]
            },
            "vars": {
                "this.name": "Person#name"
            }
        },
        "description": "Creates a new Person.\nhttp://usejsdoc.org/tags-class.html",
        "kind": "class",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "name": "name"
            }
        ],
        "name": "Person",
        "longname": "Person",
        "scope": "global"
    },
    {
        "comment": "/** @member {string} */",
        "meta": {
            "range": [
                162,
                178
            ],
            "filename": "class.js",
            "lineno": 9,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000070",
                "name": "this.name",
                "type": "Identifier",
                "value": "name",
                "paramnames": []
            }
        },
        "kind": "member",
        "type": {
            "names": [
                "string"
            ]
        },
        "name": "name",
        "longname": "Person#name",
        "memberof": "Person",
        "scope": "instance"
    },
    {
        "comment": "/**\n * A function for a person to say hello.\n */",
        "meta": {
            "range": [
                232,
                314
            ],
            "filename": "class.js",
            "lineno": 15,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000076",
                "name": "Person.prototype.sayHello",
                "type": "ArrowFunctionExpression",
                "paramnames": []
            }
        },
        "description": "A function for a person to say hello.",
        "name": "sayHello",
        "longname": "Person#sayHello",
        "kind": "function",
        "memberof": "Person",
        "scope": "instance"
    },
    {
        "comment": "/**\n * Class representing a domesticated animal.\n */",
        "meta": {
            "range": [
                370,
                509
            ],
            "filename": "class.js",
            "lineno": 22,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000095",
                "name": "Pet",
                "type": "ClassDeclaration",
                "paramnames": []
            }
        },
        "classdesc": "Class representing a domesticated animal.",
        "name": "Pet",
        "longname": "Pet",
        "kind": "class",
        "scope": "global",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                383,
                426
            ],
            "filename": "class.js",
            "lineno": 23,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000098",
                "name": "Pet",
                "type": "MethodDefinition",
                "paramnames": []
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Pet",
        "longname": "Pet",
        "kind": "class",
        "scope": "global",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                401,
                422
            ],
            "filename": "class.js",
            "lineno": 24,
            "columnno": 2,
            "path": "/src/js",
            "code": {
                "id": "astnode100000103",
                "name": "this.hasEaten",
                "type": "Literal",
                "value": false,
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "hasEaten",
        "longname": "Pet#hasEaten",
        "kind": "member",
        "memberof": "Pet",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                428,
                507
            ],
            "filename": "class.js",
            "lineno": 26,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000108",
                "name": "Pet#eat",
                "type": "MethodDefinition",
                "paramnames": [
                    "food"
                ]
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "eat",
        "longname": "Pet#eat",
        "kind": "function",
        "memberof": "Pet",
        "scope": "instance",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                442,
                462
            ],
            "filename": "class.js",
            "lineno": 27,
            "columnno": 2,
            "path": "/src/js",
            "code": {
                "id": "astnode100000114",
                "name": "this.hasEaten",
                "type": "Literal",
                "value": true,
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "hasEaten",
        "longname": "Pet#hasEaten",
        "kind": "member",
        "memberof": "Pet",
        "scope": "instance"
    },
    {
        "comment": "/**\n * Creates a new Cat.\n * Uses JSDoc class tag with doc comments on class and constructor.\n * http://usejsdoc.org/tags-class.html\n * @class\n * @extends Pet\n */",
        "meta": {
            "range": [
                674,
                875
            ],
            "filename": "class.js",
            "lineno": 39,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000128",
                "name": "Cat",
                "type": "ClassDeclaration",
                "paramnames": [
                    "name"
                ]
            }
        },
        "classdesc": "Creates a new Cat.\nUses JSDoc class tag with doc comments on class and constructor.\nhttp://usejsdoc.org/tags-class.html",
        "kind": "class",
        "augments": [
            "Pet"
        ],
        "name": "Cat",
        "longname": "Cat",
        "scope": "global",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "name": "name"
            }
        ]
    },
    {
        "comment": "/**\n\t * @param {string} name\n\t */",
        "meta": {
            "range": [
                734,
                787
            ],
            "filename": "class.js",
            "lineno": 43,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000132",
                "name": "Cat",
                "type": "MethodDefinition",
                "paramnames": [
                    "name"
                ]
            },
            "vars": {
                "": null
            }
        },
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "name": "name"
            }
        ],
        "name": "Cat",
        "longname": "Cat",
        "kind": "class",
        "scope": "global",
        "undocumented": true
    },
    {
        "comment": "",
        "meta": {
            "range": [
                767,
                783
            ],
            "filename": "class.js",
            "lineno": 45,
            "columnno": 2,
            "path": "/src/js",
            "code": {
                "id": "astnode100000141",
                "name": "this.name",
                "type": "Identifier",
                "value": "name",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "name",
        "longname": "Cat#name",
        "kind": "member",
        "memberof": "Cat",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Log a sound of a cat.\n\t */",
        "meta": {
            "range": [
                826,
                873
            ],
            "filename": "class.js",
            "lineno": 51,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000146",
                "name": "Cat.makeSound",
                "type": "MethodDefinition",
                "paramnames": []
            },
            "vars": {
                "": null
            }
        },
        "description": "Log a sound of a cat.",
        "name": "makeSound",
        "longname": "Cat.makeSound",
        "kind": "function",
        "memberof": "Cat",
        "scope": "static",
        "params": []
    },
    {
        "comment": "/**\n * @extends Pet\n */",
        "meta": {
            "range": [
                901,
                1224
            ],
            "filename": "class.js",
            "lineno": 59,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000156",
                "name": "Dog",
                "type": "ClassDeclaration",
                "paramnames": [
                    "name"
                ]
            }
        },
        "augments": [
            "Pet"
        ],
        "name": "Dog",
        "longname": "Dog",
        "kind": "class",
        "scope": "global",
        "description": "Creates a new Dog.\nMissing class tag and doc comment on constructor only.\nhttp://usejsdoc.org/tags-class.html",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "name": "name"
            }
        ]
    },
    {
        "comment": "/**\n\t * Creates a new Dog.\n\t * Missing class tag and doc comment on constructor only.\n\t * http://usejsdoc.org/tags-class.html\n\t * @param {string} name\n\t */",
        "meta": {
            "range": [
                1083,
                1136
            ],
            "filename": "class.js",
            "lineno": 66,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000160",
                "name": "Dog",
                "type": "MethodDefinition",
                "paramnames": [
                    "name"
                ]
            },
            "vars": {
                "": null
            }
        },
        "description": "Creates a new Dog.\nMissing class tag and doc comment on constructor only.\nhttp://usejsdoc.org/tags-class.html",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "name": "name"
            }
        ],
        "name": "Dog",
        "longname": "Dog",
        "kind": "class",
        "scope": "global",
        "undocumented": true
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1116,
                1132
            ],
            "filename": "class.js",
            "lineno": 68,
            "columnno": 2,
            "path": "/src/js",
            "code": {
                "id": "astnode100000169",
                "name": "this.name",
                "type": "Identifier",
                "value": "name",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "name",
        "longname": "Dog#name",
        "kind": "member",
        "memberof": "Dog",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Log a sound of a dog.\n\t */",
        "meta": {
            "range": [
                1175,
                1222
            ],
            "filename": "class.js",
            "lineno": 74,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000174",
                "name": "Dog.makeSound",
                "type": "MethodDefinition",
                "paramnames": []
            },
            "vars": {
                "": null
            }
        },
        "description": "Log a sound of a dog.",
        "name": "makeSound",
        "longname": "Dog.makeSound",
        "kind": "function",
        "memberof": "Dog",
        "scope": "static",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1226,
                1266
            ],
            "filename": "class.js",
            "lineno": 79,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000185",
                "name": "module.exports",
                "type": "ObjectExpression",
                "value": "{\"Person\":\"\",\"Cat\":\"\",\"Dog\":\"\"}",
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
        "comment": "",
        "meta": {
            "range": [
                1246,
                1252
            ],
            "filename": "class.js",
            "lineno": 80,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000190",
                "name": "Person",
                "type": "Identifier",
                "value": "Person"
            }
        },
        "undocumented": true,
        "name": "Person",
        "longname": "module.exports.Person",
        "kind": "member",
        "memberof": "module.exports",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1255,
                1258
            ],
            "filename": "class.js",
            "lineno": 81,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000192",
                "name": "Cat",
                "type": "Identifier",
                "value": "Cat"
            }
        },
        "undocumented": true,
        "name": "Cat",
        "longname": "module.exports.Cat",
        "kind": "member",
        "memberof": "module.exports",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1261,
                1264
            ],
            "filename": "class.js",
            "lineno": 82,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000194",
                "name": "Dog",
                "type": "Identifier",
                "value": "Dog"
            }
        },
        "undocumented": true,
        "name": "Dog",
        "longname": "module.exports.Dog",
        "kind": "member",
        "memberof": "module.exports",
        "scope": "static"
    },
    {
        "comment": "/** @module ComplexModule */",
        "meta": {
            "filename": "complex-module.js",
            "lineno": 1,
            "columnno": 0,
            "path": "/src/js",
            "code": {}
        },
        "kind": "module",
        "name": "ComplexModule",
        "longname": "module:ComplexModule"
    },
    {
        "comment": "/**\n * Test the JsDoc example tag.\n * http://usejsdoc.org/tags-example.html\n * Solves equations of the form a * x = b\n * @example\n * // returns 3\n * solveAsExample(5, 15);\n * @example <caption>Captioned example usage of solveAsExample.</caption>\n * // returns 2\n * solveAsExample(5, 10);\n * @returns {Number} Returns the value of x for the equation.\n */",
        "meta": {
            "range": [
                384,
                464
            ],
            "filename": "complex-module.js",
            "lineno": 15,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000199",
                "name": "module.exports.solveAsExample",
                "type": "FunctionExpression",
                "value": "solveAsExample",
                "paramnames": [
                    "a",
                    "b"
                ]
            }
        },
        "description": "Test the JsDoc example tag.\nhttp://usejsdoc.org/tags-example.html\nSolves equations of the form a * x = b",
        "examples": [
            "// returns 3\nsolveAsExample(5, 15);",
            "<caption>Captioned example usage of solveAsExample.</caption>\n// returns 2\nsolveAsExample(5, 10);"
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Number"
                    ]
                },
                "description": "Returns the value of x for the equation."
            }
        ],
        "name": "solveAsExample",
        "longname": "module:ComplexModule.solveAsExample",
        "kind": "function",
        "memberof": "module:ComplexModule",
        "scope": "static"
    },
    {
        "comment": "/**\n * An example constructor within a module.\n * @constructor\n * @example\n * const myIncrementer = new incrementer();\n * myIncrementer.increment(4); // 4\n * myIncrementer.increment(4); // 8\n * myIncrementer.increment(1); // 9\n */",
        "meta": {
            "range": [
                698,
                996
            ],
            "filename": "complex-module.js",
            "lineno": 28,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000215",
                "name": "module.exports.incrementer",
                "type": "FunctionExpression",
                "value": "incrementer",
                "paramnames": []
            },
            "vars": {
                "this.num": "module:ComplexModule.incrementer#num",
                "this.increment": "module:ComplexModule.incrementer#increment",
                "": null
            }
        },
        "description": "An example constructor within a module.",
        "kind": "class",
        "examples": [
            "const myIncrementer = new incrementer();\nmyIncrementer.increment(4); // 4\nmyIncrementer.increment(4); // 8\nmyIncrementer.increment(1); // 9"
        ],
        "name": "incrementer",
        "longname": "module:ComplexModule.incrementer",
        "memberof": "module:ComplexModule",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                753,
                765
            ],
            "filename": "complex-module.js",
            "lineno": 29,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000225",
                "name": "this.num",
                "type": "Literal",
                "value": 0,
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "num",
        "longname": "module:ComplexModule.incrementer#num",
        "kind": "member",
        "memberof": "module:ComplexModule.incrementer",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * An example constructor within a module.\n\t * @param {Number} num - The number to increment by.\n\t * @returns {Number} - The updated value.\n\t */",
        "meta": {
            "range": [
                919,
                993
            ],
            "filename": "complex-module.js",
            "lineno": 35,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000231",
                "name": "this.increment",
                "type": "FunctionExpression",
                "paramnames": [
                    "num"
                ]
            },
            "vars": {
                "this.num": "module:ComplexModule.incrementer#num"
            }
        },
        "description": "An example constructor within a module.",
        "params": [
            {
                "type": {
                    "names": [
                        "Number"
                    ]
                },
                "description": "The number to increment by.",
                "name": "num"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Number"
                    ]
                },
                "description": "- The updated value."
            }
        ],
        "name": "increment",
        "longname": "module:ComplexModule.incrementer#increment",
        "kind": "function",
        "memberof": "module:ComplexModule.incrementer",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                955,
                970
            ],
            "filename": "complex-module.js",
            "lineno": 36,
            "columnno": 2,
            "path": "/src/js",
            "code": {
                "id": "astnode100000239",
                "name": "this.num",
                "type": "Identifier",
                "value": "num",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "num",
        "longname": "module:ComplexModule.incrementer#num",
        "kind": "member",
        "memberof": "module:ComplexModule.incrementer",
        "scope": "instance"
    },
    {
        "comment": "/**\n * @deprecated Use {@link Person#sayHello} instead.\n * @param {string} name\n * To make a human says hello, announcing their name.\n */",
        "meta": {
            "range": [
                138,
                210
            ],
            "filename": "deprecated.js",
            "lineno": 6,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000250",
                "name": "humanSayHello",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "name"
                ]
            }
        },
        "deprecated": "Use {@link Person#sayHello} instead.",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "To make a human says hello, announcing their name.",
                "name": "name"
            }
        ],
        "name": "humanSayHello",
        "longname": "humanSayHello",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                212,
                242
            ],
            "filename": "deprecated.js",
            "lineno": 10,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000264",
                "name": "module.exports",
                "type": "Identifier",
                "value": "humanSayHello",
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
        "comment": "/**\n * Throws things to test JSDoc events.\n * http://usejsdoc.org/tags-event.html\n */",
        "meta": {
            "range": [
                86,
                106
            ],
            "filename": "event.js",
            "lineno": 5,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000271",
                "name": "Hurl",
                "type": "FunctionDeclaration",
                "paramnames": []
            }
        },
        "description": "Throws things to test JSDoc events.\nhttp://usejsdoc.org/tags-event.html",
        "name": "Hurl",
        "longname": "Hurl",
        "kind": "function",
        "scope": "global",
        "params": []
    },
    {
        "comment": "/**\n * Throw a snowball.\n *\n * @fires Hurl#snowball\n */",
        "meta": {
            "range": [
                164,
                484
            ],
            "filename": "event.js",
            "lineno": 14,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000275",
                "name": "Hurl.prototype.snowball",
                "type": "FunctionExpression",
                "paramnames": []
            }
        },
        "description": "Throw a snowball.",
        "fires": [
            "Hurl#event:snowball"
        ],
        "name": "snowball",
        "longname": "Hurl#snowball",
        "kind": "function",
        "memberof": "Hurl",
        "scope": "instance"
    },
    {
        "comment": "/**\n\t * Snowball event.\n\t *\n\t * @event Hurl#snowball\n\t * @type {object}\n\t * @property {boolean} detail.isPacked - Indicates whether the snowball is tightly packed.\n\t */",
        "meta": {
            "filename": "event.js",
            "lineno": 15,
            "columnno": 1,
            "path": "/src/js",
            "code": {}
        },
        "description": "Snowball event.",
        "kind": "event",
        "name": "snowball",
        "type": {
            "names": [
                "object"
            ]
        },
        "properties": [
            {
                "type": {
                    "names": [
                        "boolean"
                    ]
                },
                "description": "Indicates whether the snowball is tightly packed.",
                "name": "detail.isPacked"
            }
        ],
        "memberof": "Hurl",
        "longname": "Hurl#event:snowball",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                426,
                476
            ],
            "filename": "event.js",
            "lineno": 23,
            "columnno": 2,
            "path": "/src/js",
            "code": {
                "id": "astnode100000292",
                "name": "detail",
                "type": "ObjectExpression",
                "value": "{\"isPacked\":\"\"}"
            }
        },
        "undocumented": true,
        "name": "detail",
        "longname": "detail",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                439,
                472
            ],
            "filename": "event.js",
            "lineno": 24,
            "columnno": 3,
            "path": "/src/js",
            "code": {
                "id": "astnode100000294",
                "name": "isPacked",
                "type": "MemberExpression",
                "value": "this._snowball.isPacked"
            }
        },
        "undocumented": true,
        "name": "isPacked",
        "longname": "detail.isPacked",
        "kind": "member",
        "memberof": "detail",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                488,
                509
            ],
            "filename": "event.js",
            "lineno": 30,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000301",
                "name": "module.exports",
                "type": "Identifier",
                "value": "Hurl",
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
        "comment": "/**\n *\n * Test the JSDoc mixin tag.\n * http://usejsdoc.org/tags-mixin.html\n *\n * This provides methods used for event handling. It's not meant to\n * be used directly.\n *\n * @mixin\n */",
        "meta": {
            "range": [
                190,
                782
            ],
            "filename": "mixin.js",
            "lineno": 11,
            "columnno": 6,
            "path": "/src/js",
            "code": {
                "id": "astnode100000309",
                "name": "Eventful",
                "type": "ObjectExpression",
                "value": "{\"on\":\"\",\"fire\":\"\"}"
            }
        },
        "description": "Test the JSDoc mixin tag.\nhttp://usejsdoc.org/tags-mixin.html\n\nThis provides methods used for event handling. It's not meant to\nbe used directly.",
        "kind": "mixin",
        "name": "Eventful",
        "longname": "Eventful",
        "scope": "global",
        "params": []
    },
    {
        "comment": "/**\n\t * Register a handler function to be called whenever this event is fired.\n\t * @param {string} eventName - Name of the event.\n\t * @param {function(Object)} handler - The handler to call.\n\t */",
        "meta": {
            "range": [
                438,
                489
            ],
            "filename": "mixin.js",
            "lineno": 18,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000312",
                "name": "on",
                "type": "FunctionExpression"
            }
        },
        "description": "Register a handler function to be called whenever this event is fired.",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "Name of the event.",
                "name": "eventName"
            },
            {
                "type": {
                    "names": [
                        "function"
                    ]
                },
                "description": "The handler to call.",
                "name": "handler"
            }
        ],
        "name": "on",
        "longname": "Eventful.on",
        "kind": "function",
        "memberof": "Eventful",
        "scope": "static"
    },
    {
        "comment": "/**\n\t * Fire an event, causing all handlers for that event name to run.\n\t * @param {string} eventName - Name of the event.\n\t * @param {Object} eventData - The data provided to each handler.\n\t */",
        "meta": {
            "range": [
                689,
                744
            ],
            "filename": "mixin.js",
            "lineno": 27,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000317",
                "name": "fire",
                "type": "FunctionExpression"
            }
        },
        "description": "Fire an event, causing all handlers for that event name to run.",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "Name of the event.",
                "name": "eventName"
            },
            {
                "type": {
                    "names": [
                        "Object"
                    ]
                },
                "description": "The data provided to each handler.",
                "name": "eventData"
            }
        ],
        "name": "fire",
        "longname": "Eventful.fire",
        "kind": "function",
        "memberof": "Eventful",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                785,
                810
            ],
            "filename": "mixin.js",
            "lineno": 33,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000323",
                "name": "module.exports",
                "type": "Identifier",
                "value": "Eventful",
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
        "comment": "",
        "meta": {
            "range": [
                0,
                346
            ],
            "filename": "name.js",
            "lineno": 1,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000331",
                "name": "module.exports",
                "type": "FunctionExpression",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "exports",
        "longname": "module.exports",
        "kind": "function",
        "memberof": "module",
        "scope": "static"
    },
    {
        "comment": "/**\n\t * Testing JsDoc name tag.\n\t * Casual use of eval :scream:\n\t * http://usejsdoc.org/tags-name.html\n\t *\n\t * @name highlightSearchTerm\n\t * @function\n\t * @global\n\t * @param {string} term - The search term to highlight.\n\t */",
        "meta": {
            "filename": "name.js",
            "lineno": 2,
            "columnno": 1,
            "path": "/src/js",
            "code": {}
        },
        "description": "Testing JsDoc name tag.\nCasual use of eval :scream:\nhttp://usejsdoc.org/tags-name.html",
        "name": "highlightSearchTerm",
        "kind": "function",
        "scope": "global",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "The search term to highlight.",
                "name": "term"
            }
        ],
        "longname": "highlightSearchTerm"
    },
    {
        "comment": "/** @namespace window */",
        "meta": {
            "filename": "namespace.js",
            "lineno": 1,
            "columnno": 0,
            "path": "/src/js",
            "code": {}
        },
        "kind": "namespace",
        "name": "window",
        "longname": "window",
        "scope": "global"
    },
    {
        "comment": "/**\n * Alertnate for the alert function.\n * Example of a namespace tag http://usejsdoc.org/tags-namespace.html\n * @param {string} msg - Message to show in an alert dialogue.\n */",
        "meta": {
            "range": [
                204,
                248
            ],
            "filename": "namespace.js",
            "lineno": 8,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000344",
                "name": "window[\"!\"]",
                "type": "FunctionExpression",
                "paramnames": [
                    "msg"
                ]
            }
        },
        "description": "Alertnate for the alert function.\nExample of a namespace tag http://usejsdoc.org/tags-namespace.html",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "Message to show in an alert dialogue.",
                "name": "msg"
            }
        ],
        "name": "\"!\"",
        "longname": "window.\"!\"",
        "kind": "function",
        "memberof": "window",
        "scope": "static"
    },
    {
        "comment": "/**\n * Returns the sum of a and b.\n * http://usejsdoc.org/tags-returns.html\n * @param {number} a\n * @param {number} b\n * @param {boolean} retArr If set to true, the function will return an array\n * @returns {(number|Array)} Sum of a and b or an array that contains a, b and the sum of a and b.\n */",
        "meta": {
            "range": [
                298,
                393
            ],
            "filename": "returns.js",
            "lineno": 9,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000357",
                "name": "myReturnSum",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "a",
                    "b",
                    "retArr"
                ]
            }
        },
        "description": "Returns the sum of a and b.\nhttp://usejsdoc.org/tags-returns.html",
        "params": [
            {
                "type": {
                    "names": [
                        "number"
                    ]
                },
                "name": "a"
            },
            {
                "type": {
                    "names": [
                        "number"
                    ]
                },
                "name": "b"
            },
            {
                "type": {
                    "names": [
                        "boolean"
                    ]
                },
                "description": "If set to true, the function will return an array",
                "name": "retArr"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "number",
                        "Array"
                    ]
                },
                "description": "Sum of a and b or an array that contains a, b and the sum of a and b."
            }
        ],
        "name": "myReturnSum",
        "longname": "myReturnSum",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                395,
                428
            ],
            "filename": "returns.js",
            "lineno": 16,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000378",
                "name": "module.exports",
                "type": "ObjectExpression",
                "value": "{\"myReturnSum\":\"\"}",
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
        "comment": "",
        "meta": {
            "range": [
                415,
                426
            ],
            "filename": "returns.js",
            "lineno": 17,
            "columnno": 1,
            "path": "/src/js",
            "code": {
                "id": "astnode100000383",
                "name": "myReturnSum",
                "type": "Identifier",
                "value": "myReturnSum"
            }
        },
        "undocumented": true,
        "name": "myReturnSum",
        "longname": "module.exports.myReturnSum",
        "kind": "member",
        "memberof": "module.exports",
        "scope": "static"
    },
    {
        "comment": "/**\n * Tests a single export module.\n * @module SimpleModule\n * @see module:example-module for an example of multi export module documentation.\n * @returns {String} Returns a fixed string.\n */",
        "meta": {
            "filename": "simple-module.js",
            "lineno": 1,
            "columnno": 0,
            "path": "/src/js",
            "code": {}
        },
        "description": "Tests a single export module.",
        "kind": "module",
        "name": "SimpleModule",
        "see": [
            "module:example-module for an example of multi export module documentation."
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "Returns a fixed string."
            }
        ],
        "longname": "module:SimpleModule"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                193,
                265
            ],
            "filename": "simple-module.js",
            "lineno": 7,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000388",
                "name": "module.exports",
                "type": "FunctionExpression",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "module:SimpleModule",
        "longname": "module:SimpleModule",
        "kind": "function"
    },
    {
        "comment": "/**\n * Test the JsDoc throws tag.\n * http://usejsdoc.org/tags-throws.html\n * @throws {Error} This was never going to work.\n */",
        "meta": {
            "range": [
                127,
                210
            ],
            "filename": "throws.js",
            "lineno": 6,
            "columnno": 0,
            "path": "/src/js",
            "code": {
                "id": "astnode100000399",
                "name": "module.exports",
                "type": "FunctionExpression",
                "paramnames": []
            }
        },
        "description": "Test the JsDoc throws tag.\nhttp://usejsdoc.org/tags-throws.html",
        "exceptions": [
            {
                "type": {
                    "names": [
                        "Error"
                    ]
                },
                "description": "This was never going to work."
            }
        ],
        "name": "exports",
        "longname": "module.exports",
        "kind": "function",
        "memberof": "module",
        "scope": "static"
    },
    {
        "kind": "package",
        "longname": "package:undefined",
        "files": [
            "/main.js",
            "/src/js/access.js",
            "/src/js/class.js",
            "/src/js/complex-module.js",
            "/src/js/deprecated.js",
            "/src/js/event.js",
            "/src/js/mixin.js",
            "/src/js/name.js",
            "/src/js/namespace.js",
            "/src/js/returns.js",
            "/src/js/simple-module.js",
            "/src/js/throws.js"
        ]
    }
];
