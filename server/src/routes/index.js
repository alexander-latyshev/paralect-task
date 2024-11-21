const express = require("express");
const router = express.Router();

const vacancyRouter = require("./vacancy.router");
const currencyRouter = require("./currency.router");
const categoryRouter = require("./category.router");

router.use("/vacancies", vacancyRouter);


module.exports = router;
