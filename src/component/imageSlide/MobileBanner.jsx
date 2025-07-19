import React from 'react';
import one from "/assets/one1.webp";
import two from "/assets/one2.webp";
import three from "/assets/one3.webp";
import four from "/assets/one4.webp";
import Nav from './Nav';
import WhiteArrow from '../Arrows/WhiteArrow';
import { Link } from 'react-router-dom';
// import { Carousel } from "react-responsive-carousel";

const MobileBanner = () => {
  return (
    <div>
         {/* <Carousel
          // autoPlay={true}
          autoFocus={true}
          emulateTouch={true}
          infiniteLoop={true}
          interval={8000}
          showArrows={false}
          transitionTime={3000} // Adjust transition time
          swipeable={true} // Enable swiping for smoother transition
          stopOnHover={false} // Continue autoplay on hover
          showIndicators={false} // Hide indicators for cleaner look
          showThumbs={false} // Hide thumbnail images
        > */}
         
            <div
              className=" carousel-slide  h-[70vh] text-white relative transition-opacity duration-1000 ease-in-out  flex flex-col justify-between "
              style={{
                backgroundImage: `linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0)), url(${two})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            {/* <div className="flex flex-col justify-between "> */}
              <div>
                {/* <Nav /> */}
              </div>
              <div className="max-w-[71rem] m-auto px-4">
                <h4 className="text-start  mt-8 font-medium text-sm uppercase font-section-one ">
                Oil and gas exploration 
                </h4>
                <h1 className="pro-font text-5xl tracking-wider mt-8 text-start  ">
                Global Energy & Resources Organisations (GEROS)
                </h1>
                <Link to='/about-us' >
                <div className="flex mt-14 gap-4 items-center">
                  <h5 className="  text-start font-section-one font-medium text-lg">Read more</h5>

                  <div className="">
              <WhiteArrow />
            </div>
            
                </div>
                </Link>
              </div>
              
            {/* </div> */}
            </div>
        {/* </Carousel> */}
    </div>
  )
}

export default MobileBanner