import classNames from 'classnames';
import st from './EmployeesTableItem.module.scss';
import { IEmployeeForActive } from '../../types/employeesType';
import { ChangeEvent } from 'react';

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
    <tr>
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