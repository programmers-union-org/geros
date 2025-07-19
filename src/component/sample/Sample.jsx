import React  from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TimeRange from "../timeRange/TimeRange";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "/assets/one1.webp";
import two from "/assets/one2.webp";
import three from "/assets/one3.webp";
import four from "/assets/one4.webp";
import Slider from "react-slick";


const Sample = () => {
    const images = [
        {
            img: one,
            category: "Results announcement ",
            title: "The Aramco and Aston Martin Racing strategic partnership ",
            read: "Read More ",
        },
        {
            img: two,
            category: "Elements magazine ",
            title: "How can we help engineer a better future? ",
            read: "Read More ",
        },
        {
            img: three,
            category: "Results announcement ",
            title: "The Aramco and Aston Martin Racing strategic partnership ",
            read: "Read More ",
        },
        {
            img: four,
            category: "Elements magazine ",
            title: "How can we help engineer a better future? ",
            read: "Read More ",
        },
    ];

    const settings = {
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
        focusOnSelect: true,
        pauseOnHover: false
    };
    const gradientStyle = {
      background: "linear-gradient(to right, rgba(2, 2, 2, 0.9), rgba(2, 2, 2, 0))",
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            style={gradientStyle}
                        >
                        
                            <img src={image.img} alt="img" style={{ width: "100%", height: "100%",gradientStyle}} className="object-cover w-full h-full"/>

                           <div className="absolute w-full p-5 bottom-0 inset-x-0 text-white">
                                <h6 className="text-start px-16 pt-1">Global contacts</h6>
    
                                {/* <SampleNav /> */}
    
                                <div className="max-w-[71rem] m-auto">
    
    
                                    <h4 className="text-start  mt-8 font-medium text-sm uppercase font-section-one ">{image.category}</h4>
                                    <h1 className="pro-font text-2xl tracking-wider mt-8 text-start  w-3/4">{image.title}</h1>
                                    <div className="flex mt-14 gap-4 items-center">
                                        <h5 className="  text-start font-section-one font-medium text-lg">{image.read}</h5>
                                        <div className="">
                                            {/* <WhiteArrow /> */}
                                        </div>
                                    </div>
                                    <div className=" flex gap-6 -mt-[120px]  justify-center">
                                        <TimeRange item={one} newData={image.img} />
                                        <TimeRange item={two} newData={image.img} />
                                        <TimeRange item={three} newData={image.img} />
                                        <TimeRange item={four} newData={image.img} />
    
                                    </div>
                                </div>
                           </div>
                        </div>

                    ))}

                </Slider>
            </div>
        </>
    );
};

export default Sample;