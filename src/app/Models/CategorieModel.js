const AbstractModel = require("./AbstractModel");

class CategorieModel extends AbstractModel{
    constructor() {
        super({ table : "categorie"});
    }

    async create(data) {
        const { name } = data;
        const [row] = await this.database.query(
            `INSERT INTO ${this.table} (name) VALUES (?)`, [name]
        );
        return row;
      }
};

module.exports = CategorieModel;