require("dotenv").config();

const next = require("next");
const express = require("express");
const cookieParser = require("cookie-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.APP_PORT;

app.prepare().then(() => {
  const server = express();
  const categorieRouter = require("./routes/CategorieRoutes");
  const identifiantRouter = require("./routes/IdentifiantRoutes");
  const utilisateurRouter = require("./routes/UtilisateurRoutes");
  const vendeurRouter = require("./routes/VendeurRoutes");
  const boutiqueRouter = require("./routes/BoutiqueRoutes");
  const produitRouter = require("./routes/ProduitRoutes");
  const reservationRouter = require("./routes/ReservationRoutes");
  const transactionRouter = require("./routes/TransactionRoutes");
  const photoRouter = require("./routes/PhotoRoutes");
  const authRouter = require("./routes/AuthRoutes");
  const restrictByIP = require("./services/restrictedIP");

  server.use(express.json());
  server.use(cookieParser());
  server.use(express.urlencoded({ extended: true }));
  
  server.use("/api", restrictByIP);
  server.use("/api/categorie", categorieRouter);
  server.use("/api/identifiant", identifiantRouter);
  server.use("/api/utilisateur", utilisateurRouter);
  server.use("/api/vendeur", vendeurRouter);
  server.use("/api/boutique", boutiqueRouter);
  server.use("/api/produit", produitRouter);
  server.use("/api/reservation", reservationRouter);
  server.use("/api/transaction", transactionRouter);
  server.use("/api/photo", photoRouter);
  server.use("/api/auth", authRouter);

  // Toutes les autres routes sont gérées par Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server
    .listen(port, () => {
      console.log(
        `Serveur prêt sur http://${process.env.DB_HOST}:${process.env.APP_PORT}`
      );
    })
    .on("error", (err) => {
      console.error("Error:", err.message);
    });
});

module.exports = app;
