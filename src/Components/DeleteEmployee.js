import React, { useEffect, useState } from "react";
import axios from "axios";


const DeleteEmployee = () => {
  const [employees, setEmployees] = useState([]);

 
  useEffect(() => {
    loadEmployees();
  }, []);

  
  const loadEmployees = () => {
    axios.get("http://localhost:8081/api/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  };

  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios.delete(`http://localhost:8081/api/employees/${id}`)
        .then(() => {
          alert("Employee Deleted");
          loadEmployees();  
        })
        .catch((err) => console.error(err));
    }
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
                
                <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteEmployee;
