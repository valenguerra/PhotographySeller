import styled from "styled-components";
import { layout, position, space } from "styled-system";
import { cssFlexbox } from "../util/custom-properties";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${cssFlexbox}
  ${position}
  ${layout}
  ${space}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  ${cssFlexbox}
  ${position}
  ${layout}
  ${space}
`;