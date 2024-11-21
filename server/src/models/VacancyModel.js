const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  salary: { 
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    currency: { type: String, required: true, enum: ['USD', 'EUR', 'GBP', 'RUB'] }
  },
  status: { type: String, enum: ['Applied', 'Interview', 'Rejected', 'Accepted'], default: 'Applied' },
  note: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Vacancy', VacancySchema);
