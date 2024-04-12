interface Employee {
  id: string;
  name: string;
  surname: string;
  post: string;
  companyName: string;
}


interface Employees {
  [key: string]: Employee[];
}

interface EmployeesInitialState {
  employees: Employees;
  isFirstActivatedCompany: boolean
}

const initialState: EmployeesInitialState = {
  employees: {},
  isFirstActivatedCompany: false,
}

const employees = (state = initialState, action: any) => {
  switch (action.type) {
    case 'EMPLOYEE_FETCHED':
      return {
        ...state,
        employees: action.payload,
    }
    default: return state;
  }
}

export default employees;