import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Service from "../../API/service";

import { IEmployeeForActive, IEmployees, IEmployeesForActive } from '../../types/employeesType'; 


interface IEmployeesInitialState {
  employees: IEmployeesForActive;
  isFirstActivatedCompany: boolean;
  employeesLoadingStatus: 'idle' | 'loading' | 'error';
  isActiveAllEmployees: boolean;
}

const initialState: IEmployeesInitialState = {
  employees: {},
  isFirstActivatedCompany: false,
  employeesLoadingStatus: 'idle',
  isActiveAllEmployees: false
}

interface IToggleActivePayload {
  companyName: string;
  employeeId: string;
}

interface IToggleAllActiveEmployeesPayload {
  companyName: string
  isAllActiveEmployees: boolean,
}

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const instanceS = new Service();
    return await instanceS.getAllEmployees();
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    toggleActiveEmployee: (state, action: {type: string, payload: IToggleActivePayload}) => {
      state.employees[action.payload.companyName].map(employee => {
        if (employee.id === action.payload.employeeId) {
          employee.isActive = !employee.isActive;
        }
      })
    },
    toggleAllActiveEmployees: (state, action: {type: string, payload: IToggleAllActiveEmployeesPayload}) => {
      state.employees[action.payload.companyName].forEach(employee => {
        if (action.payload.isAllActiveEmployees) {
          employee.isActive = true
        } else {
          employee.isActive = false;
        }
      })
    },
    addEmployee: (state, action: {type: string, payload: IEmployeeForActive}) => {
      if (action.payload.companyName !== 'Выберете компанию для добавления') {
        state.employees[action.payload.companyName].push(action.payload);
      }      
    },
    addCompanyInEmployees: (state, action: {type: string, payload: string}) => {
      state.employees[action.payload] = [];
    }
  },
  extraReducers: (builder => {
    builder
      .addCase(fetchEmployees.pending, state => {state.employeesLoadingStatus = 'loading'})
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<IEmployeesForActive>) => {
        state.employees = action.payload;
        state.employeesLoadingStatus = 'idle';
      })
      .addCase(fetchEmployees.rejected, state => {
        state.employeesLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  })
});

const {actions, reducer} =  employeesSlice;

export default reducer;

export const {
  toggleActiveEmployee,
  toggleAllActiveEmployees,
  addEmployee,
  addCompanyInEmployees,
} = actions;