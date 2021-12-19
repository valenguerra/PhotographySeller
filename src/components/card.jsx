import styled, { css } from "styled-components";
import { space, layout } from "styled-system";

export const Card = styled.div`
  width: 100%;
  display: flex;
  padding: 26px 20px;
  flex-direction: column;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.16);
  border-radius: ${p => p.theme.borderRadius.medium};
  background-color: ${p => p.theme.colors.neutral100};
  ${space}
  ${layout}
`;
