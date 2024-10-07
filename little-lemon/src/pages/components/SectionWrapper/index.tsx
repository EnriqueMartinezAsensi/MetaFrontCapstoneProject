import React from "react";
import { Section, Wrapper } from "./SectionWrapper.styled";

type SectionContainerProps = {
  children:React.ReactNode;
  background: "light" | "dark";
}

const SectionWrapper = ({children, background}:SectionContainerProps) => {
  return <Wrapper bgColor={background}>
    <Section>
      {children}
    </Section>
  </Wrapper>
}

export default SectionWrapper;