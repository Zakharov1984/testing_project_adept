import { createReducer } from "@reduxjs/toolkit";
import { employeesFetching, employeesFetched, employeesFetchingError } from "../actions";

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

const employees = createReducer(initialState, builder => {
  builder
    .addCase(employeesFetching, state => {
      state.employeesLoadingStatus = 'loading';
    })
    .addCase(employeesFetched, (state, action: any) => {
      state.employees = action.payload;
      state.employeesLoadingStatus = 'idle';
    })
    .addCase(employeesFetchingError, state => {
      state.employeesLoadingStatus = 'error';
    })
    .addDefaultCase(() => {});
})

export default employees;