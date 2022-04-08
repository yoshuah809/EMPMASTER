import React, { createContext, useEffect, useState } from "react";
import { variables } from "../Variables";
import axios from "axios";

export const EmployeeContext = createContext();

export const EmployeeProvider = props => {
  const [empData, setData] = useState([]);

  const fetchEmployeeData = () => {
    axios.get(variables.API_URL).then(response => {
      try {
        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const getEmpData = async () => {
    const employeees = await fetchEmployeeData();
    setData(employeees);
  };

  useEffect(() => {
    getEmpData();
  }, []);

  return (
    <EmployeeContext.Provider value={{ empData }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
