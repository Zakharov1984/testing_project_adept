import { configureStore } from "@reduxjs/toolkit";
import companies from "../reducers/companies";
import employees from "../reducers/employees";

const store = configureStore({
  reducer: {
    companies,
    employees,
  },
  devTools: process.env.NODE_ENV !== 'production', 
})

export default store;

//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;