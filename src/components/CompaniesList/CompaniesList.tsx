import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { companiesFetched } from "./companiesSlice";


export const CompaniesList = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    fetch('http://localhost:3001/companies')
      .then(response => response.json())
      .then(data => {
        dispatch(companiesFetched(data));
      })
  }, [])

  return (
    <ul>Компании</ul>
  )
} 