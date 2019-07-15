'use strict';

class NoCodeInputError extends Error {
    constructor(...params) {
        super(...params);

        this.name = 'NoCodeInputError';

        // Maintains proper stack trace for where our error was thrown.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NoCodeInputError);
        }
    }
}

class Codedoc {
    constructor(language) {
        this.language = language;
    }
}

module.exports = {
    Codedoc,
    NoCodeInputError
};
