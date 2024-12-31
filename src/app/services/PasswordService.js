const argon2 = require("argon2");

class PasswordService {
  static async hash(password) {
    if (!password) {
      throw new Error("Password is required to hash");
    }
    return await argon2.hash(password);
  }
}

module.exports = PasswordService;
