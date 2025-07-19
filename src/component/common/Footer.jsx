import { useState } from "react";
import whiteLogo from "/assets/whiteLogo.webp";
import gerosLogo from "/assets/geros-logo.webp";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();

  window.addEventListener("scroll", function () {
    var footer = document.querySelector(".footer");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      // Adjust this value according to when you want the transition to occur
      footer.classList.add("show");
    } else {
      footer.classList.remove("show");
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlelocation = () => {
    scrollToTop();
    navigate("/");
  };

  return (
    <div
      className={`w-full bg-black text-white  footer  py-14 px-4 z-1 md:px-12 ${
        isHidden ? "hidden" : ""
      }`}
    >
      <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 gap-5 ">
        <div className=" flex flex-col sm:flex  items-center w-[100%]  lg:w-[70%] m-auto  p-4 font-semibold ">
          <div className="grid grid-cols-1 mt-1  md:grid-cols-1  gap-3 font-semibold  ">
            <p
              style={{ fontFamily: "Ghawar", fontWeight: 600 }}
              className="text-xl mt-3 text-center md:text-center font-medium mb-4 md:mb-6 uppercase "
            >
              Sectors{" "}
            </p>
            <div className="flex flex-col items-center space-y-2">
              <a
                href="/services/gold-and-natural-resources"
                className="pb-2 text-center"
              >
                Gold and  Resources
              </a>
              <a href="/services/oil-and-gas" className="pb-2 text-center ">
                Oil and Gas
              </a>
              <a href="/services/drilling" className="pb-2 text-center ">
                Drilling Services
              </a>
              <a href="/services/environmental-and-safety" className="pb-2 text-center ">
               Safety Services
              </a>
              <a href="/services/consulting-and-engineering" className="pb-2 text-center ">
                consulting 
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex  items-center w-[100%]  lg:w-[70%] m-auto p-4 font-semibold ">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3 ">
            <p
              style={{ fontFamily: "Ghawar", fontWeight: 600 }}
              className="text-xl mt-3 text-center md:text-center font-medium mb-4 md:mb-6 uppercase"
            >
              Markets{" "}
            </p>
            <span className="pb-2 text-center ">North America</span>
            <span className="pb-2 text-center"> Latin America</span>
            <span className="pb-2 text-center">Middle East</span>
            <span className="pb-2 text-center ">Africa</span>
          </div>
        </div>

        <div className="flex flex-col  sm:flex  w-[100%] items-center  lg:w-[70%] m-auto  p-4 font-semibold ">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            <p
              style={{ fontFamily: "Ghawar", fontWeight: 600 }}
              className="text-xl mt-3 text-center md:text-center font-medium mb-4 md:mb-6 uppercase"
            >
              About GEROS
            </p>
            <Link to="/why-we-exist" className=" text-center ">
              <span onClick={scrollToTop} className="pb-2 ">
                Why we exist
              </span>
            </Link>
            <span className="pb-2 text-center ">Our Collective History</span>
            <span className="pb-2 text-center ">Our Organisations</span>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-3 md:gap-7 lg:w-[70%] m-auto   p-4 w-[100%] ">
          <div class="flex flex-row md:flex-col gap-y-8 gap-4 ">
            <div class="flex justify-center items-center h-10 w-10 border-2 border-current rounded-full cursor-pointer group hover:border-blue-400">
              <svg
                id="a"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                class="inline-block align-middle flex-shrink-0 w-4 h-auto text-current fill-current group-hover:fill-blue-400"
              >
                <path d="m7.95,24h-2.01V6.37c0-3.51,2.86-6.37,6.37-6.37h6.63v2.01h-6.63c-2.4,0-4.36,1.96-4.36,4.36v17.63Z"></path>
                <rect x="6.94" y="11.52" width="9.47" height="2"></rect>
              </svg>
            </div>
            <div class="flex justify-center items-center h-10 w-10 border-2 border-current rounded-full cursor-pointer group hover:border-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                class="inline-block align-middle flex-shrink-0 w-4 h-auto text-current fill-current group-hover:fill-blue-400"
              >
                <path d="m14.24,10.12L22.94.02h-2.03l-7.57,8.79L7.33,0H.28l9.13,13.38L.29,23.97h2.03l7.99-9.28,6.35,9.31h7.05l-9.47-13.88Zm-3.75,2h0L3.32,1.6h3.17l14.19,20.79h-3.17l-7.01-10.28Z"></path>
              </svg>
            </div>
          </div>
          <div class="flex flex-row md:flex-col gap-y-8 gap-4">
            <div class="flex justify-center items-center h-10 w-10 border-2 border-current rounded-full cursor-pointer group hover:border-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                class="inline-block align-middle flex-shrink-0 w-4 h-auto text-current fill-transparent stroke-current group-hover:text-blue-500 group-hover:stroke-blue-500"
              >
                <path d="M6 7v17" stroke-width="2"></path>
                <path
                  d="M11 24v-16h4.71c1.76.09 5.29 1.19 5.29 4.88v11.12"
                  stroke-width="2"
                  fill="none"
                ></path>
                <circle cx="6" cy="2" r="2" stroke="none"></circle>
              </svg>
            </div>
            <div class="flex justify-center items-center h-10 w-10 border-2 border-current rounded-full cursor-pointer group hover:border-blue-400">
              <svg
                class="inline-block align-middle flex-shrink-0 w-4 h-auto text-current fill-transparent stroke-current group-hover:text-blue-500 group-hover:stroke-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  rx="8"
                  stroke-width="2"
                ></rect>
                <rect
                  x="7.4"
                  y="7.4"
                  width="9.2"
                  height="9.2"
                  rx="4.6"
                  stroke-width="2"
                  class="group-hover:stroke-blue-500"
                ></rect>
                <circle cx="18" cy="5.8" r="1" fill="#000"></circle>
              </svg>
            </div>
            <div class="flex justify-center items-center h-10 w-10 border-2 border-current rounded-full cursor-pointer group hover:border-blue-400">
              <svg
                class="inline-block align-middle flex-shrink-0 w-4 h-auto text-current fill-transparent stroke-current group-hover:text-blue-500 group-hover:stroke-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <rect
                  x="1"
                  y="3.4"
                  width="22"
                  height="17.2"
                  rx="6.2"
                  stroke-width="2"
                  class="group-hover:stroke-blue-500"
                ></rect>
                <path
                  d="M10.4 14.4V9.6L15.2 12L10.4 14.4Z"
                  class="group-hover:fill-blue-500"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="order-2 md:order-1 text-center md:text-left font-semibold w-full md:w-auto">
            &copy; 2025 Group GEROS.
          </div>
          <div className="order-3 md:order-2 flex justify-center my-4 md:my-0 w-full md:w-auto">
            <div
              className="flex justify-center items-center h-10 w-10 border-2 border-current rounded-full hover:border-blue-400 cursor-pointer"
              onClick={scrollToTop}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                className="hover:text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.0056 9.59845C20.4085 10.0014 20.4085 10.6548 20.0056 11.0577C19.6026 11.4607 18.9493 11.4607 18.5463 11.0577L12.9523 5.46372L12.9523 21.0682C12.9523 21.6055 12.5167 22.041 11.9794 22.041C11.4421 22.041 11.0066 21.6055 11.0066 21.0682L11.0066 5.46384L5.41267 11.0578C5.0097 11.4607 4.35636 11.4607 3.95339 11.0578C3.55042 10.6548 3.55042 10.0014 3.95339 9.59848L11.2496 2.30223C11.4307 2.12114 11.6624 2.02142 11.8992 2.0031C12.1894 1.98052 12.4873 2.08022 12.7093 2.3022L20.0056 9.59845Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="order-1 md:order-3 flex justify-center w-full md:w-auto mb-4 md:mb-0">
            <img
              onClick={() => handlelocation("/")}
              className="w-[150px] cursor-pointer"
              src={gerosLogo}
              alt="aramco logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
