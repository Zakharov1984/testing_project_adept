import { createSlice } from "@reduxjs/toolkit";

interface IEmployee {
  id: string;
  name: string;
  surname: string;
  post: string;
  companyName: string;
}

interface IEmployees {
  [key: string]: IEmployee[];
}

interface IEmployeesInitialState {
  employees: IEmployees;
  isFirstActivatedCompany: boolean,
  employeesLoadingStatus: string
}

const initialState: IEmployeesInitialState = {
  employees: {},
  isFirstActivatedCompany: false,
  employeesLoadingStatus: 'idle',
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    employeesFetching: state => {state.employeesLoadingStatus = 'loading';},
    employeesFetched: (state, action: any) => {
      state.employees = action.payload;
      state.employeesLoadingStatus = 'idle';
    },
    employeesFetchingError: state => {
      state.employeesLoadingStatus = 'error';
    },
    
  }
});

const {actions, reducer} =  employeesSlice;

export default reducer;

export const {
  employeesFetching, 
  employeesFetched, 
  employeesFetchingError
} = actions;