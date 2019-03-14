const slug = require('slug');
module.exports = class Exception extends Error {
    constructor(message, context, key, code) {
        super(message);
        this.key = key || slug(message.toLowerCase());
        this.code = code || 500;
        this.context = context || {};
    }
};