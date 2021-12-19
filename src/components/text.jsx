import styled from "styled-components";
import { typography, color, space, layout } from "styled-system";
import { cssFlexbox } from "../app/custom-properties";

export const Text = ({ left, right, t, children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {left}
      {t}
      {children}
      {right}
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: flex;
  cursor: ${p => (p.onClick ? "pointer" : "default")};
  ${space}
  ${color}
  ${typography}
  ${cssFlexbox}
  ${layout}
`;
