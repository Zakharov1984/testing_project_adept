import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { EmployeesTableItem } from '../EmployeesTableItem/EmployeesTableItem';

import st from './EmployeesList.module.scss';

interface IEmployeesList {
  companyName: string,
  onChangeAllCheckBox: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckBox: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EmployeesList: React.FC<IEmployeesList> = ({
  companyName, 
  onChangeAllCheckBox,
  onChangeCheckBox
}) => {
  const { employees } = useAppSelector(
    (state) => state.employees
  );

  const [isAllActiveCheckBox, setIsAllActiveCheckBox] = useState(false);

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
              value={companyName}
              checked={isAllActiveCheckBox}
              onChange={(e) => {
                setIsAllActiveCheckBox(!isAllActiveCheckBox);
                onChangeAllCheckBox(e);
              }}/>
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
                {...employee}
                onChange={onChangeCheckBox}/>
          )}
        </tbody>
      </table>
    </article>
  )
}