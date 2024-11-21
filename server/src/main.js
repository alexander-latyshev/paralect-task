require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/index.js");
const errorMiddleware = require("./middleware/error-middleware.js");
const initCurrencies = require("./utils/init-currencies.js");
const initCategories = require("./utils/init-categories.js");

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.status(200).send(`> Server is running! 🚀`);
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection ✅");

    await initCurrencies();
    console.log("Currencies initialized ✅");

    await initCategories();
    console.log("Categories initialized ✅");

    app.listen(SERVER_PORT, () => {
      console.log(
        `> Server is running on port: http://localhost:${SERVER_PORT}`
      );
      console.log(
        `> Client is running on port: http://localhost:${CLIENT_PORT}`
      );
    });
  } catch (error) {
    console.error("Server Failed:", error);
  }
};

startServer();
