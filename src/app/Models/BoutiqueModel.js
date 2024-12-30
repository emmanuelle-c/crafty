const AbstractModel = require("./AbstractModel");

class BoutiqueModel extends AbstractModel {
  constructor() {
    super({ table: "boutique" });
  }

  async create(data) {
    const { nom, description, photo, date_creation, id_vendeur } = data;
    const [row] = await this.database.query(
      `INSERT INTO ${this.table} (nom, description, photo, date_creation, id_vendeur) VALUES (?, ?, ?, ?, ?)`,
      [nom, description, photo, date_creation, id_vendeur]
    );
    return row;
  }
}

module.exports = BoutiqueModel;
