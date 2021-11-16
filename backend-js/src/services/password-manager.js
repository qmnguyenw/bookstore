const { scrypt, randomBytes } = require('crypto');
const { promisify } = require('util');

// we don't like callbacks, so we use promises instead
const scryptAsync = promisify(scrypt);

