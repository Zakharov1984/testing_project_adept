import { MainInput } from "../../UI/MainInput/MainInput"


export const EmployeesToolsWork = () => {
  return (
    <div className="tools">
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