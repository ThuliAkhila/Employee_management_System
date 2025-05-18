const LeaveRequest = require('../models/LeaveRequest');

// Employee submits a leave request
exports.submitLeaveRequest = async (req, res) => {
  try {
    const { fromDate, toDate, reason } = req.body;
    const { name: employeeName, email } = req.user; // from authenticate middleware

    if (!fromDate || !toDate || !reason) {
      return res.status(400).json({ msg: 'All fields are required' });
    }

    const newRequest = new LeaveRequest({
      employeeName,
      email,
      fromDate,
      toDate,
      reason,
      status: 'Pending',
    });

    await newRequest.save();
    res.status(201).json({ msg: 'Leave request submitted successfully' });
  } catch (err) {
    console.error('Error submitting leave request:', err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Employee views their leave requests
exports.getEmployeeLeaves = async (req, res) => {
  try {
    const leaves = await LeaveRequest.find({ email: req.user.email }).sort({ createdAt: -1 });
    res.json(leaves);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching leave status.' });
  }
};
