const LeaveRequest = require('../models/LeaveRequest');

// HR views all leave requests
exports.getAllLeaveRequests = async (req, res) => {
  try {
    const requests = await LeaveRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching all leave requests.' });
  }
};

// HR updates leave status
exports.updateLeaveStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const updated = await LeaveRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!updated) return res.status(404).json({ error: 'Leave request not found' });
    res.json({ message: 'Leave status updated', updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating leave status.' });
  }
};
