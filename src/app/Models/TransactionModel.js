const AbstractModel = require("./AbstractModel");

class TransactionModel extends AbstractModel {
  constructor() {
    super({ table: "transaction" });
  }

  async create(data) {
    const { date_transaction, statut, prix_total, id_reservation } = data;
    const [row] = await this.database.query(
      `INSERT INTO ${this.table} (date_transation, statut, prix_total, id_reservation) VALUES (?, ?, ?, ?)`,
      [date_transaction, statut, prix_total, id_reservation]
    );
    return row;
  }
}

module.exports = TransactionModel;
