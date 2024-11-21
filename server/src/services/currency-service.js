const ApiError = require("../exceptions/api-error");
const Currency = require("../models/CurrencyModel");

class CurrencyService {
  async getAllCurrencies() {
    try {
      return await Currency.find();
    } catch (error) {
      throw ApiError.badRequest(error.message);
    }
  }
}

module.exports = new CurrencyService();
