interface IMainButtonProps {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MainButton: React.FC<IMainButtonProps> = ({children, onClick}) => {
  return <button onClick={onClick}>{children}</button>
}