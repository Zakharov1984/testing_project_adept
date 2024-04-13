import { ICompanies, ICompaniesForActive } from "../types/companiesTypes";
import { IEmployeesForActive, IEmployees } from "../types/employeesType";

type methodRequest = 'GET' | 'POST' | 'DELETE' | 'PUT';

export default class Service {
  public apiBase = 'http://localhost:3001/' as const;

  public async getData(
    url: string, 
    method: methodRequest = 'GET', 
    body: null | string = null, 
    headers = {'Content-Type': 'application/json'}) {
      try {
        const response = await fetch(url, {method, body, headers});

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch(e) {
        throw e;
      }
  }

  public async getAllCompanies() {
    const res: ICompanies[] = await this.getData(`${this.apiBase}companies`);
    console.log(res.map(this.transformCompanies));
    return res.map(this.transformCompanies);
  }

  public async getAllEmployees() {
    const res: IEmployees = await this.getData(`${this.apiBase}employees`);
    return this.transformEmployees(res);
  }

  public transformCompanies(company: ICompanies): ICompaniesForActive {
    return {
      ...company,
      active: false,
    }
  }

  public transformEmployees(employees: IEmployees): IEmployeesForActive {
    for (let key in employees) {
      employees[key] = employees[key].map(employee => {
        return {
          ...employee,
          active: false,
        }
      })
    }
    return employees as IEmployeesForActive;
  }
}