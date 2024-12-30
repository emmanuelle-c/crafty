const AbstractController = require("./AbstractController");
const ReservationModel = require("../Models/ReservationModel");

const reservationModel = new ReservationModel();
class ReservationController extends AbstractController{
    constructor() {
        super(reservationModel);
    }
};

module.exports = ReservationController;