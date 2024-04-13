import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { fetchCompanies } from './companiesSlice';

import st from './CompaniesList.module.scss';
import { TableItem } from '../TableItem/TableItem';

export const CompaniesList = () => {
  const dispatch = useAppDispatch();
  const { companies, companiesLoadingStatus } = useAppSelector(
    (state) => state.companies
  );

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return (
    <table className={st.companiesTable}>
      <caption>
        <label>
          Выделить все
          <input 
            type="checkbox"
            name="allCompanies"/>
        </label>
      </caption>
      <thead>
        <td>Чекбокс</td>
        <td>Компания</td>
        <td>Количество сотрудников</td>
        <td>Адрес</td>
      </thead>
      <tbody>
        {companies.map(company => <TableItem key={company.id} {...company}/>)}
      </tbody>
    </table>
  );
};
