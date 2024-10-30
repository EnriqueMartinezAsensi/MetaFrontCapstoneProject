import { CounterContainer, CounterElement } from "./Counter.styled";

type CounterProps = {
  value: number;
  onChange: (value: number) => void;
}

const Counter = ({value, onChange}:CounterProps) => {
  return <CounterContainer>
    <CounterElement onClick={() => onChange(value+1)}>+</CounterElement>
    <CounterElement>{value}</CounterElement>
    <CounterElement onClick={() => onChange(value-1)}>-</CounterElement>
  </CounterContainer>
}

export default Counter;