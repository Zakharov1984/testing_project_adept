import { ICompanies } from '../../types/companiesTypes';

export const TableItem: React.FC<ICompanies> = ({id, name, address, employeeCounter}) => {
  return (
    <tr>
      <td>
        <input 
          type="checkbox"
          name="companies"
          value={id}/>
      </td>
      <td>{name}</td>
      <td>{employeeCounter}</td>
      <td>{address}</td>
    </tr>
  )
} 