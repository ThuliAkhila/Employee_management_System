// server/routes/hrRoutes.js
const express = require('express');
const router = express.Router();
const { addEmployee } = require('../controllers/hrController');
const authenticate = require('../middleware/authenticate')
const {updateEmployee} = require('../controllers/employeeController')
const {deleteEmployeeByEmail} = require('../controllers/employeeController')

// POST /api/hr/add-employee
router.post('/add-employee', addEmployee);
router.put('/update-employee', authenticate, updateEmployee);
router.delete('/delete-employee', authenticate, deleteEmployeeByEmail);
module.exports = router;
