import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { EmployeesTableItem } from '../EmployeesTableItem/EmployeesTableItem';

export const EmployeesList = () => {
  const { employees } = useAppSelector(
    (state) => state.employees
  );

  const isActiveAllEmployees = () => {

  }

  const handleChangeAllCheckBox = () => {

  }

  return (
    <article>
      <h3>Имя Компании</h3>
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
          {employees.Company0?.map(
              employee => <EmployeesTableItem 
                key={employee.id} 
                {...employee}/>
          )}
        </tbody>
      </table>
    </article>
  )
}