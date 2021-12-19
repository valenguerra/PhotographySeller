import styled, { css } from "styled-components";
import { layout, space } from "styled-system";
import { Text } from "./text";

export const Button = ({ children, t, left, right, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {left}
      <Text t={t} fontWeight='medium' style={{ cursor: "pointer" }}>
        {children}
      </Text>
      {right}
    </Wrapper>
  );
};

const variantPrimary = css`
  border: 0;
  background-color: ${p => p.theme.colors.primary900};
  color: ${p => p.theme.colors.accent100};
  &:hover {
    background-color: ${p => p.theme.colors.primary800};
  }
  &:active {
    background-color: ${p => p.theme.colors.primary700};
  }
`;

const variantSecondary = css`
  border: 2px solid ${p => p.theme.colors.primary900};
  background-color: transparent;
  color: ${p => p.theme.colors.primary900};
  &:hover {
    background-color: ${p => p.theme.colors.primary200};
  }
  &:active {
    background-color: ${p => p.theme.colors.primary300};
  }
`;

export const Wrapper = styled.button`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.small};
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;

  ${variantPrimary}
  ${p => p.variant === "secondary" && variantSecondary}

  ${space}
  ${layout}
`;
