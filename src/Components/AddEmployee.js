import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({ name: "", email: "", department: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setEmployee({ ...employee, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!employee.name || !employee.email || !employee.department) {
      alert("Please fill all fields");
      return;
    }

    axios.post("http://localhost:8081/api/employees", employee)
      .then(() => {
        alert("Employee Added");
        navigate("/showall");
      })
      .catch(err => {
        console.error(err);
        alert("Error adding employee. Please try again.");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control w-50"  
            id="name"
            name="name"
            placeholder="Enter employee name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control w-50"  
            id="email"
            name="email"
            placeholder="Enter employee email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department</label>
          <input
            type="text"
            className="form-control w-50"  
            id="department"
            name="department"
            placeholder="Enter employee department"
            value={employee.department}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
