import { Box } from "./box";
import { Column, Row } from "./flex";
import { Text } from "./text";
import Image from "next/image";
import { Button } from "./button";
import styled from "styled-components";
import Responsive from "./responsive";
import { useRouter } from "next/router";

export const PhotoSection = ({ section: { name, images, id } }) => {
  const router = useRouter();

  const paddingX = "20px";
  const onSeeMore = () => router.push(`/products?category=${id}&colorFilter=0`);

  return (
    <Column pt='20px' pb='28px'>
      <Text t={name} fontSize={[4, 5]} mx={paddingX} mb='12px' onClick={onSeeMore} />
      <Responsive>
        {({ isDesktop }) => (
          <>
            <Row
              px={paddingX}
              overflow='auto'
              gap='16px'
              flexWrap={isDesktop ? "wrap" : "unset"}
              onClick={onSeeMore}
            >
              {images.map((url, i) => {
                return (
                  <Box
                    key={i}
                    height='300px'
                    width='250px'
                    position='relative'
                    flex='10 0 auto'
                    overflow='hidden'
                    borderRadius='small'
                    {...(isDesktop && { height: "300px", width: "300px" })}
                  >
                    <StyledImage src={url} layout='fill' objectFit='cover' alt={"photo " + i} />
                  </Box>
                );
              })}
            </Row>
            <Button
              mt='28px'
              t='Ver más'
              variant='secondary'
              onClick={onSeeMore}
              mx={paddingX}
              {...(isDesktop && { width: "150px", ml: "auto" })}
            />
          </>
        )}
      </Responsive>
    </Column>
  );
};

const StyledImage = styled(Image)`
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
