import {
  Stack,
  Box,
  Image,
  Heading,
  Badge,
  Divider,
  Text,
  chakra,
} from "@chakra-ui/react";

const Card = ({ props }) => {
  return (
    <Stack
      margin={{ base: "20px 0", lg: "30px 0" }}
      direction="row"
      flexWrap={"wrap"}
      align="center"
      W="100%"
      justify={{ base: "center", md: "flex-start" }}
      gap="10px"
      p="15px"
      bg={"white"}
      border="1px solid rgba(0,0,0,0.3)"
      borderLeft="5px solid rgb(49,151,149)"
      borderRadius="md"
      _hover={{
        borderColor: "rgba(0,0,0,0.1)",
        borderLeft: "5px solid rgba(49,151,149,.5)",
        boxShadow:
          "0 10px 15px -3px rgba(49, 151, 149, 0.1),0 4px 6px -2px rgba(49, 151, 149, 0.5)",
        rounded: "md",
        bg: "white",
      }}
    >
      <Box>
        <Image src={props.logo} w="88px" h="88px" maxWidth="none" />
      </Box>

      <Stack>
        <Stack
          direction="row"
          justify={{ base: "center", md: "flex-start" }}
          align="center"
        >
          <Text fontSize="lg">{props.business}</Text>
          {props.time.map((e) => (
            <Badge marginLeft="10px" colorScheme={"green"}>
              {e}
            </Badge>
          ))}
        </Stack>
        <Heading
          w={{ lg: "275px" }}
          textAlign={{ base: "center", md: "start" }}
          fontSize="xl"
        >
          {props.position}
        </Heading>
        <Stack direction="row">
          {props.features.map((e) => (
            <chakra.p
              fontSize="16px"
              textTransform="capitalize"
              fontWeight="medium"
            >
              -{e}
            </chakra.p>
          ))}
        </Stack>
      </Stack>
      <Divider orientation="horizontal" />
      <Stack
        spacing="4"
        direction="row"
        flexWrap={"wrap"}
        gap={"10px"}
        align="center"
        justify={"space-evenly"}
      >
        {props.id_class.map((e) => (
          <Badge
            variant="subtle"
            fontSize={{ md: ".75rem", lg: "1rem" }}
            textTransform="capitalize"
            p={{ base: "3px 6px", lg: "5px 10px" }}
            colorScheme="teal"
          >
            {e}
          </Badge>
        ))}
      </Stack>
    </Stack>
  );
};

export default Card;
