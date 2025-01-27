import React, { useEffect, useRef } from "react";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import InnerPage from "./innerPage/InnerPage";
import InnerHead from "./component/sample/InnerHead";
import HtmlHead from "./component/sample/HtmlHead";
import WhyWeExist from "./component/innerComponents/innerAbout/WhyWeExist";  
import OilAndGas from "./component/innerComponents/innerSectors/OilAndGas";
import singleLogos from "../src/assets/singleLogos.png"
import menu1 from "../src/assets/menu1.png"
import menu from "../src/assets/menu.png"
import { HelmetProvider } from "react-helmet-async";

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

    window.addEventListener('scroll', fillScrollLine);
    return () => window.removeEventListener('scroll', fillScrollLine);
  }, []);

  return <div className="scroll-line z-[999]" ref={scrollLineRef}></div>;
};
const Header = () => {
  const location = useLocation();
  return location.pathname === '/' ? <HtmlHead navTextColorTo='text-[#C0C0C0]' backgorundColor='bg-transparent' scrollColorBG="bg-[#323232]" geroslogo={true} mobilelogo={menu1}  /> : <HtmlHead navTextColorTo='text-black' backgorundColor='bg-transparent' scrollColorBG="bg-white" geroslogo={false} mobilelogo={menu} />;
};
const App = () => {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollProgress />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<InnerPage/>} />
        <Route path="/oil-and-gas" element={<OilAndGas/>} />
        <Route path="/why-we-exist" element={<WhyWeExist/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
