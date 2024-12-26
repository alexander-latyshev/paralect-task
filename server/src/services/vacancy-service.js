const ApiError = require("../exceptions/api-error.js");
const Vacancy = require("../models/VacancyModel.js");
require("dotenv").config();

class VacancyService {
  async getAllVacancies(page, limit) {
    try {
      page = page || Number(String(process.env.REQUEST_DEFAULT_PAGE)) || 1;
      limit = limit || Number(String(process.env.REQUEST_DEFAULT_LIMIT)) || 7;

      const offset = (page - 1) * limit;

      const vacancies = await Vacancy.find().skip(offset).limit(limit);
      const count = await Vacancy.countDocuments();

      return {
        vacancies,
        count,
      };
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }

  async getVacancyById(id) {
    try {
      return await Vacancy.findById(id);
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }

  async createVacancy(vacancyData) {
    try {
      const { company, position, salary } = vacancyData;

      if (await Vacancy.findOne({ company, position })) {
        throw ApiError.BadRequest(
          "Vacancy with the same company, position already exists."
        );
      }

      const vacancy = new Vacancy(vacancyData);
      return await vacancy.save();
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }

  async updateVacancy(id, vacancyData) {
    try {
      return await Vacancy.findByIdAndUpdate(id, vacancyData, { new: true });
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }

  async deleteVacancy(id) {
    try {
      return await Vacancy.findByIdAndDelete(id);
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }
}

module.exports = new VacancyService();
