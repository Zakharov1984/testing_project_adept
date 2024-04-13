import { ICompaniesForActive } from "../../types/companiesTypes"


export const TableItem: React.FC<ICompaniesForActive> = ({id, name, address, employeeCounter, isActive}) => {
  return (
    <tr>
      <td>
        <input 
          type="checkbox"
          name="companies"
          value={id}
          checked={isActive}/>
      </td>
      <td>{name}</td>
      <td>{employeeCounter}</td>
      <td>{address}</td>
    </tr>
  )
} 