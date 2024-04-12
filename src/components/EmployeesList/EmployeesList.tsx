import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { employeesFetched } from "./employeesSlice";


export const EmployeesList = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    fetch('http://localhost:3001/employees')
      .then(response => response.json())
      .then(data => {
        dispatch(employeesFetched(data));
      })
  }, [])

  return (
    <ul>Сотрудники</ul>
  )
}