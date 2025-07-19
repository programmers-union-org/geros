import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./component/common/Footer";
import HtmlHead from "./component/common/JugadHeader/HtmlHead";
import InnerPage from "./pages/InnerPage";
import WhyWeExist from "./pages/WhyWeExist";
import OilAndGas from "./pages/OilAndGas";
import Drilling from "./pages/Drilling";
import EnvironmentalAndSafety from "./pages/EnvironmentalAndSafety";
import ConsultingAndEngineering from "./pages/ConsultingAndEngineering";
import menu1 from "/assets/menu1.webp";
import menu from "/assets/menu.webp";
import { HelmetProvider } from "react-helmet-async";
import Goldandnaturalresources from "./pages/Goldandnaturalresources";

const ScrollProgress = () => {
  const scrollLineRef = useRef(null);

  useEffect(() => {
    const fillScrollLine = () => {
      const scrollLine = scrollLineRef.current;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
      const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

      if (scrollLine) {
        scrollLine.style.width = `${percentScrolled}%`;
      }
    };

    window.addEventListener("scroll", fillScrollLine);
    return () => window.removeEventListener("scroll", fillScrollLine);
  }, []);

  return <div className="scroll-line z-[999]" ref={scrollLineRef}></div>;
};
const Header = () => {
  const location = useLocation();
  return location.pathname === "/" ? (
    <HtmlHead
      navTextColorTo="text-[#C0C0C0]"
      backgorundColor="bg-transparent"
      scrollColorBG="bg-[#323232]"
      geroslogo={true}
      mobilelogo={menu1}
    />
  ) : (
    <HtmlHead
      navTextColorTo="text-black"
      backgorundColor="bg-transparent"
      scrollColorBG="bg-white"
      geroslogo={false}
      mobilelogo={menu}
    />
  );
};
const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollProgress />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<InnerPage />} />
          {/* <Route path="/why-we-exist" element={<WhyWeExist/>} /> */}
          {/* all /services/... routes grouped */}
          <Route path="services">
            <Route
              path="gold-and-natural-resources"
              element={<Goldandnaturalresources />}
            />
            <Route path="oil-and-gas" element={<OilAndGas />} />
            <Route path="drilling" element={<Drilling />} />
            <Route
              path="environmental-and-safety"
              element={<EnvironmentalAndSafety />}
            />
            <Route
              path="consulting-and-engineering"
              element={<ConsultingAndEngineering />}
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
