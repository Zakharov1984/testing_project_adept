import classNames from 'classnames';
import st from './EmployeesTableItem.module.scss';
import { IEmployeeForActive } from '../../types/employeesType';
import { ChangeEvent } from 'react';

interface EmployeesTableItem extends IEmployeeForActive {
  //handleChangeCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
}


export const EmployeesTableItem: React.FC<EmployeesTableItem> = ({
  id,
  name,
  surname,
  post,
  companyName,
  isActive
}) => {
  console.log(name);

  const handleChangeCheckbox = () => {
    console.log('change');
  }

  return (
    <tr>
      <td>
        <input 
          type="checkbox"
          name="employee"
          value={id}
          checked={isActive}
          onChange={handleChangeCheckbox}/>
      </td>
      <td>{surname}</td>
      <td>{name}</td>
      <td>{post}</td>
    </tr>
  )
}