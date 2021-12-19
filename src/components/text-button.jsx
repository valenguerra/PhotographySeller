import styled from "styled-components";
import { space } from "styled-system";
import { Text } from "./text";

export const TextButton = ({ ...rest }) => {
  return <Wrapper {...rest} />;
};

const Wrapper = styled(Text)`
  padding: 6px 12px;
  border-radius: ${p => p.theme.radii.small};
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.primary200};
  }
  &:active {
    background-color: ${p => p.theme.colors.primary300};
  }
  ${space}
`;
