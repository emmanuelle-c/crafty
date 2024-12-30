const AbstractController = require("./AbstractController");
const TransactionModel = require("../Models/TransactionModel");

const transactionModel = new TransactionModel();

class TransactionController extends AbstractController{
    constructor() {
        super(transactionModel);
    }
};

module.exports = TransactionController;