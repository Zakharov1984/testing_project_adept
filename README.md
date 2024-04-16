# testing_project_adept

## Важно

- Сотрудника можно добавить только в активные компании.
  Если компании не выбраны Select будет пустым.

- Данные забираются с базы данных и работа с ними ведется только локально(не смог по эндпойнтам достучаться до некоторых данных)(js-server).

- Запуск: npm start

---

## stack

- React
- TypeScript
- Redux toolkit
- scss

---

## Дополнительные библиотеки

- uuid
- classnames

---

## Техническое задание

- Создайте одностраничное приложение “Список компаний”, используя библиотеку React.js.

- Требования: react, redux(redux-toolkit), typescript, остальное на ваше усмотрение, НО стоит использовать минимальное кол-во библиотек(например, таблицу нужно точно сделать самостоятельно, без сторонних библиотек)

- Дано: Слева имеется таблица со списком компаний. Справа - таблица сотрудников выбранной компании. !!!Данные в таблицах должны храниться в сторе.!!!

- Данные для таблиц "компании" и "сотрудники" - фейковые, создать самостоятельно.
- Шапка таблицы "компании": Чекбокс “Выделить всё”

- Тело таблицы имеет столбцы: | Чекбокс | Название компании | Кол-во сотрудников | Адрес
  При клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение. При клике по чекбоксу “Выделить всё” - выделяются все строки.

- При выделении одной компании - справа, в таблице "сотрудники", видим данные сотрудников этой компании.

- Шапка таблицы "сотрудники": Чекбокс “Выделить всё”
  Тело таблицы имеет столбцы: | Чекбокс | Фамилия | Имя | Должность

- В таблице "сотрудники" при клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение.
  Если не выделена ни одна из компаний, то таблица "сотрудники" не видна.

- Все поля таблиц редактируемые кроме счётчика сотрудников в таблице "компании".

- В обеих таблицах реализовать механизм добавления/удаления компаний/сотрудников по соответствующим кнопкам. Удаление может быть множественное(если выделены несколько строк).

- При добавлении/удалении сотрудников у компании, счётчик сотрудников в таблице "компании" обновляется.
---
