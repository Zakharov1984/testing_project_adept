import { CompaniesList } from '../CompaniesList/CompaniesList';
import { CompaniesToolsWork } from '../CompaniesToolsWork/CompaniesToolsWork';

export const Companies = () => {
  return (
    <section className="companies">
      <CompaniesToolsWork/>
      <CompaniesList/>
    </section>
  )
}