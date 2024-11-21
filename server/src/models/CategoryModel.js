const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    path: { type: String, required: true },
    url: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Category", CategorySchema);
