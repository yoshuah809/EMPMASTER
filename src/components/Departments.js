import React, { useContext, useState, useEffect } from "react";
import { DepartmentContext } from "../context/DepartmentContext";
import DepartmentModal from "./DepartmentModal";

const Departments = () => {
  const { deptData } = useContext(DepartmentContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState({
    dept_id: "",
    dep_name: "",
    operation: "",
  });

  const selectDepartment = (department, operation) => {
    setSelectedDepartment(department, operation);
    openCloseDepartmentModal();
  };

  const openCloseDepartmentModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App mt-3 py-3">
      <div className="container">
        <br />
        <br />
        <button
          className="btn btn-outline-success"
          onClick={() => openCloseDepartmentModal()}
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
              deptData.map(department => (
                <tr key={department.dept_id}>
                  <td>{department.dept_id}</td>
                  <td>{department.dep_name}</td>

                  <td>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => selectDepartment(department, "Update")}
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
        <DepartmentModal
          openCloseDepartmentModal={openCloseDepartmentModal}
          isOpen={isOpen}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
        />
      </div>
    </div>
  );
};

export default Departments;
