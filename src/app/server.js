require("dotenv").config();

const next = require('next');
const express = require("express");
const server = express();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.APP_PORT;

app.prepare().then(() => {
  const server = express();
  const router = express.Router();

  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  server.use('/api', router);
  server.get("/api", (req,res) => res.send("it's all good"))

  // Toutes les autres routes sont gérées par Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log('Serveur prêt sur http://localhost:3000');
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
});

module.exports = app;