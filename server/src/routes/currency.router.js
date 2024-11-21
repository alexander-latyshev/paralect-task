const express = require("express");
const currencyController = require("../controllers/currencyController");

const router = express.Router();

router.get("/", currencyController.getAll);

module.exports = router;
