import { useEffect, useRef, useState } from "react";
import "./s1.css";
import "./s2.css";
import "./s3.css";
import "./s4.css";
import "./s6.css";
import "./s7.css";
import "./s8.css";
import "./s9.css";
import "./s10.css";
import './myStyle.css'
import close from "/assets/close.webp";
import menu from "/assets/menu.webp";
import whiteLogo from "/assets/whiteLogo.webp";
import singleLogos from "/assets/singleLogos.webp";
import { Link } from "react-router-dom";

const InnerHead = () => {
  const [navTextColor, setNavTextColor] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [textColor, setTextColor] = useState("text-white");
  const [menuOpacity, setMenuOpacity] = useState("opacity-0");
  const [scrollNav, setScrollNav] = useState("");
  const [marginTop, setMarginTop] = useState("65px");
  const [scrollBG, setScrollBG] = useState("bg-transparent");
  const [navHeight, setNavHeight] = useState("h-[8.375rem]");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [searchSection, setSearchSection] = useState(false);
  const [ topInDropDown , setTopAbsoluteInDropDown] = useState('top-[110px]')
  const [ topInDarkCover , setTopInDarkCover] = useState('top-[134px]');
  const [mobileHiddenHandle , setMobileHiddenHandle] = useState('hidden')


  const handleSearhSlide = () => {
      setScrollBG("bg-[#1F1F1F]");
      setSearchSection(!searchSection);
      document.body.style.overflow = "hidden";
    }
    const closeButtonHandleSearch = () =>{
      setScrollBG("bg-transparent");
      document.body.style.overflow = "auto";
    setSearchSection(!searchSection)

  }

  const inputRef = useRef(null);

  useEffect(() => {
    if (searchSection && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchSection]);

  useEffect(() => {
    const handleGlobalClick = (event) => {
      if (
        showDropdown &&
        !event.target.closest(".mainnav") &&
        !event.target.closest(".fade-animation")
      ) {
        setShowDropdown(false);
        setNavTextColor(null);
        setTextColor("text-white");
        setSelectedDropdown(null);
        document.body.style.overflow = "auto";
        setScrollBG("bg-transparent");
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [showDropdown]);

  const navBarClickHandle = (id) => {
    if (navTextColor === id && showDropdown) {
      setShowDropdown(false);
      setNavTextColor(null);
      document.body.style.overflow = "auto";
      setTextColor("text-white");
      setSelectedDropdown(null);
      setScrollBG("");
      setMenuOpacity("opacity-0");
    } else if (navTextColor !== id && showDropdown) {
      setMenuOpacity("opacity-0");
      setTimeout(() => {
        setNavTextColor(id);
        document.body.style.overflow = "hidden";
        setTextColor("text-slate-600");
        setSelectedDropdown(id);
        setShowDropdown(true);
        setMenuOpacity("opacity-100");
        setScrollBG("bg-[#1F1F1F]");
      }, 300); // Adjust the delay to match the CSS transition duration
    } else {
      setMenuOpacity("opacity-100");
      setNavTextColor(id);
      document.body.style.overflow = "hidden";
      setTextColor("text-slate-600");
      setSelectedDropdown(id);
      setShowDropdown(true);
      setScrollBG("bg-[#1F1F1F]");
    }
  };

  const listenScrollEvent = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < prevScrollY && currentScrollY > 0) {
      // Scrolling up
      setScrollNav("fixed");
      setMarginTop("35px");
      setScrollBG("bg-white");
      setNavHeight("h-[5rem]");
      setIsVisible(true);
      setTopAbsoluteInDropDown('top-[80px]')
      setTopInDarkCover('top-[78px]')
    } else if (currentScrollY === 0) {
      // At the top of the page
      setScrollNav("");
      setNavHeight("h-[8.375rem]");
      setMarginTop("65px");
      setScrollBG("bg-transparent");
      setIsVisible(true);
      setTopInDarkCover('top-[134px]')
      setTopAbsoluteInDropDown('top-[110px]')
    } else if (currentScrollY > prevScrollY) {
      // Scrolling down
      setScrollNav("fixed");
      setNavHeight("h-[5rem]");
      setMarginTop("35px");
      setTopInDarkCover('top-[78px]')
      setTopAbsoluteInDropDown('top-[80px]')
      setScrollBG("bg-white");
      setIsVisible(false);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [prevScrollY]);

  const dropDownAbout = [
    "About GEROS",
    "Why we exist",
    "Our Collective History",
    "Our Organisations",
  ];
  const dropDownSectors = [
    "Oil and Gas",
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
  const dropDownProjects = ["Mega Projects", "Classified till 2025"];

  // mobile view setup
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [secondMenuOpen , setSecondMenuOpen] = useState(false)
  const [indexDropDown , setIndexDropDown ] = useState()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const secondMenuBox =(id)=>{
    setSecondMenuOpen(!secondMenuOpen);
    setIndexDropDown(id)
  }
  const totalCloseButton = ()=>{
    setSecondMenuOpen(false)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  // mobile view setup

  return (
    <div className="">
      <header
        className={`aramcocom__header md:block hidden ${navHeight} z-[99] w-full ${scrollNav} ${scrollBG} ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } transform transition-transform duration-1000 ease-in-out`}
      >
        <div style={{ opacity: 1 }} className="css-0">
          <div className="aramcocom__header--inner scrolled-top css-1tw37jp">
            <div
              className={`aramcocom__header-bg css-1wjhv9m duration-200`}
            ></div>
            <div className="content-wrapper css-1v52ncy">
              <div className="css-1p6r4w5">
                <div className="css-1fa9vxh">
                  <div className="css-0">
                    <nav
                      role="navigation"
                      className="mainnav css-ai42w9 mainnav--active"
                    >
                      <ul
                        style={{
                          display: "flex",
                          gap: "40px",
                          listStyle: "none",
                          marginTop: `${marginTop}`,
                        }}
                        className="chakra-stack css-11qqkab"
                        aria-label="home"
                      >
                        <svg
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          onClick={handleSearhSlide}
                          width="20px"
                          height="20px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.98 25.98"
                          focusable="false"
                          className="chakra-icon css-12qnb82 w-6 h-6 cursor-pointer duration-500"
                        >
                          <path
                            d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z"
                            fill={`${
                              isHovered ? "rgb(0, 163, 224)" : "#C0C0C0"
                            }`}
                            fill-rule="evenodd"
                          ></path>
                          <path
                            d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z"
                            fill={`${
                              isHovered ? "rgb(0, 163, 224)" : "#C0C0C0"
                            }`}
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                        {[
                          "ABOUT GEROS",
                          "SECTORS",
                          "MARKETS",
                          "PROJECTS",
                          "INVESTMENTS",
                        ].map((text, index) => (
                          <li key={index} className="css-1bwdtru ">
                            <button
                              onClick={() => navBarClickHandle(index)}
                              className={`mainnav__item  ${
                                showDropdown ? "text-white" : ""
                              } ${
                                navTextColor === index
                                  ? "mainnav__item--active"
                                  : ""
                              } css-19tzk90`}
                            >
                              {text}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className={`fixed z-40 inset-y-0 left-0  w-[75%]   transform ${searchSection ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-70'}`} style={{ transition: 'transform 200ms ease-in-out, opacity 400ms ease-in-out' }}>
                        <div className='flex flex-col space-y-4 bg-[#1F1F1F]'>
                          <div className='flex flex-col space-y-4 '>
                              <div className="flex items-center space-x-4 md:space-x-14 mx-2 sm:mx-8">
                                <div>
                                  <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.98 25.98" focusable="false" class="chakra-icon css-12qnb82 w-6 h-6 cursor-pointer duration-500"><path d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z" fill="#C0C0C0" fill-rule="evenodd"></path><path d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z" fill="#C0C0C0" fill-rule="evenodd"></path></svg>
                                </div>
                                <input ref={inputRef} aria-label='search input' type="text" placeholder='Search... ' className={`${navHeight} bg-[#1F1F1F] outline-none  rounded-lg p-2 w-full`} />
                                <button aria-label='toggle search button' className=' bg-[#1F1F1F]   ' onClick={closeButtonHandleSearch}>
                                <img className="h-4 w-4" src={close} alt="close" />
                                </button>
                            </div>
                            {/* <div>
                               space for serch list sample
                            </div> */}
                          </div>
                        </div>
                      </div>

                  {/* click time background dark with opacity low  */}
                  {showDropdown  && (
                        <div
                          className={`subnav__wrapper css-1oupbnk absolute ${topInDarkCover} left-0  `}
                          style={{ opacity: 1, transform: "translateX(0%)" }}
                        ></div>
                      )}
                      { searchSection && (
                        <div
                          className={`subnav__wrapper css-1oupbnk absolute ${topInDarkCover} left-0  `}
                          style={{ opacity: 1, transform: "translateX(0%)" }}
                        ></div>
                      )}
{/* click time background dark with opacity low  */}
                    </nav>
                  </div>
                </div>
                <div className="css-178dr7">
                  <a
                    className="chakra-link css-1vdp24e"
                    href="#"
                    title="Aramco"
                  >
                    <div className="h-8">
                    {showDropdown || searchSection ? <img
                        className="w-[100px]"
                        src={singleLogos}
                        alt="aramco logo"
                      />:<img
                        className="w-[100px]"
                        src={whiteLogo}
                        alt="aramco logo"
                      /> }
                      
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showDropdown && (
        <DropdownMenu
          menuOpacity={menuOpacity}
          navBarClickHandle={navBarClickHandle}
          selectedDropdown={selectedDropdown}
          dropDownAbout={dropDownAbout}
          dropDownSectors={dropDownSectors}
          dropDownMarkets={dropDownMarkets}
          dropDownProjects={dropDownProjects}
          closeIcon={close}
          topInDropDown={topInDropDown}
        />
      )}
      <div>
        <header
          className={`aramcocom__header  ${scrollNav} ${scrollBG}  z-[99] w-full lg:hidden   block ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }  transform transition-transform duration-1000 ease-in-out`}
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          <div className="flex justify-between py-6 px-4 ">
            <div onClick={toggleMenu}>
              <img className="w-6 h-6" src={menu} alt="menu" />{" "}
            </div>
            <img className="w-auto h-6" src={whiteLogo} alt="menu" />
          </div>
        </header>
        <div
          className={`fixed z-50 bg-[#1F1F1F]  p-6 inset-y-0 right-0 w-full  transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className=" text-white h-full md:w-3/4 mx-auto ">
            <div className="flex justify-between px-4 mt-3">
              <div>
                <svg
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={()=>setMobileHiddenHandle('block')}
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.98 25.98"
                  focusable="false"
                  className="chakra-icon css-12qnb82 w-6 h-6 cursor-pointer duration-500"
                >
                  <path
                    d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z"
                    fill={`${isHovered ? "rgb(0, 163, 224)" : "#C0C0C0"}`}
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z"
                    fill={`${isHovered ? "rgb(0, 163, 224)" : "#C0C0C0"}`}
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M16 7.57143V16H10.4C6.47273 16 4.8 15.7143 2.76364 14.4286C0.945455 13.2143 0 11 0 8.07143C0 4.07143 2.69091 0 8.58182 0C13.4545 0 16 2.64286 16 7.57143ZM11.7091 8C11.7091 4.92857 10.6182 3.42857 8.14545 3.42857C5.67273 3.42857 4.14545 5.21429 4.14545 7.85714C4.14545 11.0714 5.74545 12.5 9.23636 12.5H11.7091V8Z"></path>
                </svg>
<Link to='/'>
                <span className=" font-normal ">Home</span>
                </Link>
              </div>
            </div>

            {/* mobile searh box */}
            <div className={`${mobileHiddenHandle} absolute top-0 left-0 fade-animation bg-[#1F1F1F] h-screen w-full py-6 `}>
<div className="flex justify-between px-4 items-center">

  <div className="rounded-full px-4 py-4 border-2 border-gray-200 flex gap-4 ">
  <svg
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.98 25.98"
                  focusable="false"
                  className="chakra-icon css-12qnb82 w-6 h-6 cursor-pointer duration-500"
                >
                  <path
                    d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z"
                    fill={`${isHovered ? "rgb(0, 163, 224)" : "#C0C0C0"}`}
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z"
                    fill={`${isHovered ? "rgb(0, 163, 224)" : "#C0C0C0"}`}
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <input className="outline-none bg-transparent" type="text" placeholder="Search..." />
  </div>
  <div onClick={()=>setMobileHiddenHandle('hidden')}>
                <img className="h-3.5 w-3.5 " src={close} alt="close" />
              </div>
</div>
</div>
            {/* mobile searh box */}

            <div className="flex justify-end items-center mt-12 ">
{/* 
              <button className="flex gap-2">
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  class="chakra-icon css-ye97nl"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.06094 20.3872C8.65797 20.7902 8.00463 20.7902 7.60166 20.3872C7.1987 19.9842 7.1987 19.3309 7.60166 18.9279L14.1685 12.3611L7.60171 5.79434C7.19875 5.39137 7.19875 4.73803 7.60171 4.33506C8.00468 3.9321 8.65802 3.93209 9.06099 4.33506L16.3572 11.6313C16.5958 11.8698 16.6931 12.1961 16.6493 12.5062C16.6191 12.7201 16.5217 12.9264 16.3572 13.0909L9.06094 20.3872Z"
                  ></path>
                </svg>{" "}
                <span>Back </span>
              </button> */}
              <div onClick={toggleMenu}>
                <img className="h-3.5 w-3.5 " src={close} alt="close" />
              </div>
            </div>
            <div className="flex flex-col p-4 space-y-4 ">
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  listStyle: "none",
                  marginTop: `15px`,
                }}
                className="chakra-stack css-11qqkab"
                aria-label="home"
              >
                {[
                  "ABOUT GEROS",
                  "SECTORS",
                  "MARKETS",
                  "PROJECTS",
                  "INVESTMENTS",
                ].map((text, index) => (
                  <li key={index} className="css-1bwdtru ">
                    <button
                      onClick={()=>secondMenuBox(index)}
                      className={`mainnav__item  flex justify-between  ${
                        navTextColor === index ? "mainnav__item--active" : " "} css-19tzk90`}
                    >
                      {text}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        class="chakra-icon css-ye97nl"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.06094 20.3872C8.65797 20.7902 8.00463 20.7902 7.60166 20.3872C7.1987 19.9842 7.1987 19.3309 7.60166 18.9279L14.1685 12.3611L7.60171 5.79434C7.19875 5.39137 7.19875 4.73803 7.60171 4.33506C8.00468 3.9321 8.65802 3.93209 9.06099 4.33506L16.3572 11.6313C16.5958 11.8698 16.6931 12.1961 16.6493 12.5062C16.6191 12.7201 16.5217 12.9264 16.3572 13.0909L9.06094 20.3872Z"
                        ></path>
                      </svg>{" "}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`fixed z-50    px-6 inset-y-[103px] right-0 w-full  transform ${
            secondMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className=" text-white h-full md:w-3/4 mx-auto ">
            {/* <div className="flex justify-between px-4 mt-3">
              <div>
                <svg
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.98 25.98"
                  focusable="false"
                  className="chakra-icon css-12qnb82 w-6 h-6 cursor-pointer duration-500"
                >
                  <path
                    d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z"
                    fill={`${isHovered ? "rgb(0, 163, 224)" : "#C0C0C0"}`}
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z"
                    fill={`${isHovered ? "rgb(0, 163, 224)" : "#C0C0C0"}`}
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M16 7.57143V16H10.4C6.47273 16 4.8 15.7143 2.76364 14.4286C0.945455 13.2143 0 11 0 8.07143C0 4.07143 2.69091 0 8.58182 0C13.4545 0 16 2.64286 16 7.57143ZM11.7091 8C11.7091 4.92857 10.6182 3.42857 8.14545 3.42857C5.67273 3.42857 4.14545 5.21429 4.14545 7.85714C4.14545 11.0714 5.74545 12.5 9.23636 12.5H11.7091V8Z"></path>
                </svg>

                <span className=" font-normal ">About us</span>
              </div>
            </div> */}
            <div className="flex justify-between items-center  ">
              <button  className="flex gap-2 items-center">
                {" "}
                <svg onClick={secondMenuBox} fill="white" height="14px" width="14px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xml:space="preserve">
<path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
	l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
	C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
</svg>
                
                <span onClick={secondMenuBox}>Back </span>
              </button>
              <div onClick={totalCloseButton}>
                <img className="h-3.5 w-3.5 " src={close} alt="close" />
              </div>
            </div>
            <div className="flex flex-col p-4 space-y-4 ">
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  listStyle: "none",
                  marginTop: `15px`,
                }}
                className="chakra-stack css-11qqkab"
                aria-label="home"
              >
              {indexDropDown === 0 && dropDownAbout.map((item,index)=>
                <li key={index} className="css-1bwdtru ">
                    <button
                      // onClick={secondMenuBox}
                      className={`mainnav__item  flex justify-between  ${
                        navTextColor === index ? "mainnav__item--active" : " "} css-19tzk90`}
                    >
                    {item}
                    </button>
                  </li>
              )}
              {indexDropDown === 1 && dropDownSectors.map((item,index)=>
                <li key={index} className="css-1bwdtru ">
                    <button
                      // onClick={secondMenuBox}
                      className={`mainnav__item  flex justify-between  ${
                        navTextColor === index ? "mainnav__item--active" : " "} css-19tzk90`}
                    >
                    {item}
                    </button>
                  </li>
              )}
              {indexDropDown === 2 && dropDownMarkets.map((item,index)=>
                <li key={index} className="css-1bwdtru ">
                    <button
                      // onClick={secondMenuBox}
                      className={`mainnav__item  flex justify-between  ${
                        navTextColor === index ? "mainnav__item--active" : " "} css-19tzk90`}
                    >
                    {item}
                    </button>
                  </li>
              )}
              {indexDropDown === 3 && dropDownProjects.map((item,index)=>
                <li key={index} className="css-1bwdtru ">
                    <button
                      // onClick={secondMenuBox}
                      className={`mainnav__item  flex justify-between  ${
                        navTextColor === index ? "mainnav__item--active" : " "} css-19tzk90`}
                    >
                    {item}
                    </button>
                  </li>
              )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DropdownMenu = ({
  menuOpacity,
  navBarClickHandle,
  selectedDropdown,
  dropDownAbout,
  dropDownSectors,
  dropDownMarkets,
  dropDownProjects,
  closeIcon,
  topInDropDown
}) => {
  return (
    <div
      style={{ transform: "translateX(0%)" }}
      className={`fixed fade-animation  ${topInDropDown} lg:block hidden top-[110px] z-[9999] left-0 h-screen ${menuOpacity} transform transition-transform duration-300 ease-in-out`}
    >
      <div className="bg-[#1F1F1F] h-screen text-white w-[21rem] pt-6">
        <div className="flex justify-end pr-4">
          <button onClick={() => navBarClickHandle(selectedDropdown)}>
            <img className="h-3.5 w-3.5" src={closeIcon} alt="close" />
          </button>
        </div>
        <ul className="flex flex-col mt-2 justify-center px-16 gap-5 font-['ManifaPro2',sans-serif]">
          {selectedDropdown === 0 &&
            dropDownAbout.map((item, index) => (
              <Link to={`/${item.toLowerCase().split(' ').join('-')}`}>
              <li
              onClick={() => navBarClickHandle(selectedDropdown)}
                key={index}
                className="drowpDownLineAndColor text-[#C0C0C0] w-fit cursor-pointer"
              >
                {item}
              </li>
              </Link>
            ))}
          {selectedDropdown === 1 &&
            dropDownSectors.map((item, index) => (
              <Link to='oil-and-gas'>
              <li
               onClick={() => navBarClickHandle(selectedDropdown)}
                key={index}
                className="text-[#C0C0C0] drowpDownLineAndColor w-fit cursor-pointer"
              >
                {item}
              </li>
              </Link>
            ))}
          {selectedDropdown === 2 &&
            dropDownMarkets.map((item, index) => (
              <li
               onClick={() => navBarClickHandle(selectedDropdown)}
                key={index}
                className="drowpDownLineAndColor text-[#C0C0C0] w-fit cursor-pointer"
              >
                {item}
              </li>
            ))}
          {selectedDropdown === 3 &&
            dropDownProjects.map((item, index) => (
              <li
               onClick={() => navBarClickHandle(selectedDropdown)}
                key={index}
                className="drowpDownLineAndColor text-[#C0C0C0] w-fit cursor-pointer"
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default InnerHead;
