const AbstractModel = require("./AbstractModel");

class UtilisateurModel extends AbstractModel {
  constructor() {
    super({ table: "utilisateur" });
  }

  async create(data) {
    const { pseudo, adresse, telephone, id_identifiant } = data;
    const [row] = await this.database.query(
      `INSERT INTO ${this.table} (pseudo, adresse, telephone, id_identifiant) VALUES (?, ?, ?, ?)`,
      [pseudo, adresse, telephone, id_identifiant]
    );
    return row;
  }

  async updateRoleToVendeur(id) {
    const [row] = await this.database.query(
      `UPDATE ${this.table} SET role = 'vendeur' WHERE id_utilisateur = ?`,
      [id]
    );
    return row;
  }

  async updateRoleToClient(id) {
    const [row] = await this.database.query(
      `UPDATE ${this.table} SET role = 'client' WHERE id_utilisateur = ?`,
      [id]
    );
    return row;
  }
}

module.exports = UtilisateurModel;
