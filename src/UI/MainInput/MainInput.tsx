
interface IMainInputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
}

export const MainInput: React.FC<IMainInputProps> = ({
  type, 
  name, 
  value, 
  placeholder = ''
}) => {
  return <input 
    type={type}
    name={name} 
    value={value}
    placeholder={placeholder}/>
}