// server/routes/authRoutes.js
const express = require('express');
const { signup, login } = require('../controllers/authController');
const {loginEmployee} =require('../controllers/authcontrolleremployee')
const { getEmployeeProfile } =require('../controllers/authcontrolleremployee')
const  authenticate  = require('../middleware/authenticate')
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/employee-login', loginEmployee);
// Change from POST to GET
router.get('/employee-profile', authenticate, getEmployeeProfile);

module.exports = router;
