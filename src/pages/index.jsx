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

const Responsive = dynamic(() => import("../components/responsive"), { ssr: false });

const images = [
  "https://images.unsplash.com/photo-1638368012876-5812dd95d7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1638091990389-7f4d9bbe8d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1638091990389-7f4d9bbe8d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1638368012876-5812dd95d7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
];

export const getServerSideProps = async context => {
  return {
    props: {
      sections: [
        { id: "abc123", name: "Naturaleza", images: images },
        { id: "abc124", name: "Urbano", images: images },
        { id: "abc125", name: "Arquitectura", images: images },
        { id: "abc126", name: "Personas", images: images },
        { id: "abc127", name: "Farolas", images: images },
      ],
    },
  };
};

export default function Home({ sections }) {
  return (
    <>
      {/* <Header
        left={<TextButton t='Volver' ml='8px' pl='4px' left={<Icon mr='8px' as={icons.simpleArrowLeft} />} />}
        right={
          <Row gap='16px' mr='8px'>
            <Icon mr='8px' as={icons.instagram} button />
            <Icon mr='8px' as={icons.whatsapp} button />
          </Row>
        }
      /> */}
      <Main>
        <Column gap='48px'>
          <DecoratedTitle />
          <Row justifyContent='center' gap='8px'>
            <TextButton t='Instagram' left={<Icon mr='8px' as={icons.instagram} />} />
            <Box width='2px' bg='primary200' />
            <TextButton t='Whatsapp' left={<Icon mr='8px' as={icons.whatsapp} />} />
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
      </Main>
      <Footer />
    </>
  );
}

const Highlighted = styled.span`
  color: ${p => p.theme.colors.accent500};
  font-weight: ${p => p.theme.fontWeights.regular};
`;
