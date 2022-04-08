import React, { useContext, useState, useEffect } from "react";
import { DepartmentContext } from "../context/DepartmentContext";

const Departments = () => {
  const { deptData } = useContext(DepartmentContext);

  return (
    <div className="App mt-3 py-3">
      <div className="container">
        <br />
        <br />
        <button
          className="btn btn-outline-success"
          // onClick={() => openCloseInsertModal()}
        >
          <i className="fas fa-plus"></i>
        </button>
        <h2>Departments</h2>
        <table className="table table-default table-sm table-striped table-hover responsible">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deptData.length !== 0 &&
              deptData.map(d => (
                <tr key={d.dept_id}>
                  <td>{d.dept_id}</td>
                  <td>{d.dep_name}</td>

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

export default Departments;
