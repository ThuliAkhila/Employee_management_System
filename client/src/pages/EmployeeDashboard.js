import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmployeeDashboard.css';

export default function EmployeeDashboard() {
  const [employee, setEmployee] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showLeaveRequest, setShowLeaveRequest] = useState(false);
  const [showLeaveStatus, setShowLeaveStatus] = useState(false);

  const [leaveRequest, setLeaveRequest] = useState({
  fromDate: '',
  toDate: '',
  reason: ''
});
  const [leaveStatus, setLeaveStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get('http://localhost:5000/api/auth/employee-profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEmployee(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching employee:', err);
        setLoading(false);
      }
    };
    fetchEmployee();
  }, []);

  const handleLeaveChange = (e) => {
    setLeaveRequest({ ...leaveRequest, [e.target.name]: e.target.value });
  };

  const submitLeaveRequest = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem('token');

  const requestData = {
    ...leaveRequest,
    employeeName: employee.name,
    email: employee.email
  };

  try {
    await axios.post('http://localhost:5000/api/leave/request', requestData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Leave request submitted');
    setLeaveRequest({ fromDate: '', toDate: '', reason: '' });
  } catch (err) {
    alert('Failed to submit leave request');
    console.error('Error submitting leave request:', err);
  }
};


  const fetchLeaveStatus = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('http://localhost:5000/api/leave/status', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeaveStatus(res.data);
    } catch (err) {
      alert('Failed to fetch leave status');
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  if (loading) return <p className="loading">Loading your dashboard...</p>;

  if (!employee) return <p className="error">You must be logged in to see this page.</p>;

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome, {employee.name}</h1>
        <div>
          <button className="button" onClick={() => setShowProfile(!showProfile)}>
            {showProfile ? 'Hide Profile' : 'Show Profile'}
          </button>
          <button className="button logout" onClick={logout}>Logout</button>
        </div>
      </header>

      {showProfile && (
        <section className="profile">
          <h2>Profile Details</h2>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Designation:</strong> {employee.designation}</p>
          <p><strong>Salary:</strong> ₹{employee.salary}</p>
          <p><strong>Address:</strong> {employee.address}</p>
        </section>
      )}

      <section className="leaveSection">
        <h2>Leave Section</h2>
        <div className="leaveButtons">
          <button
            className={`button ${showLeaveRequest ? 'active' : ''}`}
            onClick={() => {
              setShowLeaveRequest(true);
              setShowLeaveStatus(false);
            }}
          >
            Leave Request
          </button>
          <button
            className={`button ${showLeaveStatus ? 'active' : ''}`}
            onClick={() => {
              setShowLeaveStatus(true);
              setShowLeaveRequest(false);
              fetchLeaveStatus();
            }}
          >
            Leave Status
          </button>
        </div>

        {showLeaveRequest && (
          <form onSubmit={submitLeaveRequest} className="leaveForm">
            <label>
              Start Date:
              <input
  type="date"
  name="fromDate"
  value={leaveRequest.fromDate}
  onChange={handleLeaveChange}
/>
            </label>
            <label>
              End Date:
              <input
  type="date"
  name="toDate"
  value={leaveRequest.toDate}
  onChange={handleLeaveChange}
/>
            </label>
            <label>
              Reason:
              <textarea
                name="reason"
                value={leaveRequest.reason}
                onChange={handleLeaveChange}
                required
                className="textarea"
              />
            </label>
            <button type="submit" className="submitButton">Submit Request</button>
          </form>
        )}

        {showLeaveStatus && (
  <>
    <h3>Your Leave Status</h3>
    {leaveStatus && leaveStatus.length > 0 ? (
      <ul className="leaveStatusList">
        {leaveStatus.map((leave, i) => (
          <li key={i} className="leaveStatusItem">
            <p>
             <strong>From:</strong> {new Date(leave.fromDate).toLocaleDateString()} <br />
            <strong>To:</strong> {new Date(leave.toDate).toLocaleDateString()}
            </p>
            {leave.reason && (
              <p>
                <strong>Reason:</strong> {leave.reason}
              </p>
            )}
            <p>
              Status: <span className={`status ${leave.status.toLowerCase()}`}>{leave.status}</span>
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No leave requests found.</p>
    )}
  </>
)}
      </section>
    </div>
  );
}
