const AbstractModel = require("./AbstractModel");

class IdentifiantModel extends AbstractModel {
  constructor() {
    super({ table: "identifiant" });
  }

  async create(data) {
    const { email, mot_de_passe } = data;
    const [row] = await this.database.query(
      `INSERT INTO ${this.table} (email, mot_de_passe) VALUES (?, ?)`,
      [email, mot_de_passe]
    );
    return row;
  }

  async findByEmail(email) {
    const [[user]] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return user;
  }
}

module.exports = IdentifiantModel;
