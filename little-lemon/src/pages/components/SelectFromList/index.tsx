import { SelectableItem, SelectFromListWrapper } from "./SelectFromList.styled";

type SelectFromListProps = {
  options: string[];
  value: string;
  onChange: (element: string) => void;
}

const SelectFromList = ({ options, value, onChange }: SelectFromListProps) => {
  return <SelectFromListWrapper>
    {options.map((eachOption) => 
      <SelectableItem 
          onClick={() => {onChange(eachOption)}} 
          key={eachOption}
          $active={value === eachOption}
      >
      {eachOption}
      </SelectableItem>)
    }
  </SelectFromListWrapper>
}

export default SelectFromList;