import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { ChangeEvent } from 'react';

import { addActiveCompanies, fetchCompanies, toggleActive, toggleAllActive } from './companiesSlice';
import { CompaniesTableItem } from '../CompaniesTableItem/CompaniesTableItem';
import { Spinner } from '../../UI/Spinner/Spinner';


export const CompaniesList = () => {
  const dispatch = useAppDispatch();
  const { companies, 
          companiesLoadingStatus, 
          isActiveAllCompanies } = useAppSelector(
    (state) => state.companies
  );

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleActive(event.target.value));
    dispatch(addActiveCompanies());
  };

  const handleChangeAllCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleAllActive(event.target.checked));
    dispatch(addActiveCompanies());
  }

  if (companiesLoadingStatus === 'loading') {
    return <Spinner/>
  } else if (companiesLoadingStatus === 'error') {
    return <h2>Произошла ошибка загрузки данных</h2>
  }

  return (
    <table className='bg-table'>
      <caption>
        <label>
          Выделить все
          <input
            className="chbCenter" 
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
        {companies.map(
          company => <CompaniesTableItem 
            key={company.id} 
            {...company} 
            handleChangeCheckbox={handleChangeCheckbox}/>
        )}
      </tbody>
    </table>
  );
};
