require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index.js");

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).send(`> Server is running! 🚀`);
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(SERVER_PORT, () => {
      console.log(
        `> Server is running on port: http://localhost:${SERVER_PORT}`
      );
    });
  } catch (error) {
    console.error("Server Failed:", error);
  }
};

startServer();
