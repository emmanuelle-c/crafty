const express = require("express");
const AuthService = require("../services/AuthService");

const router = express.Router();

// Route pour la connexion
router.post("/login", AuthService.login);

// Route pour rafraîchir le token
router.post("/refresh", AuthService.refresh);

module.exports = router;
