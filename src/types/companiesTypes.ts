export interface ICompanies {
  id: string;
  name: string;
  address: string;
  employeeCounter: number;
}

export interface ICompaniesForActiveEditable extends ICompanies {
  isActive: boolean;
  isEditable: boolean;
}