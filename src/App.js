import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";  // Import Link

import EmployeeList from "./Components/EmployeeList";
import AddEmployee from "./Components/AddEmployee";
import UpdateForm from "./Components/UpdateForm";
import UpdateEmployee from "./Components/UpdateEmployee";
import DeleteEmployee from "./Components/DeleteEmployee";  
import Home from "./Components/Home"
const App = () => {
  return (
    <Router>  
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Employee Data</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">Add Employee</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/update">Update Employee</Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/delete/1">Delete Employee</Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/showall">Show all Employees</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showall" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/update" element={<UpdateEmployee />} /> 
        <Route path="/update/:id" element={<UpdateForm />} /> 
        <Route path="/delete/:id" element={<DeleteEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;
