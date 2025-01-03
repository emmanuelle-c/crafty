require("dotenv").config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const mysql = require("mysql2/promise");

if (!DB_HOST || !DB_USER || !DB_NAME) {
  throw new Error("Les variables d'environnement DB_HOST, DB_USER et DB_NAME sont obligatoires.");
}

const dbConfig = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
};

const database = mysql.createPool(dbConfig);

database.checkConnection = async () => {
  try {
    const connection = await database.getConnection();
    console.log("Connexion réussie à la base de données !");
    connection.release();
  } catch (error) {
    console.error("Erreur lors de la connexion à la base de données :", error.message);
    throw error;
  }
};

// Store database name into client for further uses
database.databaseName = DB_NAME;

module.exports = database;