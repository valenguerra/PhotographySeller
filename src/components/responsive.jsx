import { useTheme } from "styled-components";
import { useWindow } from "../app/hooks/use-window";

const Responsive = ({ children }) => {
  const { width } = useWindow();
  const { maxWidth } = useTheme();
  const isDesktop = width > maxWidth;
  const isMobile = width <= maxWidth;

  return children({ isDesktop, isMobile });
};

export default Responsive;
