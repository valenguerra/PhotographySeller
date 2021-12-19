import { Main } from "../components/main";
import { Icon, icons } from "../components/icon";
import { Header } from "../components/header";
import { Box } from "../components/box";
import { TextButton } from "../components/text-button";
import { Button } from "../components/button";
import { Column, Row } from "../components/flex";
import { Text } from "../components/text";
import { Divider } from "../components/divider";
import { Footer } from "../components/footer";
import { ProductTitle } from "../components/product-title";
import Image from "next/image";
import Responsive from "../components/responsive";

export const getServerSideProps = async context => {
  return {
    props: {
      product: {
        id: 214,
        image:
          "https://images.unsplash.com/photo-1638368012876-5812dd95d7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        name: "Torre de agua",
        price: "$2.300,00",
      },
      frames: [
        {
          id: "0",
          name: "Negro y Dorado 128×128",
          image:
            "https://prd-sf-cdn.wag-static.com/resources/wg-assets/images/pdp/floating-frames-black-nonebacker.jpg",
        },
        {
          id: "0",
          name: "Negro 128 × 128",
          image:
            "https://prd-sf-cdn.wag-static.com/resources/wg-assets/images/pdp/floating-frames-black-nonebacker.jpg",
        },
        {
          id: "0",
          name: "Negro 128 × 128",
          image:
            "https://prd-sf-cdn.wag-static.com/resources/wg-assets/images/pdp/floating-frames-black-nonebacker.jpg",
        },
      ],
    },
  };
};

export default function Product({ product, frames }) {
  return (
    <>
      <Header
        left={<TextButton t='Volver' ml='8px' pl='4px' left={<Icon mr='8px' as={icons.simpleArrowLeft} />} />}
        right={
          <Row gap='16px' mr='8px'>
            <Icon mr='8px' as={icons.instagram} button />
            <Icon mr='8px' as={icons.whatsapp} button />
          </Row>
        }
      />
      <Main pt='0'>
        <Responsive>
          {({ isDesktop }) => (
            <Column gap='40px' pt={isDesktop ? "40px" : "0"}>
              <Box
                height='450px'
                width='100%'
                position='relative'
                flex='10 0 auto'
                overflow='hidden'
                bg='primary300'
                borderRadius={isDesktop ? "small" : 0}
              >
                <Image src={product.image} layout='fill' objectFit='contain' alt={product.name} />
              </Box>
              <ProductTitle {...product} />
              <Divider />
              <Column gap='12px'>
                <Text t='Marcos disponibles' fontWeight='light' fontSize='4' mx='20px' />
                <Row overflow='auto' gap='20px' px='20px' pb='20px'>
                  {frames.map(f => (
                    <Row key={f.id}>
                      <Box
                        display='flex'
                        flexDirection='column'
                        boxShadow='0 8px 8px #00000030'
                        borderRadius='regular'
                        overflow='hidden'
                      >
                        <Box
                          height='200px'
                          width='250px'
                          position='relative'
                          flex='10 0 auto'
                          overflow='hidden'
                          bg='primary300'
                        >
                          <Image src={f.image} layout='fill' objectFit='cover' alt={f.name} />
                        </Box>
                        <Box
                          display='flex'
                          flex='1'
                          bg='accent400'
                          p='12px'
                          justifyContent='center'
                          alignSelf='bottom'
                        >
                          <Text t={f.name} fontWeight='regular' mr='8px' textAlign='center' />
                        </Box>
                      </Box>
                    </Row>
                  ))}
                </Row>
              </Column>
              <Divider />
              <Button
                t='Contactar vendedor'
                mx='20px'
                py='16px'
                {...(isDesktop && { mx: "auto", width: "300px" })}
              />
            </Column>
          )}
        </Responsive>
      </Main>
      <Footer />
    </>
  );
}
