import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HRLeaveManagement.css'; // Create this file based on your styling pattern

export default function HRLeaveManagement() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaveRequests = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/hrs/leave-requests', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setLeaveRequests(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching leave requests:', err);
      setLoading(false);
    }
  };

  const handleDecision = async (id, decision) => {
    try {
      await axios.put(`http://localhost:5000/api/hrs/leave-decision/${id}`, { status: decision }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert(`Leave ${decision.toLowerCase()}ed successfully.`);
      fetchLeaveRequests(); // Refresh the list
    } catch (err) {
      alert('Failed to update leave status');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  if (loading) return <p className="loading">Loading leave requests...</p>;

  return (
    <div className="hr-container">
      <header className="header">
        <h1>Leave Requests Management</h1>
      </header>

      {leaveRequests.length === 0 ? (
        <p>No leave requests found.</p>
      ) : (
        <ul className="leave-list">
          {leaveRequests.map((request) => (
            <li key={request._id} className="leave-item">
              <p><strong>{request.employeeName}</strong> ({request.email})</p>
              <p>From: {request.fromDate}</p>
              <p>To: {request.toDate}</p>
              <p>Reason: {request.reason}</p>
              <p>Status: <span className={`status ${request.status.toLowerCase()}`}>{request.status}</span></p>

              {request.status === 'Pending' && (
                <div className="action-buttons">
                  <button className="approve" onClick={() => handleDecision(request._id, 'Approved')}>Approve</button>
                  <button className="reject" onClick={() => handleDecision(request._id, 'Rejected')}>Reject</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
