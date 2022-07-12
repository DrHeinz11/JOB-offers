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
    <Stack margin={"50px auto"} direction="row" align="center" w="75%" gap="10px">
      <Box>
        <Image src={props.logo} w="88px" h="88px" maxWidth="none" />
      </Box>

      <Stack>
        <Stack direction="row" align="center">
          <Text fontSize="lg">{props.business}</Text>
          {props.time.map((e) => (
            <Badge marginLeft="10px" colorScheme={"green"}>
              {e}
            </Badge>
          ))}
        </Stack>
        <Heading w="275px" fontSize="xl">
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

      <Stack spacing="4" direction="row" w="425px" align="center" justify={'space-between'}>
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
