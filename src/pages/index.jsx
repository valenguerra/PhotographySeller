import { Main } from "../components/main";
import { Icon, icons } from "../components/icon";
import { Text } from "../components/text";
import { Box } from "../components/box";
import { TextButton } from "../components/text-button";
import { Column, Row } from "../components/flex";
import { DecoratedTitle } from "../components/decorated-title";
import styled from "styled-components";
import { PhotoSection } from "../components/photo-section";
import { Footer } from "../components/footer";
import { Divider } from "../components/divider";
import dynamic from "next/dynamic";
import { getCategories, getProducts } from "../app/api";
import { Page } from "../components/page";
import { ContactPopup } from "../components/contact-popup";
import { useState } from "react";

const Responsive = dynamic(() => import("../components/responsive"), { ssr: false });

export const getStaticProps = async () => {
  const products = await getProducts();
  const categories = await getCategories();
  const sections = [];

  categories.forEach(c => {
    const catProducts = products.filter(p => {
      const catIds = p.attributes.categories.data.map(cat => cat.id);
      for (let id of catIds) {
        if (id === c.id) return true;
      }
      return false;
    });
    if (catProducts.length < 4) return;
    sections.push({
      id: c.id,
      name: c.attributes.name,
      images: catProducts.map(cp => getHighestResFormatURL(cp.attributes.image)),
    });
  });

  return {
    props: { sections },
  };
};

export default function Home({ sections }) {
  const [contactPopupIsOpen, setContactPopupIsOpen] = useState(false);

  return (
    <Page>
      <Column gap='48px' pt='32px'>
        <DecoratedTitle />
        <Row justifyContent='center' gap='8px'>
          <TextButton
            t='Instagram'
            left={<Icon mr='8px' as={icons.instagram} />}
            onClick={() => setContactPopupIsOpen(true)}
          />
          <Box width='2px' bg='primary200' />
          <TextButton
            t='Whatsapp'
            left={<Icon mr='8px' as={icons.whatsapp} />}
            onClick={() => setContactPopupIsOpen(true)}
          />
        </Row>
        <Text
          fontSize={[3, 4]}
          fontWeight='extraLight'
          width='100%'
          mx='auto'
          textAlign='center'
          display='block'
        >
          Mar del Plata, Argentina.
          <br />
          <Highlighted>Envios a todo el país</Highlighted>
        </Text>
        <Column>
          <Responsive>
            {({ isDesktop }) => (
              <>
                <Box
                  width='100%'
                  py='20px'
                  my='12px'
                  bg='accent300'
                  display='flex'
                  justifyContent='center'
                  borderRadius={isDesktop ? "small" : 0}
                >
                  <Text t='Catálogo de fotos' fontWeight='medium' fontSize='4' />
                </Box>
                {sections.map((s, i) => {
                  return (
                    <Box key={s.id}>
                      <PhotoSection section={s} />
                      {i < sections.length - 1 && <Divider my='12px' />}
                    </Box>
                  );
                })}
              </>
            )}
          </Responsive>
        </Column>
      </Column>
      {contactPopupIsOpen && <ContactPopup onClose={() => setContactPopupIsOpen(false)} />}
    </Page>
  );
}

const Highlighted = styled.span`
  color: ${p => p.theme.colors.accent500};
  font-weight: ${p => p.theme.fontWeights.regular};
`;
