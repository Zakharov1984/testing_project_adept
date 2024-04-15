import { MainInput} from "../../UI/MainInput/MainInput";
import { MainButton } from "../../UI/MainButton/MainButton";
import { MainSeparator } from "../../UI/MainSeparator/MainSeparator";
import { useAppDispatch } from "../../hooks/hook";
import { addCompany } from "../CompaniesList/companiesSlice";
import type { ICompanyForActive } from "../../types/companiesTypes";

import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import st from './CompaniesToolsWork.module.scss';

interface IToolsWorkProps {
  type: string;
}

export const CompaniesToolsWork: React.FC<IToolsWorkProps> = ({type}) => {

  const dispatch = useAppDispatch();

  const [inputsValue, setInputsValue] = useState<{name: string, address: string}>({
    name: '',
    address: '', 
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputsValue(state => ({...state, [e.target.name]: e.target.value}))
  }

  const handleAddCompany = () => {
    const newCompany: ICompanyForActive = {
      id: uuidv4(),
      employeeCounter: 0,
      isActive: false,
      ...inputsValue,
    }
    setInputsValue({name: '', address: ''});
    dispatch(addCompany(newCompany));
  }

  return (
      <div className={st.tools}>
        <h2 className={st.tools__title}>Инструменты для работы с таблицей 'Компании'</h2>
        <section className={st.tools__add}>
          <MainInput
            type="text"
            name="name"
            value={inputsValue.name}
            placeholder="Название Компании"
            onChange={handleChangeInput}/>
          <MainInput
            type="text"
            name="address"
            value={inputsValue.address}
            placeholder="Адрес компании"
            onChange={handleChangeInput}/>
          <MainButton onClick={handleAddCompany}>
            Добавить Компанию
          </MainButton>
        </section>
        <MainSeparator/>
        <section className="tools__delete">
          <MainButton>Удалить выбранные компании</MainButton>
        </section>
      </div>
  )   
}