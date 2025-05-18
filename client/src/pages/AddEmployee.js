import React, { useState } from 'react';
import axios from 'axios';
import './AddEmployee.css';

export default function AddEmployee() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'employee',
    department: '',
    designation: '',
    salary: '',
    address: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/hr/add-employee', form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Employee added successfully');
      setForm({ name: '', email: '', phone: '', role: 'employee', department: '', designation: '', salary: '', address: '', password: '' });
    } catch (err) {
      alert(err.response?.data?.msg || 'Error adding employee');
    }
  };

  return (
    <div className="add-employee-container">
      <form className="add-employee-form" onSubmit={handleSubmit}>
        <h2>Add New Employee</h2>
        <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        <input type="text" placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
        <input type="text" placeholder="Department" value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} />
        <input type="text" placeholder="Designation" value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })} />
        <input type="text" placeholder="Salary" value={form.salary} onChange={e => setForm({ ...form, salary: e.target.value })} />
        <input type="text" placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}
