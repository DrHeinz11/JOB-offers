import { Stack, Button } from "@chakra-ui/react";

function Filter() {
  return (
    <Stack flexDirection={"row"} align="center" gap="25px">
      <Button
        marginTop={"0.5rem"}
        _focus={{ backgroundColor: "primary.dkGray" }}
      >
        Hola
      </Button>
      <Button _focus={{ backgroundColor: "primary.dkGray" }}>Hola</Button>
      <Button _focus={{ backgroundColor: "primary.dkGray" }}>Hola</Button>
    </Stack>
  );
}

export default Filter;
