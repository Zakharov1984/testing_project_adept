export interface IEmployee {
  id: string;
  name: string;
  surname: string;
  post: string;
  companyName: string;
}


export interface IEmployees {
  [key: string]: IEmployee[];
}

export interface IEmployeeForActive extends IEmployee {
  isActive: boolean;
}

export interface IEmployeesForActive {
  [key: string]: IEmployeeForActive[];
}

