import { Main } from "../components/main";
import { Icon, icons } from "../components/icon";
import { Text } from "../components/text";
import { Header } from "../components/header";
import { Box } from "../components/box";
import { TextButton } from "../components/text-button";
import { Row } from "../components/flex";
import { Footer } from "../components/footer";
import { TabBar } from "../components/tab-bar";
import { useState } from "react";
import { ImageCard } from "../components/image-card";
import Responsive from "../components/responsive";

const getProducts = ({ sectionId, filterId }) => {
  // En base a sectionId y filterId, obtiene todos los productos que matcheen.
  return [
    {
      id: "123dsd",
      name: "Torre de agua",
      price: "$2.300,00",
      sections: ["abc123", "abc124"],
      image:
        "https://images.unsplash.com/photo-1638368012876-5812dd95d7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "123ddsd",
      name: "Torre de agua de 500l que mira hacia el oeste",
      price: "$2.300,00",
      image:
        "https://images.unsplash.com/photo-1638825794622-4c3bb400cdef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "123dasd",
      name: "Torre de agua",
      price: "$2.300,00",
      image:
        "https://images.unsplash.com/photo-1638368012876-5812dd95d7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "123dvsd",
      name: "Torre de agua",
      price: "$2.300,00",
      image:
        "https://images.unsplash.com/photo-1638368012876-5812dd95d7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
};

export const getServerSideProps = async context => {
  return {
    props: {
      sections: [
        { id: "abc123", name: "Naturaleza" },
        { id: "abc124", name: "Urbano" },
        { id: "abc126", name: "Personas" },
        { id: "abc125", name: "Arquitectura" },
        { id: "abc127", name: "Farolas" },
        { id: "abc1e23", name: "Naturaleza" },
        { id: "abc2124", name: "Urbano" },
        { id: "abc12e125", name: "Arquitectura" },
        { id: "abcd126", name: "Personas" },
        { id: "abc1ee27", name: "Farolas" },
      ],
      filters: [
        { id: "0", name: "Todas" },
        { id: "1", name: "Color" },
        { id: "2", name: "Blanco y negro" },
      ],
      initialProducts: getProducts({ sectionId: "abc123", filterId: "0" }),
    },
  };
};

export default function Categories({ sections, filters, initialProducts }) {
  const [sectionSelected, setSectionSelected] = useState(sections[0].id);
  const [filterSelected, setFilterSelected] = useState(filters[0].id);
  const [products, setProducts] = useState(initialProducts);

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
        <Text t='Categorías' m='14px 0 8px 20px' />
        <TabBar tabs={sections} value={sectionSelected} onChange={setSectionSelected} />
        <Text t='Filtros' m='14px 0 8px 20px' />
        <TabBar tabs={filters} value={filterSelected} onChange={setFilterSelected} />
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
                <ImageCard key={p.id} image={p.image} alt={p.name} height='300px' width='100%'>
                  <Text t={p.name} fontWeight='medium' style={{ flex: "1" }} mr='8px' />
                  <Text t={p.price} fontWeight='light' />
                </ImageCard>
              ))}
            </Box>
          )}
        </Responsive>
      </Main>
      <Footer />
    </>
  );
}
