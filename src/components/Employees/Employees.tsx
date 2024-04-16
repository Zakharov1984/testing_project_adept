import { ChangeEvent, useEffect } from 'react';

import { EmployeesList } from '../EmployeesList/EmployeesList';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { fetchEmployees, toggleActiveEmployee, toggleAllActiveEmployees } from '../EmployeesList/employeesSlice';
import { EmployeesToolsWork } from '../EmployeesToolsWork/EmployeesToolsWork';

export const Employees = () => {
  const dispatch = useAppDispatch();
  const {activeCompanies} = useAppSelector(state => state.companies);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [])

  const handleChangeAllCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    const data = {
      companyName: event.target.value,
      isAllActiveEmployees: event.target.checked,
    }
    dispatch(toggleAllActiveEmployees(data));
  }

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const data = {
      companyName: event.target.name,
      employeeId: event.target.value,
    }
    dispatch(toggleActiveEmployee(data));
  }

  return (
    <section className="employees">
      {
        activeCompanies.length ? <EmployeesToolsWork/> : ''
      }
      {activeCompanies.map(
        activeCompany => <EmployeesList 
          key={activeCompany} 
          companyName={activeCompany} 
          onChangeAllCheckBox={handleChangeAllCheckBox}
          onChangeCheckBox={handleChangeCheckbox}/> 
      )}
    </section>
  )
}