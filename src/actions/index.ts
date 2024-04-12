import { createAction } from "@reduxjs/toolkit";

export const companiesFetching = createAction('COMPANIES_FETCHING');

export const companiesFetched = createAction('COMPANIES_FETCHED');

export const companiesFetchingError = createAction('COMPANIES_FETCHING_ERROR');


export const employeesFetching = createAction('EMPLOYEE_FETCHING');

export const employeesFetched = createAction('EMPLOYEE_FETCHED');

export const employeesFetchingError = createAction('EMPLOYEE_FETCHING_ERROR');