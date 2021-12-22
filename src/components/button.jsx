import styled, { css } from "styled-components";
import { color, layout, space } from "styled-system";
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
`;

const variantSecondary = css`
  border: 2px solid ${p => p.theme.colors.primary900};
  background-color: transparent;
  color: ${p => p.theme.colors.primary900};
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

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }

  ${space}
  ${layout}
  ${color}
`;
