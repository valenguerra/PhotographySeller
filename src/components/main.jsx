import styled from "styled-components";
import { space } from "styled-system";

export const Main = styled.main`
  width: 100%;
  max-width: ${p => p.theme.maxWidth}px;
  margin: 0 auto;
  padding: 32px 0px;
  position: relative;
  ${space}
`;
