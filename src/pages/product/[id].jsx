import { Main } from "../../components/main";
import { Icon, icons } from "../../components/icon";
import { Header } from "../../components/header";
import { Box } from "../../components/box";
import { TextButton } from "../../components/text-button";
import { Button } from "../../components/button";
import { Column, Row } from "../../components/flex";
import { Text } from "../../components/text";
import { Divider } from "../../components/divider";
import { ProductTitle } from "../../components/product-title";
import Image from "next/image";
import { getFrames, getProduct, getProducts } from "../../app/api";
import { priceFormat } from "../../app/util";
import { useRouter } from "next/router";
import { Page } from "../../components/page";
import { ContactPopup } from "../../components/contact-popup";
import { useState } from "react";
import dynamic from "next/dynamic";

const Responsive = dynamic(() => import("../../components/responsive"), { ssr: false });

export const getStaticPaths = async () => {
  const products = await getProducts();
  const paths = products.map(p => ({
    params: { id: p.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { id = null } }) => {
  const product = await getProduct(id);
  const frames = await getFrames();
  console.log("FRAMES: ", frames);

  return {
    props: {
      product: {
        id: product.id,
        image: product.image.url,
        name: product.name,
        price: priceFormat(product.price),
      },
      frames: frames.map(f => ({
        id: f.id,
        name: f.name,
        price: priceFormat(f.price),
        image: f.image.url,
      })),
    },
  };
};

export default function Product({ product, frames }) {
  const [contactPopupIsOpen, setContactPopupIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Page
      header={
        <Header
          left={
            <TextButton
              t='Volver'
              ml='8px'
              pl='4px'
              left={<Icon mr='8px' as={icons.simpleArrowLeft} />}
              onClick={() => router.back()}
            />
          }
          right={
            <Row gap='16px' mr='8px' onClick={() => setContactPopupIsOpen(true)}>
              <Icon mr='8px' as={icons.instagram} button />
              <Icon mr='8px' as={icons.whatsapp} button />
            </Row>
          }
        />
      }
    >
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
                        height='300px'
                        width='300px'
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
                        px='20px'
                        py='12px'
                        alignSelf='bottom'
                        flexDirection='column'
                      >
                        <Text t={f.name} fontWeight='light' mr='8px' textAlign='center' />
                        <Text t={f.price} fontWeight='medium' mr='8px' textAlign='center' />
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
              onClick={() => setContactPopupIsOpen(true)}
              {...(isDesktop && { mx: "auto", width: "300px" })}
            />
          </Column>
        )}
      </Responsive>
      {contactPopupIsOpen && (
        <ContactPopup
          contactText={`Hola, me interesa el producto N°${product.id} de la tienda web`}
          onClose={() => setContactPopupIsOpen(false)}
        />
      )}
    </Page>
  );
}
