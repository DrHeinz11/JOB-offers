import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dkGray: "hsl(180,14%,20%)",
    lgGray: "hsl(180,100%,94%)",
    filterTable: "hsl(180,31%,95%)",
    bground: "hsl(180,52%,96%)",
  },
};

const theme = extendTheme({ colors });
export default theme;
