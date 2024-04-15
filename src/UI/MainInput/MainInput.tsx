
interface IMainInputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const MainInput: React.FC<IMainInputProps> = ({
  type, 
  name, 
  value, 
  placeholder = '',
  onChange,
}) => {
  return <input 
    type={type}
    name={name} 
    value={value}
    placeholder={placeholder}
    onChange={onChange}/>
}