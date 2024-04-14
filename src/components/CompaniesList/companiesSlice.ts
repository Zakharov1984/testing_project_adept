import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Service from "../../API/service";

import type { ICompaniesForActiveEditable } from '../../types/companiesTypes';

interface ICompaniesInitialState {
  companies: ICompaniesForActiveEditable[];
  companiesLoadingStatus: 'idle' | 'loading' | 'error';
  isActiveAllCompanies: boolean;
}

const initialState: ICompaniesInitialState = {
  companies: [],
  companiesLoadingStatus: 'idle',
  isActiveAllCompanies: false,
}

export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async () => {
    const instanceS = new Service();
    return await instanceS.getAllCompanies();
  }
)

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    toggleActive: (state, action: {type: string, payload: string}) => {
      state.companies.forEach(company => {
        if (company.id === action.payload) {
          company.isActive = !company.isActive;
        }
      })
    },
    toggleAllActive: (state, action: {type: string, payload: boolean}) => {
      state.isActiveAllCompanies = action.payload;
      if (state.isActiveAllCompanies) {
        state.companies.forEach(company => {
          company.isActive =  true;
        });
      } else {
        state.companies.forEach(company => {
          company.isActive =  false;
        });
      }
    },
    editField: (state, action: {type: string, payload: {name: string, id: string, value: string}}) => {
      state.companies.forEach(company => {
        if (company.id === action.payload.id) {
          action.payload.name === 'name' ? 
          company.name = action.payload.value :
          company.address = action.payload.value;
        }
      })
    },
  },
  extraReducers: (builder => {
    builder
      .addCase(fetchCompanies.pending, state => {state.companiesLoadingStatus = 'loading'})
      .addCase(fetchCompanies.fulfilled, (state, action: PayloadAction<ICompaniesForActiveEditable[]>) => {
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
  toggleActive,
  toggleAllActive,
  editField,
} = actions;