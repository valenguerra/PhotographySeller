import Image from "next/image";
import styled from "styled-components";

export const Svg = ({ src, ...props }) => {
  return (
    <Wrapper {...props}>
       <Image draggable='false' alt='icon' src={src} layout="fill"/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;