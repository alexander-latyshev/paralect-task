const express = require("express");
const router = express.Router();

const vacancyRouter = require("./vacancy.router");
const currencyRouter = require("./currency.router");
const categoryRouter = require("./category.router");

router.use("/vacancies", vacancyRouter);
router.use("/currencies", currencyRouter);
router.use("/category", categoryRouter);

module.exports = router;
