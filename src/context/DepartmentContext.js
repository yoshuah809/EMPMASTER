import React, { createContext, useEffect, useState } from "react";
import { variables } from "../Variables";
import axios from "axios";

export const DepartmentContext = createContext();

export const DepartmentProvider = props => {
  const [deptData, setDeptData] = useState([]);

  const fetchDepartmentData = () => {
    axios.get(variables.API_URL).then(response => {
      try {
        if (response.data) {
          setDeptData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const getdeptData = async () => {
    const department = await fetchDepartmentData();
    setDeptData(department);
  };

  useEffect(() => {
    getdeptData();
  }, []);

  return (
    <DepartmentContext.Provider value={{ deptData }}>
      {props.children}
    </DepartmentContext.Provider>
  );
};
