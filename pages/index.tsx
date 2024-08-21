import Image from "next/image";
import Header from "./components/Header/index";
import Intro from "./components/Intro/index";
import About from "./components/About/index";
import Token from "./components/Token/index";
import Gallery from "./components/Gallery/index";
import Roadmap from "./components/Roadmap/index";


export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Token />
      <Gallery />
      <Roadmap />
    </>
  );
}
