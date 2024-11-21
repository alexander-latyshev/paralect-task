const mongoose = require("mongoose");

const CurrencySchema = new mongoose.Schema(
  {
    symbol: { type: String, required: true },
    name: {
      type: String,
      required: true,
      enum: ["USD", "EUR", "GBP", "RUB"],
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Currency", CurrencySchema);
