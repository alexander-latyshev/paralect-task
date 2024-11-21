const express = require("express");
const router = express.Router();

const vacancyRouter = require("./vacancy.router");


router.use("/vacancies", vacancyRouter);


module.exports = router;
