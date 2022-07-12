import { bgDesktop, bgMobile } from "../images/svg-icons/export";

import { Image } from "@chakra-ui/react";
function BgHeader() {
  return (
    <Image
      bg="teal"
      objectFit={"cover"}
      w="100%"
      height={{ base: "75px", lg: "auto" }}
      src={bgDesktop}
    />
  );
}

export default BgHeader;
