import { Heading, Image, Button, Stack } from "@chakra-ui/react";
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
    <Stack bg="primary.lgGray">
      <Stack direction="column">
        <Stack direction="row">
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

        <Stack direction="row">
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
  );
}

export default App;
