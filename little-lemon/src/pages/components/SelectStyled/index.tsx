import { OptionsStyled, SelectMain } from "./SelectStyled.Styled";

type SelectStyledProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  label: string;
  options: string[];
};

const SelectStyled = ({ value, onChange, label, options }: SelectStyledProps) => {
  return (
    <SelectMain value={value} onChange={onChange} defaultValue={label}>
      <OptionsStyled disabled>
        {label}
      </OptionsStyled>
      {options.map((eachOption) => (
        <OptionsStyled key={eachOption}>{eachOption}</OptionsStyled>
      ))}
    </SelectMain>
  );
};

export default SelectStyled;
