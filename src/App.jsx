import { Heading, Image, Button } from "@chakra-ui/react";
import Card from "./components/Card";
import data from "./constant/dataExport";
import { useState } from "react";
function App() {
  const [argument, setArgument] = useState("frontend");
  const arrRetorno = [];
  data.map((e) => {
    e.id_class.includes(argument) === true ? arrRetorno.push(e) : "";
  });

  return (
    <>
      <Heading color="primary.bground">Hola esto es una prueba </Heading>
      <Button
        marginTop={"0.5rem"}
        _focus={{ backgroundColor: "primary.dkGray" }}
        onClick={() => setArgument("HTML")}
      >
        html
      </Button>
      <Button
        marginTop={"0.5rem"}
        _focus={{ backgroundColor: "primary.dkGray" }}
        onClick={() => setArgument("node")}
      >
        node
      </Button>
      <Button
        marginTop={"0.5rem"}
        _focus={{ backgroundColor: "primary.dkGray" }}
        onClick={() => setArgument("javascript")}
      >
        javascript
      </Button>
      <Button
        marginTop={"0.5rem"}
        _focus={{ backgroundColor: "primary.dkGray" }}
        onClick={() => setArgument("python")}
      >
        python
      </Button>
      <div className="contianer">
        {}
        {arrRetorno.map((e, index) => (
          <Card props={e} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
