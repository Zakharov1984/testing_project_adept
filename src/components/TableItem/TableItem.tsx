import { ChangeEvent } from "react"
import { ICompaniesForActive } from "../../types/companiesTypes"
import classNames from 'classnames';

import st from './TableItem.module.scss';
interface ITableItem extends ICompaniesForActive {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TableItem: React.FC<ITableItem> = ({id, name, address, employeeCounter, isActive, handleChange}) => { 
  return (
    <tr className={classNames({[st.active]: isActive})}>
      <td>
        <input 
          type="checkbox"
          name="companies"
          value={id}
          checked={isActive}
          onChange={handleChange}/>
      </td>
      <td>{name}</td>
      <td>{employeeCounter}</td>
      <td>{address}</td>
    </tr>
  )
} 