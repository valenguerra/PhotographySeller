import { Page } from "../components/page";
import { Card } from "../components/card";
import { Text } from "../components/text";
import { Emoji } from "../components/emoji";
import { Box } from "../components/box";
import { Column, Row } from "../components/flex";

export default function Home() {
  return (
    <Page>
      <Column alignItems='center'>
        <Card>
          <Text t='Buenos días' fontWeight='bold' fontSize='28px' right={<Emoji emoji='party' ml='8px' />} />
          <Text t='Esto es una plantilla para un proyecto de NextJs' fontWeight='regular' mt='12px' />
        </Card>
        <Column mt='32px' gap='8px'>
          <Text t='Primary' fontWeight='medium' fontSize='20px' mt="8px"/>
          <Row gap='12px'>
            <Box height='40px' width='40px' bg='primary100' borderRadius='5px' />
            <Box height='40px' width='40px' bg='primary200' borderRadius='5px' />
            <Box height='40px' width='40px' bg='primary300' borderRadius='5px' />
            <Box height='40px' width='40px' bg='primary400' borderRadius='5px' />
            <Box height='40px' width='40px' bg='primary500' borderRadius='5px' />
            <Box height='40px' width='40px' bg='primary600' borderRadius='5px' />
            <Box height='40px' width='40px' bg='primary700' borderRadius='5px' />
            <Box height='40px' width='40px' bg='primary800' borderRadius='5px' />
            <Box height='40px' width='40px' bg='primary900' borderRadius='5px' />
          </Row>
          <Text t='Accent' fontWeight='medium' fontSize='20px' mt="8px"/>
          <Row gap='12px'>
            <Box height='40px' width='40px' bg='accent100' borderRadius='5px' />
            <Box height='40px' width='40px' bg='accent200' borderRadius='5px' />
            <Box height='40px' width='40px' bg='accent300' borderRadius='5px' />
            <Box height='40px' width='40px' bg='accent400' borderRadius='5px' />
            <Box height='40px' width='40px' bg='accent500' borderRadius='5px' />
            <Box height='40px' width='40px' bg='accent600' borderRadius='5px' />
            <Box height='40px' width='40px' bg='accent700' borderRadius='5px' />
            <Box height='40px' width='40px' bg='accent800' borderRadius='5px' />
            <Box height='40px' width='40px' bg='accent900' borderRadius='5px' />
          </Row>
          <Text t='Neutral' fontWeight='medium' fontSize='20px' mt="8px"/>
          <Row gap='12px'>
            <Box height='40px' width='40px' bg='neutral100' borderRadius='5px' />
            <Box height='40px' width='40px' bg='neutral200' borderRadius='5px' />
            <Box height='40px' width='40px' bg='neutral300' borderRadius='5px' />
            <Box height='40px' width='40px' bg='neutral400' borderRadius='5px' />
            <Box height='40px' width='40px' bg='neutral500' borderRadius='5px' />
            <Box height='40px' width='40px' bg='neutral600' borderRadius='5px' />
            <Box height='40px' width='40px' bg='neutral700' borderRadius='5px' />
            <Box height='40px' width='40px' bg='neutral800' borderRadius='5px' />
            <Box height='40px' width='40px' bg='neutral900' borderRadius='5px' />
          </Row>
        </Column>
      </Column>
    </Page>
  );
}
