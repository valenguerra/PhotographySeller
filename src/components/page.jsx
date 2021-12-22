import { Box } from "./box";
import { Footer } from "./footer";
import { Main } from "./main";

export const Page = ({ children, header }) => {
  return (
    <div>
      {header}
      {header && <Box height="56px"/>}
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};