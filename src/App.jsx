import { Heading, Image, Button, Stack, Container } from "@chakra-ui/react";
import Card from "./components/Card";
import { data, dataArr, dataTec } from "./constant/dataExport";
import { useState } from "react";
function App() {
  const [argument, setArgument] = useState("frontend");
  const arrRetorno = [];
  data.map((e) => {
    e.id_class.includes(argument) === true ? arrRetorno.push(e) : "";
  });

  return (
    <Container bg="primary.lgGray" maxW="100%">
      <Stack maxWidth="1200px" m={"0 auto"}>
        <Stack direction="column">
          <Stack direction="row" justify={{ base: "center", md: "flex-start" }}>
            {dataArr.map((e, index) => (
              <Button
                size="lg"
                textTransform="capitalize"
                colorScheme="teal"
                onClick={() => setArgument(e)}
                key={index}
              >
                {e}
              </Button>
            ))}
          </Stack>

          <Stack
            direction="row"
            flexWrap="wrap"
            gap="10px"
            justify={{ base: "center", md: "flex-start" }}
          >
            {dataTec.map((e, index) => (
              <Button
                textTransform="capitalize"
                size="md"
                colorScheme="teal"
                onClick={() => setArgument(e.toLowerCase())}
                key={index}
              >
                {e}
              </Button>
            ))}
          </Stack>
        </Stack>
        <div className="contianer">
          {}
          {arrRetorno.map((e, index) => (
            <Card props={e} key={index} />
          ))}
        </div>
      </Stack>
    </Container>
  );
}

export default App;
