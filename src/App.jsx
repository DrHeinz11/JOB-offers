import { Heading, Image, Button } from "@chakra-ui/react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import data from "./constant/Images";
import { useState } from "react";
function App() {
  const [Default, setDefault] = useState("frontend");
  const arrRetorno = [];
  data.map((e) => {
    e.id_class.includes(Default) === true ? arrRetorno.push(e) : "";
  });

  return (
    <>
      <Heading color="primary.bground">Hola esto es una prueba </Heading>
      <Card></Card>
      <Button
        marginTop={"0.5rem"}
        _focus={{ backgroundColor: "primary.dkGray" }}
        onClick={() => setDefault("html")}
      >
        html
      </Button>
      <Button
        marginTop={"0.5rem"}
        _focus={{ backgroundColor: "primary.dkGray" }}
        onClick={() => setDefault("node")}
      >
        node
      </Button>
      <Button
        marginTop={"0.5rem"}
        _focus={{ backgroundColor: "primary.dkGray" }}
        onClick={() => setDefault("javascript")}
      >
        javascript
      </Button>
      <div className="contianer">
        {}
        {arrRetorno.map((e, index) => (
          <>
            <Image src={e.logo} key={index} />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
