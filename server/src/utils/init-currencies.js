const Currency = require("../models/CurrencyModel");

module.exports = async function () {
  const сurrencies = [
    { symbol: "$", name: "USD" },
    { symbol: "€", name: "EUR" },
    { symbol: "£", name: "GBP" },
    { symbol: "₽", name: "RUB" },
  ];

  for (const curr of сurrencies) {
    if (!(await Currency.findOne({ name: curr.name }))) {
      await Currency.create(curr);
    }
  }
};
