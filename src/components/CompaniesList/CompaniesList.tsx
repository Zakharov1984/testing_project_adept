import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { ChangeEvent } from 'react';

import { fetchCompanies } from './companiesSlice';
import { TableItem } from '../TableItem/TableItem';
import { toggleActive, toggleAllActive } from './companiesSlice';

import st from './CompaniesList.module.scss';


export const CompaniesList = () => {
  const dispatch = useAppDispatch();
  const { companies, companiesLoadingStatus, isActiveAllCompanies } = useAppSelector(
    (state) => state.companies
  );

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleActive(event.target.value));
  };

  const handleChangeAllCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleAllActive(event.target.checked));
  }

  return (
    <table className={st.companiesTable}>
      <caption>
        <label>
          Выделить все
          <input
            className={st.chbCenter} 
            type="checkbox"
            name="allCompanies"
            checked={isActiveAllCompanies}
            onChange={handleChangeAllCheckBox}/>
        </label>
      </caption>
      <thead>
        <tr>
          <td>Чекбокс</td>
          <td>Компания</td>
          <td>Количество сотрудников</td>
          <td>Адрес</td>
        </tr>
      </thead>
      <tbody>
        {companies.map(company => <TableItem key={company.id} {...company} handleChange={handleChangeCheckbox}/>)}
      </tbody>
    </table>
  );
};
