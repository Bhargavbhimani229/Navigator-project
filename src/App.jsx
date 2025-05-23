import React, { useEffect, useState } from "react";
import EmployeForm from "./components/EmployeForm";
import EmployeList from "./components/EmployeList";
import Nav from "./components/Nav";
import { Route, Routes, useNavigate } from "react-router";

const App = () => {
  const [employe, setEmploye] = useState({});
  const [empList, setEmplList] = useState([]);
  const [empId, setEmpId] = useState(-1);
  const navigator = useNavigate();

  // Load data from localStorage on first load
  useEffect(() => {
    let oldEmp = JSON.parse(localStorage.getItem("Employee")) || [];
    setEmplList(oldEmp);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmploye({ ...employe, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (empId === -1) {
      const id = Date.now();
      const newList = [...empList, { id, ...employe }];
      setEmplList(newList);
      localStorage.setItem("Employee", JSON.stringify(newList));
    } else {
      const updatedList = empList.map((emp) =>
        emp.id === empId ? { ...emp, ...employe } : emp
      );
      setEmplList(updatedList);
      localStorage.setItem("Employee", JSON.stringify(updatedList));
      setEmpId(-1);
    }

    setEmploye({});
  };

  const handleDelete = (id) => {
    const newEmpList = empList.filter((emp) => emp.id !== id);
    setEmplList(newEmpList);
    localStorage.setItem("Employee", JSON.stringify(newEmpList));
  };

  const handleEdit = (id) => {
    const emp = empList.find((emp) => emp.id === id);
    setEmploye(emp);
    setEmpId(id);
    navigator("/");
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <EmployeForm
              employe={employe}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              empList={empList}
            />
          }
        />

        <Route
          path="view"
          element={
            <EmployeList
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              empList={empList}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
