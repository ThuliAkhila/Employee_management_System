// server/models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, default: 'employee' },
  department: String,
  designation: String,
  salary: String,
  address: String,
  password: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Employee', employeeSchema);
