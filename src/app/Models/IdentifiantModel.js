const AbstractModel = require("./AbstractModel");

class IdentifiantModel extends AbstractModel{
    constructor() {
        super({ table : "identifiant"});
    }

    async create(data) {
        const { email, mot_de_passe } = data;
        const [row] = await this.database.query(
            `INSERT INTO ${this.table} (email, mot_de_passe) VALUES (?, ?)`, [email, mot_de_passe]
        );
        return row;
      }
};

module.exports = IdentifiantModel;