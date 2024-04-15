export interface ICompany {
  id: string;
  name: string;
  address: string;
  employeeCounter: number;
}

export interface ICompanyForActive extends ICompany {
  isActive: boolean;
}