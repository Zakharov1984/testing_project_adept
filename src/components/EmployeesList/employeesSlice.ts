import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Service from "../../API/service";

import { IEmployees, IEmployeesForActive } from '../../types/employeesType'; 


interface IEmployeesInitialState {
  employees: IEmployeesForActive;
  isFirstActivatedCompany: boolean;
  employeesLoadingStatus: 'idle' | 'loading' | 'error';
}

const initialState: IEmployeesInitialState = {
  employees: {},
  isFirstActivatedCompany: false,
  employeesLoadingStatus: 'idle',
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
 
} = actions;