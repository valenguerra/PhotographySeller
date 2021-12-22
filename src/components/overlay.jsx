import styled from "styled-components";
import { useEffect } from "react";
import { Box } from "./box";

export const Overlay = ({ children, onClick, ...rest }) => {
  useEffect(() => {
    const hasScrollbar = window.innerWidth < document.body.clientHeight;

    if (hasScrollbar) {
      // Al abrir popup
      const scrollPos = window.scrollY;
      const header = document.getElementsByClassName("header")[0];
      if (header) {
        header.style.position = "absolute";
        header.style.top = scrollPos + "px";
      }
      document.body.style.top = -scrollPos + "px";
      document.body.style.overflowY = "scroll";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      return () => {
        // Al cerrar popup
        if (header) {
          header.style.position = "fixed";
          header.style.top = 0;
        }
        document.body.style.overflowY = "auto";
        document.body.style.position = "static";
        document.body.style.width = "unset";
        document.body.style.top = "unset";
        window.scroll(0, scrollPos);
      };
    }
  }, []);
  return (
    <Wrapper {...rest}>
      <Box onClick={onClick} position='absolute' top='0' bottom='0' left='0' right='0' zIndex='-10' />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #000000bb;
  position: fixed;
  inset: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(4px);
`;
