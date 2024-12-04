const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const mysql = require("mysql2/promise");

const client = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

client.checkConnection = () => {
  // Tentative de connexion à la DB
  client
    .getConnection()
    .then((connection) => {
      console.info(`Using database ${DB_NAME}`);

      connection.release();
    })
    .catch((error) => {
      console.warn(
        "Attention:",
        "La connexion à la DB a échoué.",
      );
      console.warn(error.message);
    });
};

// Store database name into client for further uses
client.databaseName = DB_NAME;

module.exports = client;