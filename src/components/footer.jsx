import { Box } from "./box";
import { Column } from "./flex";
import { Text } from "./text";

export const Footer = () => {
  return (
    <Box width='100%' py='20px' mt="24px" bg='accent300'>
      <Column alignItems="center">
        <Text t='Todos los derechos reservados' fontWeight='medium' fontSize='1' />
        <Text t='Alejandro A. Guerra • 2022' fontWeight='light' fontSize='1' />
      </Column>
    </Box>
  );
};
