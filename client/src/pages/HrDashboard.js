import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HrDashboard.css';

export default function HrDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="hr-dashboard">
      <header className="hr-header">
        <h1>HR Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <div className="hr-content">
        <div className="hr-card" onClick={() => navigate('/ManageEmployees')}>
          <h3>Manage Employees</h3>
          <p>View, add, or update employee details.</p>
        </div>

        <div className="hr-card" onClick={() => navigate('/HRLeaveManagement')}>
          <h3>Leave Requests</h3>
          <p>Review and approve employee leave requests.</p>
        </div>

        <div className="hr-card" onClick={() => navigate('/reports')}>
          <h3>Reports</h3>
          <p>View salary, attendance, and leave reports.</p>
        </div>
      </div>
    </div>
  );
}
