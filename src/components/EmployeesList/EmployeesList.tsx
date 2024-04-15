import { useEffect } from "react";
import { useAppSelector } from "../../hooks/hook";
import { EmployeesTableItem } from '../EmployeesTableItem/EmployeesTableItem';

import st from './EmployeesList.module.scss';

interface IEmployeesList {
  companyName: string
}

export const EmployeesList: React.FC<IEmployeesList> = ({companyName}) => {
  const { employees } = useAppSelector(
    (state) => state.employees
  );

  console.log(employees);

  const isActiveAllEmployees = () => {

  }

  const handleChangeAllCheckBox = () => {

  }

  return (
    <article className={st.employeesList}>
      <h3>{companyName}</h3>
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
          {employees[companyName]?.map(
              employee => <EmployeesTableItem 
                key={employee.id} 
                {...employee}/>
          )}
        </tbody>
      </table>
    </article>
  )
}