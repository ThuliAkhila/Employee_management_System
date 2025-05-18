
// controllers/hrController.js
const Employee = require('../models/Employee');

const updateEmployee = async (req, res) => {
 try {
    const { email, updateData } = req.body;

    if (!email) {
      return res.status(400).json({ msg: 'Email is required to update employee' });
    }

    const employee = await Employee.findOneAndUpdate({ email }, updateData, {
      new: true,
    });

    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found with that email' });
    }

    res.json({ msg: 'Employee updated successfully', employee });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ msg: 'Server error while updating employee' });
  }
};

const deleteEmployeeByEmail = async (req, res) => {
try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ msg: 'Email is required to delete employee' });
    }

    const deleted = await Employee.findOneAndDelete({ email });

    if (!deleted) {
      return res.status(404).json({ msg: 'Employee not found with that email' });
    }

    res.json({ msg: 'Employee deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ msg: 'Server error while deleting employee' });
  }
};

module.exports = {
  updateEmployee,
  deleteEmployeeByEmail
};
