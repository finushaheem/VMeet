import { Fragment } from "react";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Usecase from "./components/Usecase/Usecase";
import Subscribe from "./components/Subscribe/Subscribe"

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Usecase />
      <Subscribe />
    </Fragment>
  );
}

export default App;
