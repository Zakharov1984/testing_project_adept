import { useEffect } from 'react';
import st from './Companies.module.scss';
import { useDispatch } from 'react-redux';
import { companiesFetched } from '../../actions';


export const Companies = (): JSX.Element => {

  const dispatch = useDispatch(); 

  useEffect(() => {
    fetch('http://localhost:3001/companies')
      .then(response => response.json())
      .then(data => {
        dispatch(companiesFetched(data));
      })
  }, [])

  return (
    <main className={st.companies}>
      TestPageCompany
    </main>
  )
}