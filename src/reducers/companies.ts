import { createReducer } from "@reduxjs/toolkit";
import { companiesFetching, companiesFetched, companiesFetchingError } from "../actions";

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

const companies = createReducer(initialState, builder => {
  builder
    .addCase(companiesFetching, state => {
      state.companiesLoadingStatus = 'loading';
    })
    .addCase(companiesFetched, (state, action: any) => {
      state.companies = action.payload;
      state.companiesLoadingStatus = 'idle';
    })
    .addCase(companiesFetchingError, state => {
      state.companiesLoadingStatus = 'error';
    })
    .addDefaultCase(() => {});
})

export default companies;