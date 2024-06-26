import { ChangeEvent, useState } from "react"
import { ICompanyForActive } from "../../types/companiesTypes"
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

import classNames from 'classnames';

import { editField } from "../CompaniesList/companiesSlice";

interface ICompaniesTableItem extends ICompanyForActive {
  handleChangeCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CompaniesTableItem: React.FC<ICompaniesTableItem> = ({
  id, 
  name, 
  address, 
  employeeCounter, 
  isActive,
  handleChangeCheckbox,
}) => {
  const dispatch = useAppDispatch();
  const {employees} = useAppSelector(state => state.employees);

  const counter = employees?.[name]?.length ?? 0;

  const [isEditableCompanyName, setIsEditableCompanyName] = useState<boolean>(false);
  const [isEditableAddress, setIsEditableAddress] = useState<boolean>(false);

  const [inputsValue, setInputsValue] = useState<{name: string, address: string}>({
    name,
    address, 
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputsValue(state => ({...state, [e.target.name]: e.target.value}));
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
    <tr className={classNames({'active': isActive})}>
      <td>
        <input 
          type="checkbox"
          name="companies"
          value={id}
          checked={isActive}
          onChange={handleChangeCheckbox}/>
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

      <td>{counter}</td>

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