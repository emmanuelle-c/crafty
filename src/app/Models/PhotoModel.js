const AbstractModel = require("./AbstractModel");

class PhotoModel extends AbstractModel {
  constructor() {
    super({ table: "photo" });
  }

  async create(data) {
    const { url, id_produit } = data;
    const [row] = await this.database.query(
      `INSERT INTO ${this.table} (url, id_produit) VALUES (?, ?)`,
      [url, id_produit]
    );
    return row;
  }

  async getAllPhotos() {
    const [rows] = await this.database.query(`SELECT url FROM ${this.table}`);
    return rows;
  }
}

module.exports = PhotoModel;
