// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import HrDashboard from './pages/HrDashboard';
import AddEmployee from './pages/AddEmployee';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ManageEmployees from './pages/ManageEmployees';
import HRLeaveManagement from './pages/HRLeaveManagement';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hrdashboard" element={<HrDashboard />} />
      
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/ManageEmployees" element={<ManageEmployees/>} />
         <Route path="/HRLeaveManagement" element={<HRLeaveManagement/>} />
      </Routes>
    </Router>
  );
}

export default App;
