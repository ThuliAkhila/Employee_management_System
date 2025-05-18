// ManageEmployees.js
import React, { useState } from 'react';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';
import DeleteEmployee from './DeleteEmployee';
import './ManageEmployees.css';

export default function ManageEmployees() {
  const [activeTab, setActiveTab] = useState('add');

  return (
    <div className="manage-employees-container">
      <h1>Manage Employees</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('add')} className={activeTab === 'add' ? 'active' : ''}>Add Employee</button>
        <button onClick={() => setActiveTab('update')} className={activeTab === 'update' ? 'active' : ''}>Update Employee</button>
        <button onClick={() => setActiveTab('delete')} className={activeTab === 'delete' ? 'active' : ''}>Delete Employee</button>
      </div>
      <div className="tab-content">
        {activeTab === 'add' && <AddEmployee />}
        {activeTab === 'update' && <UpdateEmployee />}
        {activeTab === 'delete' && <DeleteEmployee />}
      </div>
    </div>
  );
}