import {
  Stack,
  Box,
  Image,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  Button,
  Text,
} from "@chakra-ui/react";

const Card = ({ props }) => {
  return (
    <Stack
      margin={{ base: "25px 10px", lg: "50px" }}
      direction="row"
      flexWrap={"wrap"}
      align="center"
      maxW="100%"
      justify={{ base: "center", md: "flex-start" }}
      gap="10px"
      p="15px"
      border="1px solid black"
    >
      <Box>
        <Image src={props.logo} w="88px" h="88px" maxWidth="none" />
      </Box>

      <Stack>
        <Stack direction="row" justify={{base:'center',md:'flex-start'}} align="center">
          <Text fontSize="lg">{props.business}</Text>
          {props.time.map((e) => (
            <Badge marginLeft="10px" colorScheme={"green"}>
              {e}
            </Badge>
          ))}
        </Stack>
        <Heading w={{ lg: "275px" }} textAlign={{base:'center',md:'start'}} fontSize="xl">
          {props.position}
        </Heading>
        <Breadcrumb separator="-">
          {props.features.map((e) => {
            <BreadcrumbItem>
              <Text textTransform="capitalize">{e}</Text>
            </BreadcrumbItem>;
          })}
        </Breadcrumb>
      </Stack>

      <Stack
        spacing="4"
        direction="row"
        flexWrap={"wrap"}
        gap={"10px"}
        align="center"
        justify={"center"}
      >
        {props.id_class.map((e) => (
          <Button textTransform="capitalize" colorScheme="teal" size="sm">
            {e}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Card;
