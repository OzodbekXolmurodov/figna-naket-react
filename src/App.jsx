import { useState } from "react";
import "./App.css";
import Header from "./companets/header/Header";
import About from "./companets/abaut/About";
import Main from "./companets/main/Main";
import Prodacts from "./companets/pradacts/Prodacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      <Main />
      <Prodacts />
    </>
  );
}

export default App;
