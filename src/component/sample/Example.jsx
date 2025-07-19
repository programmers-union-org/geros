import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Nav from "../imageSlide/Nav";
import one from "/assets/one1.webp";
import two from "/assets/one2.webp";
import three from "/assets/one3.webp";
import four from "/assets/one4.webp";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const contentFade = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-50px); /* Start position above */
    }
    20% {
      opacity: 1; /* Quickly reach full opacity */
      transform: translateY(0); /* Middle position at its normal position */
    }
    80% {
      opacity: 1; /* Stay at full opacity for a while */
      transform: translateY(0); /* Middle position at its normal position */
    }
    100% {
      opacity: 0; /* Slowly fade out */
      transform: translateY(-50px); /* End position above */
    }
  `;
const categoryFade = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-50px); /* Start position above */
    }
    20% {
      opacity: 1; /* Quickly reach full opacity */
      transform: translateY(0); /* Middle position at its normal position */
    }
    80% {
      opacity: 1; /* Stay at full opacity for a while */
      transform: translateY(0); /* Middle position at its normal position */
    }
    100% {
      opacity: 0; /* Slowly fade out */
      transform: translateY(-50px); /* End position above */
    }
  `;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  background: linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0));

  img {
    ${"" /* width: 100%;
    height: 100%; */}
    object-fit: cover;
    animation: ${fadeIn} 3s ease-in-out;
  }
`;
const Category = styled.div`
  ${"" /* position: absolute;
  top: 20%;
  left: 8%; */}
  transform: translate(-50px);
  color: white;
  animation: ${categoryFade} 5s forwards infinite;
`;
const Content = styled.div`
  ${'' /* position: absolute; */}
  ${'' /* top: 20%; */}
  ${'' /* left: 3%;  */}
  transform: translate(-50px);
  color: white;
  animation: ${contentFade} 5.5s forwards infinite;

  ${'' /* @media (max-width: 768px) {
    font-size: 18px;
  } */}
`;

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: one,
      content: "Resources that power industries worldwide",
      category: "Oil and gas exploration service ",
    },
    {
      image:two,
      content: "Maximise Recovery. minimise environmental footprint",
      category: "Drilling services ",
    },
    {
      image:three,
      content:
        "installation and maintenance of production platforms and equipment ",
      category: "Production service ",
    },
    {
      image:four,
      content: "How can we engineer a better future",
      category: "Supply and management ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <Container>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          active={index === currentSlide}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" "
        >
          {/* <img src={slide.image} alt={`Slide ${index + 1}`} /> */}
          <div className="">
          <Nav />
          </div>
          <Content className="px-16 max-w-[75rem] m-auto mt-20">
            <h4 className="text-start  mt-8 font-medium text-sm uppercase font-section-one ">
              {slide.category}
            </h4>

            <h1 className="pro-font text-6xl h-40 tracking-wider capitalize mt-8 text-start  w-3/4">
              {slide.content}
            </h1>
            {/* <div className="flex mt-7 gap-4 items-center">
              <h5 className="  text-start font-section-one font-medium text-lg">
                Learn more
              </h5>
              <div className="">
                <WhiteArrow />
              </div>
            </div> */}
          </Content>
          {/* <div className=" flex gap-6 mt-[16rem]  justify-center ">
            <TimeRange
              item={one}
              newData={slide.image}
              content={slide.category}
            />
            <TimeRange
              item={two}
              newData={slide.image}
              content={slide.category}
            />
            <TimeRange
              item={three}
              newData={slide.image}
              content={slide.category}
            />
            <TimeRange
              item={four}
              newData={slide.image}
              content={slide.category}
            />
          </div> */}
        </Slide>
      ))}
    </Container>
  );
};

export default ImageSlider;
