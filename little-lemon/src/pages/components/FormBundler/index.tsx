import { FromBundlerWrapper } from "./FormBundler.styled";

type FormBundlerProps = {
  children:React.ReactNode;
  vertical: boolean;
}

const FormBundler = ({ children, vertical }:FormBundlerProps) => {
  return <FromBundlerWrapper vertical={vertical}>{children}</FromBundlerWrapper>
}

export default FormBundler;