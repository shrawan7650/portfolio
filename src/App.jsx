import AllData from "./Store/store";
import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Recomdation from "./Components/Recomdation";
import Footer from "./Components/Footer";
function App() {
  const Data = AllData;

  return (
    <div className="wrapper">
      <div className="main">
        <Header data={Data}></Header>
        <HeroSection data={Data} />
        <Skills data={Data} />
        <Project data={Data} />
        <Recomdation data={Data} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
