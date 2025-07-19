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
import "./myStyle.css";
import "../../../styl.css";
import one from "/assets/one1.webp";
import two from "/assets/one2.webp";
import three from "/assets/one3.webp";
import four from "/assets/one4.webp";
import five from "/assets/one5.webp";

const CssSite = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const intervalRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isBarHovered, setIsBarHovered] = useState(false);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 8000);
  };

  // Set up the interval to change active index every 8 seconds
  useEffect(() => {
    startInterval();

    // Clean up the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  // Handle onClick, clear the interval, update the index, and restart the interval
  const handleClick = (index) => {
    clearInterval(intervalRef.current);
    setActiveIndex(index);
    startInterval();
    handleMouseLeave();
  };
  const handleBarMouseEnter = () => {
    console.log("Mouse entered");
    setIsBarHovered(true);
  };

  const handleBarMouseLeave = () => {
    console.log("Mouse left");
    setIsBarHovered(false);
  };

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div style={{ fontFamily: "ManifaPro2", fontWeight: 300 }}>
      {/* <HtmlHead /> */}
      <section class="ribbon css-xz8nlg">
        <div
          className="splide slide__wrapper splide--fade splide--ltr splide--draggable is-active is-overflow is-initialized"
          id="splide01"
          role="region"
          aria-roledescription="carousel"
          style={{ maxWidth: "100vw" }}
        >
          <div
            className="splide__track splide__track--fade splide__track--ltr splide__track--draggable"
            id="splide01-track"
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
            aria-live="off"
            aria-atomic="true"
          >
            <ul className="splide__list" id="splide01-list" role="presentation">
              {/* 1) Gold and natural resources */}
              <li
                className={`splide__slide ${
                  activeIndex === 0 ? "is-active is-visible" : ""
                }`}
                data-tracking-type="visibility"
                data-tracking-id="homepage_hero_carousel"
                data-tracking-data='{"type":"auto slide","text":"Gold and natural resources","index":0,"count":5}'
                id="splide01-slide01"
                role="group"
                aria-roledescription="slide"
                aria-label="1 of 5"
                style={{ width: "calc(100%)", transform: "translateX(0%)" }}
              >
                <div className="css-15cod9l">
                  <div className="slide__background css-0">
                    <img
                      alt="Gold and natural resources"
                      src={`${five}?cx=0.5&cy=0.5`}
                      className="chakra-image css-0"
                      sizes="100vw"
                      srcSet={`
            ${five}?cx=0.5&cy=0.5&w=500   500w,
            ${five}?cx=0.5&cy=0.5&w=1000 1000w,
            ${five}?cx=0.5&cy=0.5&w=1760 1760w,
            ${five}?cx=0.5&cy=0.5&w=2000 2000w
          `}
                    />
                  </div>
                  <div className="slide__content css-st6rvq">
                    <div className="css-19va5fc ">
                      <div className="slide__trumpet css-rszk63">
                        <span className="chakra-link css-1vdp24e">
                          <a href="#" target="_blank">
                            <p className="chakra-text css-9vnofn">
                              Gold and natural resources
                            </p>
                          </a>
                        </span>
                      </div>
                      <span className="slide__headline">
                        <span
                          className="chakra-link css-1vdp24e"
                          data-group="true"
                        >
                          <a
                            className="chakra-link css-1vdp24e"
                            href="#"
                            tabIndex="-1"
                          >
                            <h2 className="chakra-heading css-19u3rc4 text-5xl">
                              Unlocking Global Opportunities in Gold and
                              Resource Markets
                            </h2>
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>

              {/* 2) Q1 2024 results */}
              <li
                className={`splide__slide ${
                  activeIndex === 1 ? "is-active is-visible" : ""
                }`}
                data-tracking-type="visibility"
                data-tracking-id="homepage_hero_carousel"
                data-tracking-data='{"type":"auto slide","text":"Saudi Aramco published its Q1 2024 results on May 07, 2024.","index":1,"count":5}'
                id="splide01-slide02"
                role="group"
                aria-roledescription="slide"
                aria-label="2 of 5"
                style={{ width: "calc(100%)", transform: "translateX(-100%)" }}
                data-gtm-vis-recent-on-screen9071102_283="1540"
                data-gtm-vis-first-on-screen9071102_283="1540"
                data-gtm-vis-total-visible-time9071102_283="1000"
                data-gtm-vis-recent-on-screen9071102_313="1541"
                data-gtm-vis-first-on-screen9071102_313="1541"
                data-gtm-vis-total-visible-time9071102_313="1000"
                data-gtm-vis-has-fired9071102_283="1"
                data-gtm-vis-has-fired9071102_313="1"
              >
                <div className="css-15cod9l">
                  <div className="slide__background css-0">
                    <img
                      fetchPriority="high"
                      loading="eager"
                      alt="Q1 2024 results announcement"
                      src={`${one}?cx=0.97&cy=0.48`}
                      className="chakra-image css-0"
                      sizes="100vw"
                      srcSet={`
            ${one}?cx=0.97&cy=0.48&w=500   500w,
            ${one}?cx=0.97&cy=0.48&w=1000 1000w,
            ${one}?cx=0.97&cy=0.48&w=1760 1760w,
            ${one}?cx=0.97&cy=0.48&w=2000 2000w
          `}
                    />
                  </div>
                  <div className="slide__content css-st6rvq">
                    <div className="css-19va5fc">
                      <div className="slide__trumpet css-rszk63">
                        <span
                          className="chakra-link css-1vdp24e"
                          data-group="true"
                        >
                          <a
                            className="chakra-link css-1vdp24e"
                            href="#"
                            target="_blank"
                          >
                            <p className="chakra-text css-9vnofn">
                              Oil and gas exploration service
                            </p>
                          </a>
                        </span>
                      </div>
                      <span className="slide__headline">
                        <span
                          className="chakra-link css-1vdp24e"
                          data-group="true"
                        >
                          <a
                            className="chakra-link css-1vdp24e"
                            href="#"
                            target="_blank"
                          >
                            <h1 className="chakra-heading css-19u3rc4 text-5xl">
                              Resources that power industries worldwide
                            </h1>
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>

              {/* 3) Drones */}
              <li
                className={`splide__slide ${
                  activeIndex === 2 ? "is-active is-visible" : ""
                }`}
                data-tracking-type="visibility"
                data-tracking-id="homepage_hero_carousel"
                data-tracking-data='{"type":"auto slide","text":"Flying high: how drones are optimizing Aramco’s operations","index":2,"count":5}'
                id="splide01-slide03"
                role="group"
                aria-roledescription="slide"
                aria-label="3 of 5"
                style={{ width: "calc(100%)", transform: "translateX(-200%)" }}
                aria-hidden={activeIndex !== 2}
              >
                <div className="css-15cod9l">
                  <div className="slide__background css-0">
                    <img
                      alt="How drones are optimizing Aramco’s operations"
                      src={`${two}?cx=0.49&cy=0.7`}
                      className="chakra-image css-0"
                      sizes="100vw"
                      srcSet={`
            ${two}?cx=0.49&cy=0.7&w=500   500w,
            ${two}?cx=0.49&cy=0.7&w=1000 1000w,
            ${two}?cx=0.49&cy=0.7&w=1760 1760w,
            ${two}?cx=0.49&cy=0.7&w=2000 2000w
          `}
                    />
                  </div>
                  <div className="slide__content css-st6rvq">
                    <div className="css-19va5fc">
                      <div className="slide__trumpet css-rszk63">
                        <span
                          className="chakra-link css-1vdp24e"
                          data-group="true"
                        >
                          <a
                            className="chakra-link css-1vdp24e"
                            href="#"
                            tabIndex="-1"
                          >
                            <p className="chakra-text css-9vnofn">
                              Drilling services
                            </p>
                          </a>
                        </span>
                      </div>
                      <span className="slide__headline">
                        <span
                          className="chakra-link css-1vdp24e"
                          data-group="true"
                        >
                          <a
                            className="chakra-link css-1vdp24e"
                            href="#"
                            tabIndex="-1"
                          >
                            <h2 className="chakra-heading css-19u3rc4 text-5xl">
                              Maximize Recovery. Minimize environmental
                              footprint
                            </h2>
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>

              {/* 4) Aston Martin partnership */}
              <li
                className={`splide__slide ${
                  activeIndex === 3 ? "is-active is-visible" : ""
                }`}
                data-tracking-type="visibility"
                data-tracking-id="homepage_hero_carousel"
                data-tracking-data='{"type":"auto slide","text":"The Aramco and Aston Martin Racing strategic partnership","index":3,"count":5}'
                id="splide01-slide04"
                role="group"
                aria-roledescription="slide"
                aria-label="4 of 5"
                style={{ width: "calc(100%)", transform: "translateX(-300%)" }}
                aria-hidden={activeIndex !== 3}
              >
                <div className="css-15cod9l">
                  <div className="slide__background css-0">
                    <img
                      alt="Aramco Aston Martin F1 car"
                      src={`${three}?cx=0.45&cy=0.95&mw=10`}
                      className="chakra-image css-0"
                      sizes="100vw"
                      srcSet={`
            ${three}?cx=0.45&cy=0.95&w=500   500w,
            ${three}?cx=0.45&cy=0.95&w=1000 1000w,
            ${three}?cx=0.45&cy=0.95&w=1760 1760w,
            ${three}?cx=0.45&cy=0.95&w=2000 2000w
          `}
                    />
                    <span className="splide__spinner"></span>
                  </div>
                  <div className="slide__content css-st6rvq">
                    <div className="css-19va5fc">
                      <div className="slide__trumpet css-rszk63">
                        <span
                          className="chakra-link css-1vdp24e"
                          data-group="true"
                        >
                          <a
                            className="chakra-link css-1vdp24e"
                            href="#"
                            tabIndex="-1"
                          >
                            <p className="chakra-text css-9vnofn">
                              Production service
                            </p>
                          </a>
                        </span>
                      </div>
                      <span className="slide__headline">
                        <span
                          className="chakra-link css-1vdp24e"
                          data-group="true"
                        >
                          <a
                            className="chakra-link css-1vdp24e"
                            href="#"
                            tabIndex="-1"
                          >
                            <h2 className="chakra-heading css-19u3rc4 text-5xl">
                              Installation and maintenance of production
                              platforms and equipment
                            </h2>
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>

              {/* 5) Engineer a better future */}
              <li
                className={`splide__slide ${
                  activeIndex === 4 ? "is-active is-visible" : ""
                }`}
                data-tracking-type="visibility"
                data-tracking-id="homepage_hero_carousel"
                data-tracking-data='{"type":"auto slide","text":"How can we help engineer a better future?","index":4,"count":5}'
                id="splide01-slide05"
                role="group"
                aria-roledescription="slide"
                aria-label="5 of 5"
                style={{ width: "calc(100%)", transform: "translateX(-400%)" }}
                aria-hidden={activeIndex !== 4}
              >
                <div className="css-15cod9l">
                  <div className="slide__background css-0">
                    <img
                      alt="Earth in space"
                      src={`${four}?cx=0.5&cy=0.5`}
                      className="chakra-image css-0"
                      sizes="100vw"
                      srcSet={`
            ${four}?cx=0.5&cy=0.5&w=500   500w,
            ${four}?cx=0.5&cy=0.5&w=1000 1000w,
            ${four}?cx=0.5&cy=0.5&w=1760 1760w,
            ${four}?cx=0.5&cy=0.5&w=2000 2000w
          `}
                    />
                  </div>
                  <div className="slide__content css-st6rvq">
                    <div className="css-19va5fc">
                      <div className="slide__trumpet css-rszk63">
                        <span
                          className="chakra-link css-1vdp24e"
                          data-group="true"
                        >
                          <a
                            className="chakra-link css-1vdp24e"
                            href="#"
                            tabIndex="-1"
                          >
                            <p className="chakra-text css-9vnofn">
                              Supply and management
                            </p>
                          </a>
                        </span>
                      </div>
                      <span className="slide__headline">
                        <span
                          className="chakra-link css-1vdp24e"
                          data-group="true"
                        >
                          <a
                            className="chakra-link css-1vdp24e"
                            href="#"
                            tabIndex="-1"
                          >
                            <h2 className="chakra-heading css-19u3rc4 text-5xl">
                              How can we engineer a better future
                            </h2>
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- progress bar in transtion time  --> */}
        <div class="pagination__wrapper css-0">
          <div class="content-wrapper css-1wfk2lp">
            <div
              class="splide splide--slide splide--ltr splide--nav is-active is-initialized"
              id="splide02"
              role="region"
              aria-roledescription="carousel"
            >
              <div
                class="splide__track splide__track--slide splide__track--ltr splide__track--nav"
                id="splide02-track"
                style={{ paddingLeft: " opx", paddingRight: "0px" }}
              >
                <ul
                  className="splide__list"
                  id="splide02-list"
                  role="presentation"
                  style={{ transform: "translateX(0px)" }}
                >
                  {/* 1) Gold and natural resources */}
                  <li
                    className={`splide__slide ${
                      activeIndex === 0 ? "is-active" : ""
                    } ${activeIndex === 0 ? "is-visible" : ""}`}
                    data-tracking-type="visibility"
                    data-tracking-id="homepage_hero_carousel"
                    data-tracking-data='{"type":"hover slide up","text":"Gold and natural resources","index":0,"count":5}'
                    id="splide02-slide01"
                    role="button"
                    aria-label="Go to slide 1"
                    aria-current={activeIndex === 0}
                    tabIndex={activeIndex === 0 ? 0 : -1}
                    aria-controls="splide01-slide05"
                  >
                    <div className="css-3um24x" onMouseLeave={handleMouseLeave}>
                      <p
                        className={`chakra-text css-bxwo5k text-[0.69rem] ${
                          isHovered == 1 ? "opacity-100" : "opacity-50"
                        }`}
                        onMouseEnter={() => handleMouseEnter(1)}
                      >
                        Gold and natural resources
                      </p>
                      {activeIndex + 1 !== 1 && (
                        <div className="css-13o7eu2">
                          <div
                            className="chakra-collapse"
                            style={{
                              overflow: "hidden",
                              borderRadius: "10px 10px 0 10px",
                              display: "block",
                              opacity: isHovered === 1 ? "1" : "0",
                              maxHeight: isHovered === 1 ? "500px" : "0px",
                              transition:
                                "opacity 0.5s, max-height 0.5s, transform 0.7s",
                              transform:
                                isHovered === 1
                                  ? "translateY(0)"
                                  : "translateY(100%)",
                            }}
                          >
                            <div
                              onClick={() => handleClick(0)}
                              className="chakra-aspect-ratio css-19nt5td"
                            >
                              <img
                                alt="Gold and natural resources"
                                src={`${five}?cx=0.5&cy=0.5&w=300`}
                                className="chakra-image css-1pwom1"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <div
                        onMouseEnter={handleBarMouseEnter}
                        onMouseLeave={handleBarMouseLeave}
                        className={`pagination__progress ${
                          isBarHovered ? "css-1qlx8sc" : "css-13pjqad"
                        }`}
                      ></div>
                    </div>
                  </li>

                  {/* 2) Oil and gas exploration service */}
                  <li
                    className={`splide__slide ${
                      activeIndex === 1 ? "is-active" : ""
                    } ${activeIndex === 1 ? "is-visible" : ""}`}
                    data-tracking-type="visibility"
                    data-tracking-id="homepage_hero_carousel"
                    data-tracking-data='{"type":"hover slide up","text":"Oil and gas exploration service","index":1,"count":5}'
                    id="splide02-slide02"
                    role="button"
                    aria-label="Go to slide 2"
                    aria-current={activeIndex === 1}
                    tabIndex={activeIndex === 1 ? 0 : -1}
                    aria-controls="splide01-slide01"
                  >
                    <div className="css-3um24x" onMouseLeave={handleMouseLeave}>
                      <p
                        className={`chakra-text css-bxwo5k text-[0.69rem] ${
                          isHovered == 2 ? "opacity-100" : "opacity-50"
                        }`}
                        onMouseEnter={() => handleMouseEnter(2)}
                      >
                        Oil and gas exploration service
                      </p>
                      {activeIndex + 1 !== 2 && (
                        <div className="css-13o7eu2">
                          <div
                            className="chakra-collapse"
                            style={{
                              overflow: "hidden",
                              borderRadius: "10px 10px 0 10px",
                              display: "block",
                              opacity: isHovered === 2 ? "1" : "0",
                              maxHeight: isHovered === 2 ? "500px" : "0px",
                              transition:
                                "opacity 0.5s, max-height 0.5s, transform 0.7s",
                              transform:
                                isHovered === 2
                                  ? "translateY(0)"
                                  : "translateY(100%)",
                            }}
                          >
                            <div
                              onClick={() => handleClick(1)}
                              className="chakra-aspect-ratio css-19nt5td"
                            >
                              <img
                                alt="Q1 2024 results announcement"
                                src={`${one}?cx=0.97&cy=0.48&w=300`}
                                className="chakra-image css-1pwom1"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <div
                        onMouseEnter={handleBarMouseEnter}
                        onMouseLeave={handleBarMouseLeave}
                        className={`pagination__progress ${
                          isBarHovered ? "css-1qlx8sc" : "css-13pjqad"
                        }`}
                      ></div>
                    </div>
                  </li>

                  {/* 3) Drilling services */}
                  <li
                    className={`splide__slide ${
                      activeIndex === 2 ? "is-active" : ""
                    } ${activeIndex === 2 ? "is-visible" : ""}`}
                    data-tracking-type="visibility"
                    data-tracking-id="homepage_hero_carousel"
                    data-tracking-data='{"type":"hover slide up","text":"Drilling services","index":2,"count":5}'
                    id="splide02-slide03"
                    role="button"
                    aria-label="Go to slide 3"
                    aria-current={activeIndex === 2}
                    tabIndex={activeIndex === 2 ? 0 : -1}
                    aria-controls="splide01-slide02"
                  >
                    <div className="css-3um24x" onMouseLeave={handleMouseLeave}>
                      <p
                        className={`chakra-text css-bxwo5k text-[0.69rem] ${
                          isHovered == 3 ? "opacity-100" : "opacity-50"
                        }`}
                        onMouseEnter={() => handleMouseEnter(3)}
                      >
                        Drilling services
                      </p>
                      {activeIndex + 1 !== 3 && (
                        <div className="css-13o7eu2">
                          <div
                            className="chakra-collapse"
                            style={{
                              overflow: "hidden",
                              borderRadius: "10px 10px 0 10px",
                              display: "block",
                              opacity: isHovered === 3 ? "1" : "0",
                              maxHeight: isHovered === 3 ? "500px" : "0px",
                              transition:
                                "opacity 0.5s, max-height 0.5s, transform 0.7s",
                              transform:
                                isHovered === 3
                                  ? "translateY(0)"
                                  : "translateY(100%)",
                            }}
                          >
                            <div
                              onClick={() => handleClick(2)}
                              className="chakra-aspect-ratio css-19nt5td"
                            >
                              <img
                                alt="How drones are optimizing Aramco’s operations"
                                src={`${two}?cx=0.49&cy=0.7&w=300`}
                                className="chakra-image css-1pwom1"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <div
                        onMouseEnter={handleBarMouseEnter}
                        onMouseLeave={handleBarMouseLeave}
                        className={`pagination__progress ${
                          isBarHovered ? "css-1qlx8sc" : "css-13pjqad"
                        }`}
                      ></div>
                    </div>
                  </li>

                  {/* 4) Production service */}
                  <li
                    className={`splide__slide ${
                      activeIndex === 3 ? "is-active" : ""
                    } ${activeIndex === 3 ? "is-visible" : ""}`}
                    data-tracking-type="visibility"
                    data-tracking-id="homepage_hero_carousel"
                    data-tracking-data='{"type":"hover slide up","text":"Production service","index":3,"count":5}'
                    id="splide02-slide04"
                    role="button"
                    aria-label="Go to slide 4"
                    aria-current={activeIndex === 3}
                    tabIndex={activeIndex === 3 ? 0 : -1}
                    aria-controls="splide01-slide03"
                  >
                    <div className="css-3um24x" onMouseLeave={handleMouseLeave}>
                      <p
                        className={`chakra-text css-bxwo5k text-[0.69rem] ${
                          isHovered == 4 ? "opacity-100" : "opacity-50"
                        }`}
                        onMouseEnter={() => handleMouseEnter(4)}
                      >
                        Production service
                      </p>
                      {activeIndex + 1 !== 4 && (
                        <div className="css-13o7eu2">
                          <div
                            className="chakra-collapse"
                            style={{
                              overflow: "hidden",
                              borderRadius: "10px 10px 0 10px",
                              display: "block",
                              opacity: isHovered === 4 ? "1" : "0",
                              maxHeight: isHovered === 4 ? "500px" : "0px",
                              transition:
                                "opacity 0.5s, max-height 0.5s, transform 0.7s",
                              transform:
                                isHovered === 4
                                  ? "translateY(0)"
                                  : "translateY(100%)",
                            }}
                          >
                            <div
                              onClick={() => handleClick(3)}
                              className="chakra-aspect-ratio css-19nt5td"
                            >
                              <img
                                alt="Aramco Aston Martin F1 car"
                                src={`${three}?cx=0.45&cy=0.95&w=300`}
                                className="chakra-image css-1pwom1"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <div
                        onMouseEnter={handleBarMouseEnter}
                        onMouseLeave={handleBarMouseLeave}
                        className={`pagination__progress ${
                          isBarHovered ? "css-1qlx8sc" : "css-13pjqad"
                        }`}
                      ></div>
                    </div>
                  </li>

                  {/* 5) Supply and management */}
                  <li
                    className={`splide__slide ${
                      activeIndex === 4 ? "is-active" : ""
                    } ${activeIndex === 4 ? "is-visible" : ""}`}
                    data-tracking-type="visibility"
                    data-tracking-id="homepage_hero_carousel"
                    data-tracking-data='{"type":"hover slide up","text":"Supply and management","index":4,"count":5}'
                    id="splide02-slide05"
                    role="button"
                    aria-label="Go to slide 5"
                    aria-current={activeIndex === 4}
                    tabIndex={activeIndex === 4 ? 0 : -1}
                    aria-controls="splide01-slide04"
                  >
                    <div className="css-3um24x" onMouseLeave={handleMouseLeave}>
                      <p
                        className={`chakra-text css-clbvj9 text-[0.69rem] ${
                          isHovered == 5 ? "opacity-100" : "opacity-50"
                        }`}
                        onMouseEnter={() => handleMouseEnter(5)}
                      >
                        Supply and management
                      </p>
                      {activeIndex + 1 !== 5 && (
                        <div className="css-13o7eu2">
                          <div
                            className="chakra-collapse"
                            style={{
                              overflow: "hidden",
                              borderRadius: "10px 10px 0 10px",
                              display: "block",
                              opacity: isHovered === 5 ? "1" : "0",
                              maxHeight: isHovered === 5 ? "500px" : "0px",
                              transition:
                                "opacity 0.5s, max-height 0.5s, transform 1s",
                              transform:
                                isHovered === 5
                                  ? "translateY(0)"
                                  : "translateY(100%)",
                            }}
                          >
                            <div
                              onClick={() => handleClick(4)}
                              className="chakra-aspect-ratio css-19nt5td bg-white"
                            >
                              <img
                                alt="Earth in space"
                                src={`${four}?cx=0.5&cy=0.5&w=300`}
                                className="chakra-image css-1pwom1"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <div
                        onMouseEnter={handleBarMouseEnter}
                        onMouseLeave={handleBarMouseLeave}
                        className={`pagination__progress ${
                          isBarHovered ? "css-1qlx8sc" : "css-13pjqad"
                        }`}
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- progress bar in transtion time  --> */}
      </section>
    </div>
  );
};

export default CssSite;
