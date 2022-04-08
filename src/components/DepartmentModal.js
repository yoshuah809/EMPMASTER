import { useState } from "react";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";

const DepartmentModal = ({
  modalTitle,
  selectedDepartment,
  setSelectedDepartment,
  isOpen,
  openCloseDepartmentModal,
}) => {
  const [newDepartment, setNewDepartment] = useState({
    dept_id: selectedDepartment.dept_id,
    dep_name: selectedDepartment.dep_name,
  });

  const handleChange = e => {
    setSelectedDepartment({
      ...selectedDepartment,
      [e.target.id]: e.target.value,
    });
  };
  const onSubmit = () => {};

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
        <h4 style={{ color: "black" }}>Edit Department Details</h4>
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
          type="submit"
          className="btn btn-outline-success"
          //   onClick={e => onAcceptProductClickHandler(e)}
        >
          Accept
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
