import { configureStore } from "@reduxjs/toolkit";
import companies from "../components/CompaniesList/companiesSlice";
import employees from "../components/EmployeesList/employeesSlice";

const store = configureStore({
  reducer: {
    companies,
    employees,
  },
  devTools: process.env.NODE_ENV !== 'production', 
})

export default store;

//export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;