import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "./employeesSlice";
import type { AppDispatch } from "../../store";


export const EmployeesList = () => {
  const dispatch: AppDispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [])

  return (
    <ul>Сотрудники</ul>
  )
}