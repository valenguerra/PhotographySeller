import { compose, flexbox, system } from "styled-system";

export const cssFlexbox = compose(
  flexbox,
  system({
    gap: {
      property: "gap",
      scale: "space",
    },
    rowGap: {
      property: "gap",
      scale: "space",
    },
    columnGap: {
      property: "gap",
      scale: "space",
    },
  })
);
