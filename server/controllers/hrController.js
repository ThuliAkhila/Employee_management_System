const bcrypt = require('bcryptjs');
const Employee = require('../models/Employee'); // ✅ Add this line

const addEmployee = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Optional for debugging

    const { password, email, ...rest } = req.body;

    if (!password || !email) {
      return res.status(400).json({ msg: 'Missing email or password' });
    }

    const existing = await Employee.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: 'Employee with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = new Employee({ ...rest, email, password: hashedPassword });

    await employee.save();
    res.status(201).json({ msg: 'Employee added successfully' });

  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: 'Error adding employee', error: error.message });
  }
};

module.exports = { addEmployee };
