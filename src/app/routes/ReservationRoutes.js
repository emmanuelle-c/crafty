const express = require("express");
const router = express.Router();

const ReservationController = require("../Controllers/ReservationController");
const reservationController = new ReservationController();

router.get("/", reservationController.readAll.bind(reservationController));
router.get("/:id", reservationController.readOne.bind(reservationController));
router.post("/", reservationController.create.bind(reservationController));
router.put("/:id", reservationController.update.bind(reservationController));
router.delete("/:id", reservationController.delete.bind(reservationController));

module.exports = router;