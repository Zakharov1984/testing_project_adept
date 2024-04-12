import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ICompanies {
  id: string;
  name: string;
  address: string;
  employeeCounter: number;
}

interface ICompaniesInitialState {
  companies: ICompanies[];
  companiesLoadingStatus: string;
}

const initialState: ICompaniesInitialState = {
  companies: [],
  companiesLoadingStatus: 'idle',
}

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    companiesFetching: state => {state.companiesLoadingStatus = 'loading'},
    companiesFetched: (state, action: any) => {
      state.companies = action.payload;
      state.companiesLoadingStatus = 'idle';
    },
    companiesFetchingError: state => {
      state.companiesLoadingStatus = 'error';
    }
  }
});

const {actions, reducer} =  companiesSlice;

export default reducer;

export const {
  companiesFetching, 
  companiesFetched, 
  companiesFetchingError
} = actions;