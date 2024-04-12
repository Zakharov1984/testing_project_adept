import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCompanies } from "./companiesSlice";
import type { AppDispatch } from "../../store";

export const CompaniesList = () => {
  const dispatch: AppDispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [])

  return (
    <ul>Компании</ul>
  )
} 