import { ButtonWrapper } from "./Button.styled";

type ButtonProps = {
  label: string;
  disabled: boolean;
  handleClick: () => React.MouseEventHandler<HTMLDivElement>;
}

const Button = ({label, disabled, handleClick}:ButtonProps) => {
  return <ButtonWrapper disabled={disabled} onClick={handleClick}>
    {label}
  </ButtonWrapper>
}

export default Button;