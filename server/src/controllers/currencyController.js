const ApiError = require("../exceptions/api-error");
const currencyService = require("../services/currency-service");

class CurrencyController {
  async getAll(req, res, next) {
    try {
      const currencies = await currencyService.getAllCurrencies();
      return res.json(currencies);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CurrencyController();
