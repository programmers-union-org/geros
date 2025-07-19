import "react-responsive-carousel/lib/styles/carousel.min.css";
import TimeRange from "../timeRange/TimeRange";
import Nav from "./Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "/assets/one1.webp";
import two from "/assets/one2.webp";
import three from "/assets/one3.webp";
import four from "/assets/one4.webp";
import five from "/assets/one5.webp";
import { Carousel } from "react-responsive-carousel";

const ImageSlide = () => {
  const images = [
    {
      img: five,
      category: "Gold and natural resources",
      title: "Gold and natural resources",
      read: "Read More",
    },
    {
      img: one,
      category: "Oil and gas exploration service",
      title: "Resources that power industries worldwide",
      read: "Read More",
    },
    {
      img: two,
      category: "Drilling services",
      title: "Maximise Recovery. minimise environmental footprint",
      read: "Read More",
    },
    {
      img: three,
      category: "Production service",
      title:
        "Installation and maintenance of production platforms and equipment",
      read: "Read More",
    },
    {
      img: four,
      category: "Supply and management",
      title: "How can we engineer a better future",
      read: "Read More",
    },
  ];

  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    pauseOnHover: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <Carousel
          autoPlay
          autoFocus
          emulateTouch
          infiniteLoop
          interval={8000}
          showArrows={false}
          transitionTime={3000}
          swipeable
          stopOnHover={false}
          showIndicators={false}
          showThumbs={false}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-slide h-[100vh] text-white relative transition-opacity duration-1000 ease-in-out flex flex-col justify-between"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(2,2,2,0.9), rgba(2,2,2,0)), url(${image.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Nav />

              <div className="max-w-[71rem] m-auto">
                <h4 className="text-start mt-8 font-medium text-sm uppercase font-section-one">
                  {image.category}
                </h4>
                <h1 className="pro-font text-6xl tracking-wider capitalize mt-8 text-start w-3/4">
                  {image.title}
                </h1>
              </div>

              <div className="flex gap-6 -mt-[120px] justify-center">
                <TimeRange
                  item={five}
                  newData={image.img}
                  content="Gold and natural resources"
                />
                <TimeRange
                  item={one}
                  newData={image.img}
                  content="Oil and gas exploration service"
                />
                <TimeRange
                  item={two}
                  newData={image.img}
                  content="Drilling services"
                />
                <TimeRange
                  item={three}
                  newData={image.img}
                  content="Production service"
                />
                <TimeRange
                  item={four}
                  newData={image.img}
                  content="Supply and management"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </Slider>
    </div>
  );
};

export default ImageSlide;
