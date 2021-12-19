import styled from "styled-components";
import { color, layout, position, space, border, shadow, grid } from "styled-system";
import { cssFlexbox } from "../app/custom-properties";

export const Box = styled.div`
  ${cssFlexbox}
  ${position}
  ${layout}
  ${space}
  ${color}
  ${border}
  ${shadow}
  ${grid}
`;
