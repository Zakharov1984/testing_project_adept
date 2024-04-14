import { MainInput} from "../../UI/MainInput/MainInput";
import { MainButton } from "../../UI/MainButton/MainButton";

interface IToolsWorkProps {
  type: string;
}

export const ToolsWork: React.FC<IToolsWorkProps> = ({type}) => {
  return (
    type === 'companies' ?
      <div className="tools">
        <h2 className="tools__title">Инструменты для работы с таблицей 'Компании'</h2>
        <section className="tools__add">
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
        </section>
        <section className="tools__delete">
          <button>Удалить выбранные компании</button>
        </section>
      </div>

    : <div className="tools">
        <h2 className="tools__title">Инструменты для работы с таблицей 'Сотрудники'</h2>
        <section className="tools__add">
          <MainInput
            type="text"
            name="name"
            value="value"
            placeholder="Имя сотрудника"/>
          <MainInput
            type="text"
            name="surname"
            value="value"
            placeholder="Фамилия сотрудника"/>
          <MainInput
            type="text"
            name="post"
            value="value"
            placeholder="Должность сотрудника"/>
        </section>
        <section className="tools__delete">
          <button>Удалить выбранных сотрудников</button>
        </section>
      </div>
  )  
  
}