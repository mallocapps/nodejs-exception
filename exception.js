const slug = require('slug');
module.exports = class Exception extends Error {
    constructor(message, isTest, key, context = {},  code = 500) {
        super(message);
        this.key = key || slug(message.toLowerCase());
        this.code = code || 500;
        this.context = context || {};
        this.isTest = isTest;
    }
};