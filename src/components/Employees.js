import React, { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import moment from "moment";

const Employees = () => {
  const { empData } = useContext(EmployeeContext);
  return (
    <div className="App mt-4 py-3">
      <div className="container">
        <br />
        <br />
        <button
          className="btn btn-outline-success"
          // onClick={() => openCloseInsertModal()}
        >
          <i className="fas fa-plus"></i>
        </button>
        <h2>Employees</h2>
        <table className="table table-default table-sm table-striped table-hover responsible">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Hired On</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {empData.length !== 0 &&
              empData.map(e => (
                <tr key={e.emp_id}>
                  <td>{e.emp_id}</td>
                  <td>{e.emp_name}</td>
                  <td>{e.department}</td>

                  <td>{moment(e.hired_on).format("MM/DD/yyyy")}</td>
                  <td>
                    <button
                      className="btn btn-outline-success"
                      //onClick={() => selectProduct(product, "Update")}
                    >
                      <i className="fas fa-edit"></i>
                    </button>{" "}
                    {"   "}
                    <button
                      // onClick={() => selectEngine(employee)}
                      className="btn btn-outline-danger"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
