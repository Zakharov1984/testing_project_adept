import { Companies } from '../../components/Companies/Companies';
import { EmployeesList } from '../../components/EmployeesList/EmployeesList';
import st from './Main.module.scss';


export const Main = (): JSX.Element => {
  return (
    <main className={st.companies}>
      <Companies/>
      <EmployeesList/>
    </main>
  )
}