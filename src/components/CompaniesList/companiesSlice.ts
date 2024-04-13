import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import service from "../../API/service";

import type { ICompanies } from '../../types/companiesTypes';

interface ICompaniesInitialState {
  companies: ICompanies[];
  companiesLoadingStatus: 'idle' | 'loading' | 'error';
}

const initialState: ICompaniesInitialState = {
  companies: [],
  companiesLoadingStatus: 'idle',
}

export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async () => {
    return await service.getData('http://localhost:3001/companies');
  }
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder => {
    builder
      .addCase(fetchCompanies.pending, state => {state.companiesLoadingStatus = 'loading'})
      .addCase(fetchCompanies.fulfilled, (state, action: PayloadAction<ICompanies[]>) => {
        state.companies = action.payload;
        state.companiesLoadingStatus = 'idle';
      })
      .addCase(fetchCompanies.rejected, state => {
        state.companiesLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  })
});

const {actions, reducer} =  companiesSlice;

export default reducer;

export const {

} = actions;