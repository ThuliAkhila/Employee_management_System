// DeleteEmployee.js
import React, { useState } from 'react';
import axios from 'axios';
import './DeleteEmployee.css';

export default function DeleteEmployee() {
  const [email, setEmail] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/api/hr/delete-employee?email=${email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Employee deleted successfully');
      setEmail('');
    } catch (err) {
      console.error('Delete error:', err);
      alert(err.response?.data?.msg || 'Error deleting employee');
    }
  };

  return (
    <div className="delete-employee-container">
      <form className="delete-employee-form" onSubmit={handleDelete}>
        <h2>Delete Employee</h2>
        <input type="email" placeholder="Employee Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
