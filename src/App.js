import Hero from "./components/Hero";
import Roller from "./components/Roller";
import About from "./components/About";
import Howto from "./components/Howto";
import Roadmap from "./components/Roadmap";
import Joinus from "./components/Joinus";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className=" sbg-black relative App overflow-x-hidden">
      <Header />
      <Hero />
      <Roller />
      <About />
      <Howto />
      <Roadmap />
      <Joinus />
      <Footer />
    </div>
  );
}

export default App;
