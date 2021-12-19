import styled from "styled-components";
import { Box } from "./box";
import { Text } from "./text";
import { Column } from "./flex";
import { space } from "styled-system";

export const DecoratedTitle = ({ ...rest }) => {
  const cornerSize = 35;
  return (
    <Wrapper {...rest}>
      <Box
        bg='primary100'
        position='absolute'
        m='auto'
        left={cornerSize}
        right={cornerSize}
        top='-5px'
        bottom='-5px'
        zIndex='-1'
      />
      <Box
        bg='primary100'
        position='absolute'
        m='auto'
        top={cornerSize}
        bottom={cornerSize}
        left='-5px'
        right='-5px'
        zIndex='-1'
      />
      <Column width='100%' alignItems='center' gap='12px'>
        <Text t='Ale Guerra' fontWeight='medium' fontSize={[5, 6]} />
        <Box bg='accent300' height='2px' width='100%' />
        <Text t='Ambientación fotográfica' fontWeight='light' fontSize={[1, 3]} />
      </Column>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  max-width: 450px;
  max-height: 450px;
  border: 3px solid ${p => p.theme.colors.primary900};
  position: relative;
  align-self: center;
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  ${space}
`;
