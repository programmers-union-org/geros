import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import DiscoverHead from "../discover/DiscoverHead";

const DragCard = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <div>
      <DiscoverHead />
      <div
        {...events}
        ref={ref}
        className="flex overflow-x-scroll gap-4  scrollbar-hide pl-10 max-w-7xl m-auto  items-baseline  my-16"
      >
        <div className="flex-none  bg-bgSection01  w-72  py-8 cursor-pointer rounded-2xl">
          <img
            style={{ borderRadius: "1.125rem 1.125rem 0 1.125rem" }}
            className="w-72 object-cover h-56"
            src="https://www.aramco.com/-/jssmedia/images/header-slim/human-capital-development_ar.png?cx=0.5&cy=0.5&cw=672&ch=377"
            alt=""
          />
          <p className=" mt-5 text-base  font-semibold">
            Between month 4-5 the progress blew me away!{" "}
          </p>
          <div className="flex gap-2 items-center">
            <span className="  group-hover:text-gray-400 transition-colors duration-300 ease-in-out">
              &rarr;
            </span>

            <h4 className="text-blue-600 font-semibold text-sm tracking-widest">
              Learn More
            </h4>
          </div>
        </div>
        <div className="flex-none  bg-bgSection01   w-64  py-8 cursor-pointer rounded-2xl">
          <img
            style={{ borderRadius: "1.125rem 1.125rem 0 1.125rem" }}
            className="w-64 object-cover h-72 "
            src="https://www.aramco.com/-/jssmedia/aramco-com/com/f1_3.jpg?cx=0.5&cy=0.5&cw=287&ch=430"
            alt=""
          />
          <p className="font-semibold mt-5 text-base ">
            Been a huge joy for me. Within 5 months
          </p>
          <div className="flex gap-2 items-center">
            <span className="  group-hover:text-gray-400 transition-colors duration-300 ease-in-out">
              &rarr;
            </span>
            <h4 className="text-blue-600 font-semibold text-sm tracking-widest">
              Learn More
            </h4>
          </div>
        </div>
        <div className="flex-none  bg-bgSection01  w-72    py-8 cursor-pointer rounded-2xl">
          <img
            style={{ borderRadius: "1.125rem 1.125rem 0 1.125rem" }}
            className="w-72 object-cover h-64"
            src="https://www.aramco.com/-/jssmedia/aramco-com/com/manifa-oil-field-2.png?cx=0.5&cy=0.5&cw=316&ch=316"
            alt=""
          />

          <p className="font-semibold mt-5 text-base  ">
            The difference was very clear{" "}
          </p>
          <div className="flex gap-2 items-center">
            <span className="  group-hover:text-gray-400 transition-colors duration-300 ease-in-out">
              &rarr;
            </span>
            <h4 className="text-blue-600 font-semibold text-sm tracking-widest">
              Learn More
            </h4>
          </div>
        </div>
        <div className="flex-none  bg-bgSection01  w-72    py-8 cursor-pointer rounded-2xl">
          <img
            style={{ borderRadius: "1.125rem 1.125rem 0 1.125rem" }}
            className="w-72 object-cover h-64 "
            src="https://www.aramco.com/-/jssmedia/aramco-com/com/frontpagehome/carousel/our-perspective-square.png?cx=0.5&cy=0.5&cw=316&ch=316"
            alt=""
          />
          <p className="font-semibold mt-5 text-base ">
            I noticed my hair getting thicker in places that was thin and it{" "}
          </p>
          <div className="flex gap-2 items-center">
            <span className="  group-hover:text-gray-400 transition-colors duration-300 ease-in-out">
              &rarr;
            </span>
            <h4 className="text-blue-600 font-semibold text-sm tracking-widest">
              Learn More
            </h4>
          </div>
        </div>
        <div className="flex-none  bg-bgSection01  w-72    py-8 cursor-pointer rounded-2xl">
          <img
            style={{ borderRadius: "1.125rem 1.125rem 0 1.125rem" }}
            className="w-72 object-cover h-56 "
            src="https://www.aramco.com/-/jssmedia/images/header-images/carbon-management.png?cx=0.42&cy=0.54&cw=672&ch=377"
            alt=""
          />
          <p className="font-semibold mt-5 text-base  ">
            I noticed my hair getting thicker{" "}
          </p>
          <div className="flex gap-2 items-center">
            <span className="  group-hover:text-gray-400 transition-colors duration-300 ease-in-out">
              &rarr;
            </span>
            <h4 className="text-blue-600 font-semibold text-sm tracking-widest">
              Learn More
            </h4>
          </div>
        </div>
        <div className="flex-none  bg-bgSection01  w-72    py-8 cursor-pointer rounded-2xl">
          <img
            style={{ borderRadius: "1.125rem 1.125rem 0 1.125rem" }}
            className="w-72 object-cover h-56 "
            src="https://www.aramco.com/-/jssmedia/images/dhahran-al-midra.jpg?cx=0.5&cy=0.5&cw=672&ch=377"
            alt=""
          />
          <p className="font-semibold mt-5 text-base ">
            I noticed my hair getting thicker in{" "}
          </p>
          <div className="flex gap-2 items-center">
            <span className="  group-hover:text-gray-400 transition-colors duration-300 ease-in-out">
              &rarr;
            </span>
            <h4 className="text-blue-600 font-semibold text-sm tracking-widest">
              Learn More
            </h4>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DragCard;
