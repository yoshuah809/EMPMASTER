import React, { createContext, useEffect, useState } from "react";
import { variables } from "../Variables";
import axios from "axios";

export const DepartmentContext = createContext();

export const DepartmentProvider = props => {
  const [deptData, setDeptData] = useState([]);

  const fetchDepartmentData = () => {
    axios.get(`${variables.API_URL}/departments/`).then(response => {
      try {
        if (response.data) {
          setDeptData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const updateDepartment = async department => {
    const { dept_id: id, dep_name: name } = department;

    try {
      const response = await axios.put(
        `${variables.API_URL}/department/${id}/`,
        department
      );
      setDeptData(
        deptData.map(dep => (dep.dept_id === id ? { ...response.data } : dep))
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const addDepartment = async department => {
    await axios
      .post(`${variables.API_URL}/departments/`, department)
      .then(response => {
        setDeptData(deptData.concat(response.data));
      });
  };

  const getdeptData = async () => {
    const department = await fetchDepartmentData();
    setDeptData(department);
  };

  useEffect(() => {
    fetchDepartmentData();
  }, []);

  return (
    <DepartmentContext.Provider
      value={{ deptData, updateDepartment, addDepartment }}
    >
      {props.children}
    </DepartmentContext.Provider>
  );
};
