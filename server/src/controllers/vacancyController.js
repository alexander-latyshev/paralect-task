const ApiError = require("../exceptions/api-error");
const vacancyService = require("../services/vacancy-service");

class VacancyController {
  async getAll(req, res, next) {
    try {
      const { page, limit } = req.query;

      const vacancies = await vacancyService.getAllVacancies(page, limit);
      res.json(vacancies);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const vacancy = await vacancyService.getVacancyById(req.params.id);
      if (!vacancy) {
        return next(ApiError.BadRequest("Not found"));
      }
      res.json(vacancy);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const vacancy = await vacancyService.createVacancy(req.body);
      res.status(201).json(vacancy);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedVacancy = await vacancyService.updateVacancy(
        req.params.id,
        req.body
      );
      if (!updatedVacancy) {
        return next(ApiError.BadRequest("Not found"));
      }
      res.json(updatedVacancy);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const deletedVacancy = await vacancyService.deleteVacancy(req.params.id);
      if (!deletedVacancy) {
        return next(ApiError.BadRequest("Not found"));
      }
      res.json({ message: "success" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new VacancyController();
