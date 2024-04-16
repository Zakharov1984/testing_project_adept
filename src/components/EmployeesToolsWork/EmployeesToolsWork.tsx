import { MainButton } from "../../UI/MainButton/MainButton";
import { MainInput } from "../../UI/MainInput/MainInput";
import { MainSeparator } from "../../UI/MainSeparator/MainSeparator";
import { MainSelect } from "../../UI/MainSelect/MainSelect";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { addEmployee, deleteEmployees } from "../EmployeesList/employeesSlice";
import { IEmployeeForActive } from "../../types/employeesType";

import { useState } from "react"

import { v4 as uuidv4 } from 'uuid';

import st from './EmployeesToolsWork.module.scss';


interface IInputsState {
  name: string; 
  surname: string; 
  post: string;
  companyName: string;
}

export const EmployeesToolsWork = () => {
  const dispatch = useAppDispatch();
  const {activeCompanies} = useAppSelector(state => state.companies);

  const [inputsValue, setInputsValue] = useState<IInputsState>({
    name: '',
    surname: '',
    post: '',
    companyName: 'Выберете компанию для добавления'
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputsValue(state => ({...state, [e.target.name]: e.target.value}))
  }

  const handleAddEmployee = () => {
    const newEmployee: IEmployeeForActive = {
      id: uuidv4(),
      isActive: false,
      ...inputsValue,
    }
    setInputsValue({
      name: '', 
      surname: '', 
      post: '', 
      companyName: 'Выберете компанию для добавления',
    });
    dispatch(addEmployee(newEmployee));
  }

  const handleDeleteEmployees = () => {
    dispatch(deleteEmployees());
  }

  return ( 
    <div className={st.toolsEmployees}>
      <h2 className={st.toolsEmployees__title}>Инструменты для работы с таблицей 'Сотрудники'</h2>
      <section className={st.toolsEmployees__add}>
        <MainInput
          className={st.toolsEmployees__inp}
          type="text"
          name="name"
          placeholder="Имя сотрудника"
          value={inputsValue.name}
          onChange={handleChangeInput}
          />
        <MainInput
          className={st.toolsEmployees__inp}
          type="text"
          name="surname"
          placeholder="Фамилия сотрудника"
          value={inputsValue.surname}
          onChange={handleChangeInput}
          />
        <MainInput
          className={st.toolsEmployees__inp}
          type="text"
          name="post"
          placeholder="Должность сотрудника"
          value={inputsValue.post}
          onChange={handleChangeInput}
          />
        <select 
            name="companyName"
            value={inputsValue.companyName}
            onChange={handleChangeInput}>
            <option disabled>Выберете компанию для добавления</option>
            {activeCompanies.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <MainButton
          onClick={handleAddEmployee}>
            Добавить сотрудника
        </MainButton>
      </section>
      <MainSeparator/>
      <section className="tools__delete">
        <MainButton
          onClick={handleDeleteEmployees}>
            Удалить выбранных сотрудников
        </MainButton>
      </section>
    </div>
  )
}




