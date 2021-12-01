import styled from "styled-components";

export const Page = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 32px 20px;
  position: relative;
`;
