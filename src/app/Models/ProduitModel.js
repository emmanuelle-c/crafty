const AbstractModel = require("./AbstractModel");

class ProduitModel extends AbstractModel {
  constructor() {
    super({ table: "produit" });
  }

  async create(data) {
    const { nom, description, id_boutique } = data;
    const [row] = await this.database.query(
      `INSERT INTO ${this.table} (nom, description, id_boutique) VALUES (?, ?, ?)`,
      [nom, description, id_boutique]
    );
    return row;
  }

  async addCategoryToProduct(id, id_categorie) {
    const [row] = await this.database.query(
      `INSERT INTO produit_categorie (id_produit, id_categorie) VALUES (?, ?)`,
      [id, id_categorie]
    );
    return row;
  }
}

module.exports = ProduitModel;
