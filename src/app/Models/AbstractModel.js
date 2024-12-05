const database = require("./db.config");

class AbstractModel{
    constructor({ table }) {
        if (this.constructor === AbstractModel) {
          throw new TypeError(
            "Abstract class 'AbstractModel' cannot be instantiated directly"
          );
        }
        this.table = table;
        this.database = database;
      }

      async readAll() {
        const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
        return rows;
        }

      async readOne(id) {
        const [[row]] = await this.database.query(
          `SELECT * FROM ${this.table} WHERE id = ?`,
          [id]
        );
        return row;
      }

      async edit(body, id) {
        const [row] = await this.database.query(
          `UPDATE ${this.table} SET ? WHERE id = ? `,
          [body, id]
        );
        return row;
      }

      async deleteOne(id) {
        const [[row]] = await this.database.query(
            `DELETE FROM ${this.table} WHERE id = ?`, [id]
        );
        return row;
      }
};

module.exports = AbstractModel;