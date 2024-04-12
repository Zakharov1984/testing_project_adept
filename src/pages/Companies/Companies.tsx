import { CompaniesList } from '../../components/CompaniesList/CompaniesList';
import { EmployeesList } from '../../components/EmployeesList/EmployeesList';
import st from './Companies.module.scss';


export const Companies = (): JSX.Element => {
  return (
    <main className={st.companies}>
      <CompaniesList/>
      <EmployeesList/>
    </main>
  )
}