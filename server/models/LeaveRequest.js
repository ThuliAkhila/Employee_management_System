const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  email: { type: String, required: true },
  fromDate: { type: String, required: true },
  toDate: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);