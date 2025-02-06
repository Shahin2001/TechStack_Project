import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
  const [employee, setEmployee] = useState({ name: "", email: "", department: "" });
  const { id } = useParams();  
  const navigate = useNavigate();

  
  useEffect(() => {
    loadEmployeeData();
  }, [id]);

  const loadEmployeeData = () => {
    axios.get(`http://localhost:8081/api/employees/${id}`)
      .then((res) => setEmployee(res.data))  
      .catch((err) => console.error(err));
  };

  
  const handleChange = (e) => setEmployee({ ...employee, [e.target.name]: e.target.value });

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!employee.name || !employee.email || !employee.department) {
      alert("Please fill all fields");
      return;
    }

    
    axios.put(`http://localhost:8081/api/employees/${id}`, employee)
      .then(() => {
        alert("Employee Updated");
        navigate("/showall"); 
      })
      .catch((err) => {
        console.error(err);
        alert("Error updating employee. Please try again.");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            id="department"
            name="department"
            placeholder="Enter employee department"
            value={employee.department}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateForm;
