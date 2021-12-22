import { Box } from "./box";
import Image from "next/image";

export const ImageCard = ({ image, alt, children, height, width, ...rest }) => {
  return (
    <Box
      boxShadow='0 8px 8px #00000030'
      borderRadius='regular'
      overflow='hidden'
      style={{ cursor: "pointer" }}
      {...rest}
    >
      <Box
        height={height}
        width={width}
        position='relative'
        flex='10 0 auto'
        overflow='hidden'
        bg='primary300'
      >
        <Image src={image} layout='fill' objectFit='cover' alt={alt} />
      </Box>
      <Box display='flex' bg='accent400' p='12px'>
        {children}
      </Box>
    </Box>
  );
};
