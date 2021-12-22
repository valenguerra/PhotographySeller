import { Main } from "../components/main";
import { Icon, icons } from "../components/icon";
import { Text } from "../components/text";
import { Header } from "../components/header";
import { Box } from "../components/box";
import { TextButton } from "../components/text-button";
import { Row } from "../components/flex";
import { Footer } from "../components/footer";
import { TabBar } from "../components/tab-bar";
import { ImageCard } from "../components/image-card";
import { getCategories, getColorFilters, getProducts } from "../app/api";
import { useRouter } from "next/dist/client/router";
import { getHighestResFormatURL, priceFormat } from "../app/util";
import dynamic from "next/dynamic";
import { Page } from "../components/page";
import { ContactPopup } from "../components/contact-popup";
import { useState } from "react";

const Responsive = dynamic(() => import("../components/responsive"), { ssr: false });

export const getStaticProps = async () => {
  const categories = await getCategories();
  const colorFilters = await getColorFilters();
  const products = await getProducts();

  return {
    props: {
      sections: categories.map(c => ({ id: c.id, name: c.attributes.name })),
      colorFilters: [
        { id: 0, name: "Todos" },
        ...colorFilters.map(cf => ({ id: cf.id, name: cf.attributes.name })),
      ],
      products: products.map(p => ({
        id: p.id,
        name: p.attributes.name,
        price: priceFormat(p.attributes.price),
        colorFilterId: p.attributes.color_filter.data.id,
        categoryIds: p.attributes.categories.data.map(c => c.id),
        image: getHighestResFormatURL(p.attributes.image),
      })),
    },
  };
};

export default function Categories({ sections, colorFilters, products }) {
  const [contactPopupIsOpen, setContactPopupIsOpen] = useState(false);
  const router = useRouter();
  const { colorFilter = 0, category = 1 } = router.query;

  products = products.filter(p => {
    const cf = colorFilter == 0 || p.colorFilterId == colorFilter;
    const c = p.categoryIds.filter(cid => cid == category).length > 0;
    return cf && c;
  });

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
              onClick={() => router.push("/")}
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
      <Text t='Categorías' m='14px 0 8px 20px' />
      <TabBar
        tabs={sections}
        value={category}
        onChange={id => router.push(`products?colorFilter=${colorFilter}&category=${id}`)}
      />
      <Text t='Filtros' m='14px 0 8px 20px' />
      <TabBar
        tabs={colorFilters}
        value={colorFilter}
        onChange={id => router.push(`products?colorFilter=${id}&category=${category}`)}
      />
      {products.length === 0 && (
        <Box
          mx='20px'
          mt='40px'
          display='flex'
          py='20px'
          bg='primary200'
          borderRadius='regular'
          justifyContent='center'
        >
          <Text t='Sin resultados' />
        </Box>
      )}
      <Responsive>
        {({ isDesktop }) => (
          <Box
            display='grid'
            flexDirection='column'
            alignItems='stretch'
            px='20px'
            mt='30px'
            gap='30px'
            flexWrap='wrap'
            gridTemplateColumns={isDesktop ? "1fr 1fr" : "1fr"}
          >
            {products.map(p => (
              <ImageCard
                key={p.id}
                image={p.image}
                alt={p.name}
                height='300px'
                width='100%'
                onClick={() => router.push(`/product/${p.id}`)}
              >
                <Text t={p.name} fontWeight='medium' style={{ flex: "1" }} mr='8px' />
                <Text t={p.price} fontWeight='light' />
              </ImageCard>
            ))}
          </Box>
        )}
      </Responsive>
      {contactPopupIsOpen && <ContactPopup onClose={() => setContactPopupIsOpen(false)} />}
    </Page>
  );
}
