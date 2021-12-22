import styled from "styled-components";
import { layout, space } from "styled-system";

export const Main = styled.main`
  width: 100%;
  max-width: ${p => p.theme.maxWidth}px;
  min-height: 90vh;
  margin: 0 auto;
  padding-bottom: 32px;
  position: relative;
  ${space}
  ${layout}
`;
