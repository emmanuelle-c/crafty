const express = require("express");
const IdentifiantController = require("../Controllers/IdentifiantController");

const router = express.Router();
const identifiantController = new IdentifiantController();

router.get("/", identifiantController.readAll.bind(identifiantController));
router.get("/:id", identifiantController.readOne.bind(identifiantController));
router.post("/", identifiantController.create.bind(identifiantController));
router.put("/:id", identifiantController.update.bind(identifiantController));
router.delete("/:id", identifiantController.delete.bind(identifiantController));


module.exports = router;
// router.get('/test/:id', (req, res) => {
//     console.log("Request params:", req.params); // Affiche les params dans la console
//     res.json({ message: `The parameter is ${req.params.id}` });
// });
