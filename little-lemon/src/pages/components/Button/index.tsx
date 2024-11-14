import { ButtonWrapper } from "./Button.styled";

type ButtonProps = {
  className?: string;
  label: string;
  disabled: boolean;
  handleClick: () => void;
};

const Button = ({ className, label, disabled, handleClick }: ButtonProps) => {
  return (
    <ButtonWrapper disabled={disabled} onClick={handleClick} className={className}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;
