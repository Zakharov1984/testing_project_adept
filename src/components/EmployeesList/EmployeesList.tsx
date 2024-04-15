import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { fetchEmployees } from "./employeesSlice";
import { EmployeesTableItem } from '../EmployeesTableItem/EmployeesTableItem';

export const EmployeesList = () => {
  const dispatch = useAppDispatch(); 
  const { employees, 
          isFirstActivatedCompany, 
          employeesLoadingStatus } = useAppSelector(
    (state) => state.employees
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [])

  const isActiveAllEmployees = () => {

  }

  const handleChangeAllCheckBox = () => {

  }

  return (
    <table className="bg-table">
      <caption>
        <label>
          Выделить все
          <input
            className="chbCenter" 
            type="checkbox"
            name="allEmployees"
            checked={false}/>
        </label>
      </caption>
      <thead>
        <tr>
          <td>Чекбокс</td>
          <td>Фамилия</td>
          <td>Имя</td>
          <td>Должность</td>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  )
}

/* {employees.Company0.map(
          employee => <EmployeesTableItem 
            key={employee.id} 
            {...employee}/>
        )} */