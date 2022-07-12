import {
  Stack,
  Box,
  Image,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
} from "@chakra-ui/react";

const Card = ({
  props: { logo, features, title, position, time, business },
}) => {
  return (
    <Stack>
      <Box>
        <Image src={logo} />
      </Box>
      <Stack>
        <Box>
          {time.map((e) => (
            <Badge colorScheme={"green"}>{e}</Badge>
          ))}
        </Box>
        <Heading>{title}</Heading>
        <Breadcrumb separator="-">
          {features.map((e) => {
            <BreadcrumbItem>
              <Text textTransform="capitalize">{e}</Text>
            </BreadcrumbItem>;
          })}
        </Breadcrumb>
      </Stack>

      <Box>Copy</Box>
      <Box></Box>
    </Stack>
  );
};

export default Card;
