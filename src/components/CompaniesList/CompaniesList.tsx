import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { fetchCompanies } from './companiesSlice';

import st from './CompaniesList.module.scss';

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
      <caption>Чекбокс выделить все</caption>
      <thead>
        <td>Чекбокс</td>
        <td>Компания</td>
        <td>Количество сотрудников</td>
        <td>Адрес</td>
      </thead>
      <tbody>
        <tr>
          <td>чек</td>
          <td>Компания 1</td>
          <td>9</td>
          <td>asdfsafsafsafasf</td>
        </tr>
      </tbody>
    </table>
  );
};
