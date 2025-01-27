import React, { useState, useEffect, useRef } from "react";
import AramcoTimeRane from "./AramcoTimeRane";
import './aramco.css'


const TimeRange = ({item,newData,content}) => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 3000);
    setIntervalId(newIntervalId);

    return () => clearInterval(newIntervalId);
  }, []);

  useEffect(() => {
    if (time === 2) {
      setTime(0);
    }
  }, [time]);

  return (
    <>
    
    <div id="text-to-hover" className="z-50">
      <div className=" flex items-baseline justify-end ">
        <div  className="h-[11rem]">
          <h5 className="font-medium text-white text-xs uppercase cursor-pointer font-section-one mb-2 text-start">
            {content}
          </h5>
          <div className="text-part-to-hide cursor-pointer">
            <img
            style={{borderRadius:'1.125rem 1.125rem 0 0',width:'270px'}}
              src={item}
              alt="img"
              className=" h-40 object-cover z-50 "
            />
          </div>
      {/* <div
        id="one"
        style={{
          width: "270px",
          height: "3px",
          backgroundColor: "gray",
          position: "relative",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: `${time * 100}%`,
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 50%, rgba(131,58,180,1) 100%)",
            transition: "width 3s linear",
            borderRadius: "40px",
          }}
        />
      </div> */}
      <li className="splide__slide is-visible is-active list-none">
      <div className="css-3um24x">
        <div className="pagination__progress css-13pjqad rounded-full">
          <div className="progress-bar"></div>
        </div>
      </div>
    </li>
      </div>
      </div>
    </div>
    </>
  );
};

export default TimeRange;
