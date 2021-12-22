import styled, { useTheme } from "styled-components";
import { Box } from "./box";
import { Row } from "./flex";

export const Header = ({ left, right }) => {
  const { maxWidth } = useTheme();
  return (
    <Wrapper className='header'>
      <Row width='100%' maxWidth={maxWidth} alignItems='center'>
        {left}
        <Box flex='1' />
        {right}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 56px;
  box-shadow: 0px 7px 7px #00000010;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: ${p => p.theme.colors.accent100};
`;
