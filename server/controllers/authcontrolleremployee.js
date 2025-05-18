const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');

const loginEmployee = async (req, res) => {
  const { email, password } = req.body;
  console.log("🔐 Login attempt for email:", email);

  try {
    const employee = await Employee.findOne({ email });
    if (!employee) {
      console.log("❌ Employee not found");
      return res.status(400).json({ msg: 'Employee not found' });
    }

    console.log("✅ Employee found:", employee);

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      console.log("❌ Password does not match");
      return res.status(401).json({ msg: 'Incorrect password' });
    }

    console.log("✅ Password matched");

   const token = jwt.sign(
  {
    id: employee._id,
    name: employee.name,     // ✅ Include employee name
    email: employee.email,   // ✅ Include employee email
    role: employee.role
  },
  process.env.JWT_SECRET,
  { expiresIn: '1d' }
);

    console.log("🎯 Employee role before sending:", employee.role);

    res.json({ token, role: employee.role, employee });
  } catch (err) {
    console.error("💥 Server error:", err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getEmployeeProfile = async (req, res) => {
  try {
    const employee = await Employee.findById(req.user.id).select('-password');
    res.json(employee);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to load profile' });
  }
};

module.exports = { loginEmployee, getEmployeeProfile };
