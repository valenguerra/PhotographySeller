import styled from "styled-components";
import { color, layout, position, space, border } from "styled-system";
import { cssFlexbox } from "../util/custom-properties";

export const Box = styled.div`
  ${cssFlexbox}
  ${position}
  ${layout}
  ${space}
  ${color}
  ${border}
`;
