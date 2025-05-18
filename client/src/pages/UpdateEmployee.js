import React, { useState } from 'react';
import axios from 'axios';
import './UpdateEmployee.css';

export default function UpdateEmployee() {
  const [email, setEmail] = useState('');
  const [updatedData, setUpdatedData] = useState({
    name: '',
    phone: '',
    department: '',
    designation: '',
    salary: '',
    address: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email,
        updateData: updatedData
      };

      await axios.put('http://localhost:5000/api/hr/update-employee', payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      alert('Employee updated successfully');
      setEmail('');
      setUpdatedData({
        name: '',
        phone: '',
        department: '',
        designation: '',
        salary: '',
        address: '',
      });
    } catch (err) {
      console.error('Error updating employee:', err);
      alert(err.response?.data?.msg || 'Error updating employee');
    }
  };

  return (
    <div className="update-employee-container">
      <form className="update-employee-form" onSubmit={handleSubmit}>
        <h2>Update Employee</h2>
        <input type="email" placeholder="Employee Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Full Name" value={updatedData.name} onChange={e => setUpdatedData({ ...updatedData, name: e.target.value })} />
        <input type="text" placeholder="Phone" value={updatedData.phone} onChange={e => setUpdatedData({ ...updatedData, phone: e.target.value })} />
        <input type="text" placeholder="Department" value={updatedData.department} onChange={e => setUpdatedData({ ...updatedData, department: e.target.value })} />
        <input type="text" placeholder="Designation" value={updatedData.designation} onChange={e => setUpdatedData({ ...updatedData, designation: e.target.value })} />
        <input type="text" placeholder="Salary" value={updatedData.salary} onChange={e => setUpdatedData({ ...updatedData, salary: e.target.value })} />
        <input type="text" placeholder="Address" value={updatedData.address} onChange={e => setUpdatedData({ ...updatedData, address: e.target.value })} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
