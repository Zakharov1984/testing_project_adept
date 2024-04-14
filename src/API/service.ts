import { ICompanies, ICompaniesForActiveEditable } from "../types/companiesTypes";
import { IEmployeesForActive, IEmployees } from "../types/employeesType";

type methodRequest = 'GET' | 'POST' | 'DELETE' | 'PUT';

export default class Service {
  private apiBase = 'http://localhost:3001' as const;

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
      } catch(error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
  }

  public async getAllCompanies() {
    const res: ICompanies[] = await this.getData(`${this.apiBase}/companies`);
    console.log(res.map(this.transformCompanies));
    return res.map(this.transformCompanies);
  }

  public async getAllEmployees() {
    const res: IEmployees = await this.getData(`${this.apiBase}/employees`);
    console.log(res);
    return this.transformEmployees(res);
  }

  public transformCompanies(company: ICompanies): ICompaniesForActiveEditable {
    return {
      ...company,
      isActive: false,
      isEditable: false,
    }
  }

  public transformEmployees(employees: IEmployees): IEmployeesForActive {
    for (const key in employees) {
      employees[key] = employees[key].map(employee => {
        return {
          ...employee,
          isActive: false,
        }
      })
    }
    return employees as IEmployeesForActive;
  }
}