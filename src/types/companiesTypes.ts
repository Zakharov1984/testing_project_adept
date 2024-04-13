export interface ICompanies {
  id: string;
  name: string;
  address: string;
  employeeCounter: number;
}

export interface ICompaniesForActive extends ICompanies {
  active: boolean;
}