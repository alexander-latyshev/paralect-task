const ApiError = require("../exceptions/api-error");
const Category = require("../models/CategoryModel");

class CategoryService {
  async getAllCategories() {
    try {
      return await Category.find();
    } catch (error) {
      return ApiError.BadRequest(error.message);
    }
  }
}

module.exports = new CategoryService();
