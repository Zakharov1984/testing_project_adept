import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hook";
import { fetchCompanies } from "./companiesSlice";

export const CompaniesList = () => {
  const dispatch = useAppDispatch(); 

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [])

  return (
    <ul>Компании</ul>
  )
} 