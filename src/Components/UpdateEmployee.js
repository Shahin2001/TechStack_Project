import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  
const UpdateEmployee = () => {
  const [employees, setEmployees] = useState([]);

 
  useEffect(() => {
    loadEmployees();
  }, []);

  
  const loadEmployees = () => {
    axios.get("http://localhost:8081/api/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Employee List</h2>
     
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                
                <Link to={`/update/${emp.id}`}>
                  <button className="btn btn-warning">Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateEmployee;
