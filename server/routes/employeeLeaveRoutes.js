const express = require('express');
const router = express.Router();
const { submitLeaveRequest, getEmployeeLeaves } = require('../controllers/employeeLeaveController');
const authenticate = require('../middleware/authenticate');

router.post('/request', authenticate, submitLeaveRequest);
router.get('/status', authenticate, getEmployeeLeaves);

module.exports = router;
