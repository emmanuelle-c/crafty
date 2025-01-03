const express = require("express");
const TransactionController = require("../Controllers/TransactionController");

const router = express.Router();
const transactionController = new TransactionController();

router.get("/", transactionController.readAll.bind(transactionController));
router.get("/:id", transactionController.readOne.bind(transactionController));
router.post("/", transactionController.create.bind(transactionController));
router.put("/:id", transactionController.update.bind(transactionController));
router.delete("/:id", transactionController.delete.bind(transactionController));

module.exports = router;