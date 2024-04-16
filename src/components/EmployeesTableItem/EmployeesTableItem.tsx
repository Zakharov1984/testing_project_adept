import { IEmployeeForActive } from '../../types/employeesType';
import { useAppDispatch } from '../../hooks/hook';

import { ChangeEvent, useState } from 'react';

import classNames from 'classnames';
import { editField } from '../EmployeesList/employeesSlice';

interface EmployeesTableItem extends IEmployeeForActive {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface IInputsState {
  name: string;
  surname: string;
  post: string;
}

interface IIsEditableFields {
  name: boolean;
  surname: boolean;
  post: boolean;
}

export const EmployeesTableItem: React.FC<EmployeesTableItem> = ({
  id,
  name,
  surname,
  post,
  companyName,
  isActive,
  onChange,
}) => {
  const dispatch = useAppDispatch();

  const [isEditableFields, setIsEditableFields] = useState<IIsEditableFields>({
    name: false,
    surname: false,
    post: false,
  });

  const [inputsValue, setInputsValue] = useState<IInputsState>({
    name,
    surname,
    post,
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputsValue((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleDoubleClick = (
    e: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => {
    setIsEditableFields(state => {
      const field = (e.target as HTMLTableCellElement).dataset.field;
      return {
        ...state,
         [field as keyof IIsEditableFields]: true,
      };
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEditableFields(state => ({...state, [e.target.name]: false}));
    const data = {
      id: e.target.dataset.id || '',
      companyName: e.target.dataset.companyname || '',
      field: e.target.name,
      value: e.target.value,
    }
    dispatch(editField(data));
  }

  return (
    <tr className={classNames({ active: isActive })}>
      <td>
        <input
          type="checkbox"
          name={companyName}
          value={id}
          checked={isActive}
          onChange={onChange}
        />
      </td>
      <td 
        data-field="surname" 
        onDoubleClick={handleDoubleClick}>
          {
            !isEditableFields.surname ?
            surname : 
            <input
              data-id={id}
              data-companyname={companyName}
              type='text'
              name='surname' 
              value={inputsValue.surname}
              onChange={handleChangeInput}
              onBlur={handleBlur}
              autoFocus/>
          }
      </td>
      <td 
        data-field="name"
        onDoubleClick={handleDoubleClick}>
          {
            !isEditableFields.name ?
            name : 
            <input
              data-id={id}
              data-companyname={companyName}
              type='text'
              name='name' 
              value={inputsValue.name}
              onChange={handleChangeInput}
              onBlur={handleBlur}
              autoFocus/>
          }
      </td>
      <td 
        data-field="post"
        onDoubleClick={handleDoubleClick}>
          {
            !isEditableFields.post ?
            post : 
            <input
              data-id={id}
              data-companyname={companyName}
              type='text'
              name='post' 
              value={inputsValue.post}
              onChange={handleChangeInput}
              onBlur={handleBlur}
              autoFocus/>
          }
      </td>
    </tr>
  );
};
