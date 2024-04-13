import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import service from "../../API/service";

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
    return await service.getData('http://localhost:3001/employees');
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
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<IEmployees>) => {
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