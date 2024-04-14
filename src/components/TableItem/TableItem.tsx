import { ChangeEvent, useState } from "react"
import { ICompaniesForActiveEditable } from "../../types/companiesTypes"
import { useAppDispatch } from "../../hooks/hook";

import classNames from 'classnames';

import { editField } from "../CompaniesList/companiesSlice";

import st from './TableItem.module.scss';


interface ITableItem extends ICompaniesForActiveEditable {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEditField: () => void;
}

export const TableItem: React.FC<ITableItem> = ({
  id, 
  name, 
  address, 
  employeeCounter, 
  isActive,
  isEditable, 
  handleChange,
  handleEditField,
}) => {
  const dispatch = useAppDispatch();

  const [isEditableCompanyName, setIsEditableCompanyName] = useState<boolean>(false);
  const [isEditableAddress, setIsEditableAddress] = useState<boolean>(false);

  const [inputsValue, setInputsValue] = useState<{name: string, address: string}>({
    name,
    address, 
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputsValue(state => ({...state, [e.target.name]: e.target.value}))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') {
      setIsEditableCompanyName(false);
    } else {
      setIsEditableAddress(false);
    }
    const name = e.target.name;
    const id = e.target.dataset.id || '';
    const value = e.target.value;
    dispatch(editField({name, id, value}));
  }
  
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

      <td onDoubleClick={() => {
        setIsEditableCompanyName(true);
      }}>
        {!isEditableCompanyName ?
        name : 
        <input
          data-id={id}
          type='text'
          name='name' 
          value={inputsValue.name}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          autoFocus
        />}
      </td>

      <td>{employeeCounter}</td>

      <td onDoubleClick={() => {
        setIsEditableAddress(true);
      }}>
        {!isEditableAddress ?
        address : 
        <input
          data-id={id}
          type='text'
          name='address'
          value={inputsValue.address}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          autoFocus
        />}
      </td>
    </tr>
  )
} 