import { CompaniesList } from '../CompaniesList/CompaniesList';
import { CompaniesToolsWork } from '../CompaniesToolsWork/CompaniesToolsWork';

import st from './Companies.module.scss';

export const Companies = () => {
  return (
    <section className={st.companies}>
      <CompaniesToolsWork type='companies'/>
      <CompaniesList/>
    </section>
  )
}