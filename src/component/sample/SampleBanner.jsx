import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Nav from "../imageSlide/Nav";
import one from "/assets/one1.webp"
import two from "/assets/one2.webp";
import three from "/assets/one3.webp";
import four from "/assets/one4.webp";
import close from "/assets/close.webp";
import TimeRange from "../timeRange/TimeRange";
import AramcoTimeRane from "../timeRange/AramcoTimeRane";

// Styled components
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const contentFade = keyframes`
  0% { opacity: 0; transform: translateY(-50px); }
  20% { opacity: 1; transform: translateY(0); }
  80% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-50px); }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  ${'' /* transition: opacity 2.5s ease-in-out;  */}
  background: linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0));
  animation: ${fadeIn} 3s ease-in-out;
`;

const Content = styled.div`
  transform: translate(-50px);
  opacity: ${(props) => (props.active ? 1 : 0)};
  animation: ${contentFade} 7.5s forwards infinite;
`;

const SampleBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ImageData = [
    {
      image: one,
      content: "Resources that power industries worldwide",
      category: "Oil and gas exploration service",
    },
    {
      image: two,
      content: "Maximize Recovery. Minimize environmental footprint",
      category: "Drilling services",
    },
    {
      image: three,
      content:
        "Installation and maintenance of production platforms and equipment",
      category: "Production service",
    },
    {
      image: four,
      content: "How can we engineer a better future",
      category: "Supply and management",
    },
  ];
  const imageOnly = [one, two, three, four];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % ImageData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [ImageData.length]);

  const [bgNavBar, setBgNavBar] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [textColor, setTextColr] = useState("text-white");
  const [opacity, setOpacity] = useState("duration-[2s]");
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const toggleDropdown = (number) => {
    setBgNavBar(bgNavBar ? "" : "bg-[#323232] fade-animation-top-bottom z-50");
    setShowDropdown(!showDropdown);
    if (showDropdown) {
      document.body.style.overflow = "auto";
      setTextColr("text-white");
      setOpacity("duration-[2s]");
      setSelectedDropdown(null);
    } else {
      document.body.style.overflow = "hidden";
      setTextColr("text-slate-600");
      setOpacity("duration-[0s]");
      setSelectedDropdown(number);
    }
  };
  const dropDownAbout = [
    "Why we exist",
    "Our Collective History",
    "Our Organisations",
  ];
  const dropDownSectors = [
    "Fossil Fuels",
    "Minerals and Metals",
    "Precious Metals and Gemstones",
    "Industrial Minerals",
    "Energy Commodities Beyond Fossil Fuels",
    "Water",
    "Rare Earth Elements",
    "Textiles and Fibres",
    "Marine Products",
  ];
  const dropDownMarkets = [
    "Latin America",
    "North America",
    "Africa",
    "Middle East",
  ];
  const dropDownProjects = ["Mega Projects ", "Classified till 2025"];

  return (
    <>
      <Container>
        {ImageData.map((item, index) => (
          <Slide
            key={index}
            active={index === currentSlide}
            className={`flex flex-col justify-between transition-opacity ${opacity} ease-in-out`}
            style={{
              backgroundImage: !showDropdown
                ? `linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0)), url(${item.image})`
                : `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(86, 43, 43, 0.81)), url(${item.image})`,
              // backgroundImage: `linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0)), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={`${bgNavBar} `}>
              <Nav toggleDropdown={toggleDropdown} />
            </div>
            <Content
              active={index === currentSlide}
              className={`px-20 mt-20 text-white ${textColor} `}
            >
              <h4 className="font-medium text-sm uppercase font-section-one ">
                {item.category}
              </h4>
              <h1 className="text-6xl h-40 tracking-wider capitalize mt-8 w-3/4">
                {item.content}
              </h1>
            </Content>
            <div className=" flex gap-6  -mt-8  justify-center ">
              <TimeRange item={imageOnly[0]} content={ImageData[0].category} />
              <TimeRange item={imageOnly[1]} content={ImageData[1].category} />
              <TimeRange item={imageOnly[2]} content={ImageData[2].category} />
              <TimeRange item={imageOnly[3]} content={ImageData[3].category} />
            </div>
          </Slide>
        ))}
      </Container>
      {showDropdown && (
        <div className="absolute top-20 z-50 left-0 h-screen fade-animation ">
          <div className="bg-[#323232] h-screen text-white w-80 pt-8">
            <div className="flex justify-end pr-10">
              <button onClick={toggleDropdown}>
                <img className="h-6 w-6" src={close} alt="" />
              </button>
            </div>
            <ul className="flex flex-col mt-4 justify-center px-16 font-medium text-lg gap-4">
              {selectedDropdown === 1
                ? dropDownAbout.map((item, index) => (
                    <li key={index} className=" cursor-pointer">
                      {item}
                    </li>
                  ))
                : selectedDropdown === 2
                ? dropDownSectors.map((item, index) => (
                    <li key={index} className="leading-6 cursor-pointer">
                      {item}
                    </li>
                  ))
                : selectedDropdown === 3
                ? dropDownMarkets.map((item, index) => (
                    <li key={index} className=" cursor-pointer">
                      {item}
                    </li>
                  ))
                : selectedDropdown === 4
                ? dropDownProjects.map((item, index) => (
                    <li key={index} className=" cursor-pointer">
                      {item}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SampleBanner;
