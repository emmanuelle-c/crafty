const AbstractModel = require("./AbstractModel");

class CategorieModel extends AbstractModel{
    constructor() {
        super({ table : "categorie"});
    }

    async addCategory(category) {
        const { name } = category;
        const [row] = await this.database.query(
            `INSERT INTO ${this.table} (name) VALUES ?`, [name]
        );
        return row;
      }
};

module.exports = CategorieModel;