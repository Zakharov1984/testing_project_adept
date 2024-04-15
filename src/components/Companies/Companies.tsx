import { CompaniesList } from '../CompaniesList/CompaniesList';
import { ToolsWork } from '../CompaniesToolsWork/CompaniesToolsWork';

import st from './Companies.module.scss';

export const Companies = () => {
  return (
    <section className={st.companies}>
      <ToolsWork type='companies'/>
      <CompaniesList/>
    </section>
  )
}