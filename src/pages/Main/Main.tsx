import { Companies } from '../../components/Companies/Companies';
import { Employees } from '../../components/Employees/Employees';
import st from './Main.module.scss';


export const Main = (): JSX.Element => {
  return (
    <main className={st.main}>
      <Companies/>
      <Employees/>
    </main>
  )
}