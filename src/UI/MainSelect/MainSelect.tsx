import { useState } from "react";

interface IMainSelectProps {
  options: string[];
}

export const MainSelect: React.FC<IMainSelectProps> = ({options}) => {

  const [selectedOption, setSelectedOption] = useState('');

  return (
    <select 
      id="mySelect" 
      name="mySelect"
      value={selectedOption}>
        <option disabled>Выберете компанию для добавления</option>
        {options.map(option => <option value={option}>{option}</option>)}
    </select>
  )
}