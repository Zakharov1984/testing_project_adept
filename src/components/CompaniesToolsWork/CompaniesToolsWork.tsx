import { MainInput} from "../../UI/MainInput/MainInput";
import { MainButton } from "../../UI/MainButton/MainButton";

import st from './CompaniesToolsWork.module.scss';

interface IToolsWorkProps {
  type: string;
}

export const CompaniesToolsWork: React.FC<IToolsWorkProps> = ({type}) => {
  return (
      <div className={st.tools}>
        <h2 className={st.tools__title}>Инструменты для работы с таблицей 'Компании'</h2>
        <section className={st.tools__add}>
          <MainInput
            type="text"
            name="name"
            value="value"
            placeholder="Название Компании"/>
          <MainInput
            type="text"
            name="address"
            value="value"
            placeholder="Адрес компании"/>
          <MainButton>
            Добавить Компанию
          </MainButton>
        </section>
        <section className="tools__delete">
          <MainButton>Удалить выбранные компании</MainButton>
        </section>
      </div>
  )  
  
}