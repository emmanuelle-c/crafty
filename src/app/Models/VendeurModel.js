const AbstractModel = require("./AbstractModel");

class VendeurModel extends AbstractModel{
    constructor() {
        super({ table: "vendeur" })
    }

    async create(id, data) {
        const {nif, nom, prenom} = data;
        const [row] = await this.database.query(`INSERT INTO ${this.table} (id_vendeur, nif, nom, prenom) VALUES (?, ?, ?, ?)`, [id, nif, nom, prenom]);
        return row;
    }

    async findByNif(nif) {
        const [[user]] = await this.database.query(`SELECT * FROM ${this.table} WHERE nif = ?`,[nif]);
        return row;
    }
}

module.exports = VendeurModel;