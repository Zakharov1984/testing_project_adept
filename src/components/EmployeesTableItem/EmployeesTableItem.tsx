import { ChangeEvent } from 'react';
import { IEmployeeForActive } from '../../types/employeesType';

import classNames from 'classnames';

interface EmployeesTableItem extends IEmployeeForActive {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


export const EmployeesTableItem: React.FC<EmployeesTableItem> = ({
  id,
  name,
  surname,
  post,
  companyName,
  isActive,
  onChange
}) => {
  return (
    <tr className={classNames({'active': isActive})}>
      <td>
        <input 
          type="checkbox"
          name={companyName}
          value={id}
          checked={isActive}
          onChange={onChange}/>
      </td>
      <td>{surname}</td>
      <td>{name}</td>
      <td>{post}</td>
    </tr>
  )
}