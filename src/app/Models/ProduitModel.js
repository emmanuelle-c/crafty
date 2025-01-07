const AbstractModel = require("./AbstractModel");

class ProduitModel extends AbstractModel {
  constructor() {
    super({ table: "produit" });
  }

  async create(data) {
    const { nom, description, id_boutique, prix } = data;
    const [row] = await this.database.query(
      `INSERT INTO ${this.table} (nom, description, id_boutique, prix) VALUES (?, ?, ?, ?)`,
      [nom, description, id_boutique, prix]
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
