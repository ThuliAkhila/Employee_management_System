// client/src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [role, setRole] = useState('employee'); // Default to employee
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = role === 'hr'
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/employee-login';

      const res = await axios.post(url, form);

      localStorage.setItem('token', res.data.token);
      alert('Login successful');

      if (role === 'hr') {
        navigate('/HrDashboard');
      } else {
        navigate('/employee-dashboard');
      }
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="centered-page">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="role-buttons">
          <button
            type="button"
            className={role === 'hr' ? 'active' : ''}
            onClick={() => setRole('hr')}
          >
            HR
          </button>
          <button
            type="button"
            className={role === 'employee' ? 'active' : ''}
            onClick={() => setRole('employee')}
          >
            Employee
          </button>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />

        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}
