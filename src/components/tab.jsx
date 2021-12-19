import styled, { css } from "styled-components";
import { Text } from "./text";

export const Tab = ({ children, t, left, right, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {left}
      <Text t={t} fontWeight='medium' style={{cursor: "pointer"}}/>
      {right}
    </Wrapper>
  );
};

const selected = css`
  background-color: ${p => p.theme.colors.primary800};
  color: ${p => p.theme.colors.primary100};
  border-radius: ${p=>p.theme.radii.small};
  &:hover {
    background-color: ${p => p.theme.colors.primary800};
  }
  &:active {
    background-color: ${p => p.theme.colors.primary700};
  }
`;

const notSelected = css`
  background-color: transparent;
  color: ${p => p.theme.colors.primary900};
  border-radius: ${p=>p.theme.radii.small};
  background-color: ${p => p.theme.colors.primary200};
  &:hover {
    background-color: ${p => p.theme.colors.primary200};
  }
  &:active {
    background-color: ${p => p.theme.colors.primary300};
  }
`;

export const Wrapper = styled.div`
  padding: 8px 16px;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${p => (p.selected ? selected : notSelected)};
`;
