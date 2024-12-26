const Category = require("../models/CategoryModel");
require("dotenv").config();

module.exports = async function () {
  const categories = [
    {
      name: "all",
      path: "/vacancies",
      slug: "all-vacancies",
      url: `${process.env.CLIENT_URL}/vacancies`,
    },
    {
      name: "my vacancies",
      path: "/my-vacancies",
      slug: "my-vacancies",
      url: `${process.env.CLIENT_URL}/my-vacancies`,
    },
  ];

  for (const category of categories) {
    if (!(await Category.findOne({ name: category.name }))) {
      await Category.create(category);
    }
  }
};
