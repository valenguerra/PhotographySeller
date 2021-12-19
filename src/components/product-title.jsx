import { Box } from "./box";
import { Column, Row } from "./flex";
import { Text } from "./text";

export const ProductTitle = ({ id, name, price }) => {
  return (
    <Row mx='20px'>
      <Box width='4px' bg='accent300' mr='20px' borderRadius='20px' />
      <Column>
        <Text t={"N°" + id} fontWeight='light' fontSize='1' />
        <Text t={name} fontWeight='700' fontSize='5' />
        <Text t={"Precio: " + price} fontWeight='light' fontSize='3' />
      </Column>
    </Row>
  );
};
