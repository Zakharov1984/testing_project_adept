interface IMainButtonProps {
  children: string;
}

export const MainButton: React.FC<IMainButtonProps> = ({children}) => {
  return <button>{children}</button>
}