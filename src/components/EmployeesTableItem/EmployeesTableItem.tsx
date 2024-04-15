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
  return (
    <tr>
    {/* <tr className={classNames({[st.active]: isActive})}></tr> */}
      <td>
        <input 
          type="checkbox"
          name="companies"
          value={id}
          checked={isActive}/>
      </td>
      <td>{surname}</td>
      <td>{name}</td>
      <td>{post}</td>
    </tr>
  )
}