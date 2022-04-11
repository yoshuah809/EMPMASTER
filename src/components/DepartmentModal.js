import { useContext, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { DepartmentContext } from "../context/DepartmentContext";

const DepartmentModal = ({
  selectedDepartment,
  setSelectedDepartment,
  isOpen,
  openCloseDepartmentModal,
}) => {
  const { updateDepartment, addDepartment } = useContext(DepartmentContext);

  const handleChange = e => {
    setSelectedDepartment({
      ...selectedDepartment,
      [e.target.id]: e.target.value,
    });
  };
  const clearForm = () => {
    setSelectedDepartment({
      dept_id: "",
      dep_name: "",
    });
  };
  const handleSubmit = () => {
    try {
      updateDepartment(selectedDepartment);
      openCloseDepartmentModal();
      clearForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAdd = () => {
    try {
      addDepartment(selectedDepartment);
      openCloseDepartmentModal();
      clearForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal show={isOpen}>
      <ModalHeader
        className="bg-primary"
        close={
          <button className="close" onClick={(isOpen = !isOpen)}>
            ×
          </button>
        }
      >
        <h4 style={{ color: "black" }}>
          {selectedDepartment.dept_id ? "Edit Department" : "Create Department"}
        </h4>
      </ModalHeader>
      <ModalBody>
        <label for="dept_id">
          <b>Department ID</b>
        </label>
        <input
          type="text"
          class="form-control"
          id="dept_id"
          disabled
          value={selectedDepartment.dept_id}
          onChange={e => handleChange(e)}
        />
        <label for="dep_name">
          <b>Department Name</b>
        </label>

        <input
          type="text"
          className="form-control"
          id="dep_name"
          value={selectedDepartment.dep_name}
          placeholder="Insert Department Name"
          onChange={handleChange}
        />
      </ModalBody>
      <ModalFooter>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={selectedDepartment.dept_id ? handleSubmit : handleAdd}
        >
          {selectedDepartment.dept_id ? "Save" : "Create"}
        </button>{" "}
        <button
          className="btn btn-outline-primary"
          onClick={() => openCloseDepartmentModal()}
        >
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default DepartmentModal;
