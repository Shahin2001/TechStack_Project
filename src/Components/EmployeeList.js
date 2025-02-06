import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeList = () => {
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
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
