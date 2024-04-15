import { useEffect } from 'react';

import { EmployeesList } from '../EmployeesList/EmployeesList';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { fetchEmployees } from '../EmployeesList/employeesSlice';

export const Employees = () => {
  const dispatch = useAppDispatch();
  const {activeCompanies} = useAppSelector(state => state.companies)

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [])

  return (
    <section className="employees">
      {activeCompanies.map(
        activeCompany => <EmployeesList key={activeCompany} companyName={activeCompany}/> 
      )}
    </section>
  )
}