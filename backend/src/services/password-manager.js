const { scrypt, randomBytes } = require('crypto');
const { promisify } = require('util');

// we don't like callbacks, so we use promises instead
const scryptAsync = promisify(scrypt);

export class PasswordManager {
  static async toHash(password) {
    const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(password, salt, 64));

    return `${buf.toString('hex')}.${salt}`;
  }

  static async compare(storedPassword, suppliedPassword) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const buf = (await scryptAsync(suppliedPassword, salt, 64));

    return buf.toString('hex') === hashedPassword;
  }
}