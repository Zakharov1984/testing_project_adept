import { useEffect } from 'react';

import { EmployeesList } from '../EmployeesList/EmployeesList';
import { useAppDispatch } from '../../hooks/hook';
import { fetchEmployees } from '../EmployeesList/employeesSlice';

export const Employees = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [])

  return (
    <section className="employees">
      <EmployeesList/>
    </section>
  )
}