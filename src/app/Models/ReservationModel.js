const AbstractModel = require("./AbstractModel");

class ReservationModel extends AbstractModel {
  constructor() {
    super({ table: "reservation" });
  }

  async create(data) {
    const { id_produit, id_utilisateur } = data;
    const [row] = await this.database.query(
      `INSERT INTO ${this.table} (id_produit, id_utilisateur) VALUES (?, ?)`,
      [id_produit, id_utilisateur]
    );
    return row;
  }
}

module.exports = ReservationModel;
