import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hook";
import { fetchEmployees } from "./employeesSlice";


export const EmployeesList = () => {
  const dispatch = useAppDispatch(); 

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [])

  return (
    <ul>Сотрудники</ul>
  )
}