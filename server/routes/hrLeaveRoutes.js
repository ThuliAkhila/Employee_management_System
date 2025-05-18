const express = require('express');
const router = express.Router();
const { getAllLeaveRequests, updateLeaveStatus } = require('../controllers/hrLeaveController');
const authenticate = require('../middleware/authenticate');

router.get('/leave-requests', authenticate, getAllLeaveRequests);
router.put('/leave-decision/:id', authenticate, updateLeaveStatus);

module.exports = router;
