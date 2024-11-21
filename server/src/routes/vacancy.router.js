const express = require("express");
const vacancyController = require("../controllers/vacancyController");

const router = express.Router();

router.get("/", vacancyController.getAll);
router.get("/:id", vacancyController.getOne);
router.post("/", vacancyController.create);
router.put("/:id", vacancyController.update);
router.delete("/:id", vacancyController.delete);

module.exports = router;
