import { OptionsStyled, SelectMain } from "./SelectStyled.Styled";

type SelectStyledProps = {
  label: string;
  options: string[];
}

const SelectStyled = ({ label, options }:SelectStyledProps) => {
  return <SelectMain >
    <OptionsStyled value="" disabled selected>{label}</OptionsStyled>
    {options.map((eachOption) => <OptionsStyled>{eachOption}</OptionsStyled>)}
  </SelectMain>
  
  
}

export default SelectStyled;