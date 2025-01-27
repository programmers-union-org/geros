import React, { useEffect, useRef, useState } from "react";
import './s1.css'
import './s2.css'
import './s3.css'
import './s4.css'
import './s6.css'
import './s7.css'
import './s8.css'
import './s9.css'
import './s10.css'
import './myStyle.css'
import '../../styl.css'
import HtmlHead from "./HtmlHead";
import one from "../../assets/one1.jpg";
import two from "../../assets/one2.jpg";
import three from "../../assets/one3.jpg";
import four from "../../assets/one4.jpg";



const CssSite = () => {

  const [activeIndex, setActiveIndex] = useState(0);



  const intervalRef = useRef(null);
 
  const [isHovered, setIsHovered] = useState(false);
  const [isBarHovered, setIsBarHovered] = useState(false);


  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
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
    handleMouseLeave()
  };
  const handleBarMouseEnter = () => {
    console.log('Mouse entered');
    setIsBarHovered(true);
  };
  
  const handleBarMouseLeave = () => {
    console.log('Mouse left');
    setIsBarHovered(false);
  };

  const handleMouseEnter = (index) => {
    setIsHovered(index);
    
  
  };



  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div style={{fontFamily:'ManifaPro2',fontWeight:300}}>
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
            <ul class="splide__list" id="splide01-list" role="presentation">
              <li
                // class="splide__slide is-active is-visible"
                className={`splide__slide ${activeIndex === 0 ? 'is-active' : ''} ${activeIndex === 0 ? 'is-visible' : ''}`}
              
                data-tracking-type="visibility"
                data-tracking-id="homepage_hero_carousel"
                data-tracking-data='{"type":"auto slide","text":"Saudi Aramco published its Q1 2024 results on May 07, 2024.","index":1,"count":4}'
                id="splide01-slide01"
                role="group"
                aria-roledescription="slide"
                aria-label="1 of 4"
                style={{  width: " calc(100%)", transform: "translateX(0%)" }}
                data-gtm-vis-recent-on-screen9071102_283="1540"
                data-gtm-vis-first-on-screen9071102_283="1540"
                data-gtm-vis-total-visible-time9071102_283="1000"
                data-gtm-vis-recent-on-screen9071102_313="1541"
                data-gtm-vis-first-on-screen9071102_313="1541"
                data-gtm-vis-total-visible-time9071102_313="1000"
                data-gtm-vis-has-fired9071102_283="1"
                data-gtm-vis-has-fired9071102_313="1"
              >
                <div class="css-15cod9l">
                  <div class="slide__background css-0">
                    <img
                      alt="Q1 2024 results announcement"
                      // src="https://www.aramco.com/-/jssmedia/images/investors/2024/q1-2024-results-announcement.jpg?cx=0.97&amp;cy=0.48"
                      src={`${one}?cx=0.97&amp;cy=0.48`}
                   
                      class="chakra-image css-0"
                      sizes="100vw"
                      srcset={`
                       ${one}?cx=0.97&amp;cy=0.48&amp;w=500   500w,
                       ${one}?cx=0.97&amp;cy=0.48&amp;w=1000 1000w,
                       ${one}?cx=0.97&amp;cy=0.48&amp;w=1760 1760w,
                       ${one}?cx=0.97&amp;cy=0.48&amp;w=2000 2000w
                      `}
                    />
                  </div>
                  <div class="slide__content css-st6rvq">
                    <div class="css-19va5fc">
                      <div class="slide__trumpet css-rszk63">
                        <span class="chakra-link css-1vdp24e" data-group="true">
                          <a
                            class="chakra-link css-1vdp24e"
                            href="#"
                            target="_blank"
                          >
                            <span>
                              <p class="chakra-text css-9vnofn">
                                <span>Oil and gas exploration service</span>
                              </p>
                            </span>
                          </a>
                        </span>
                      </div>
                      <span class="slide__headline">
                        <span class="chakra-link css-1vdp24e" data-group="true">
                          <a
                            class="chakra-link css-1vdp24e"
                            href="#"
                            target="_blank"
                          >
                            <span>
                              <h1 class="chakra-heading css-19u3rc4">
                                <span>
                                Resources that power industries worldwide
                                </span>
                              </h1>
                            </span>
                          </a>
                        </span>
                      </span>
                      {/* <div class="slide__links css-15tp3vc">
                        <div class="slide__link css-1a3d90w">
                          <span
                            class="chakra-link css-wfga6a"
                            data-group="true"
                          >
                            <a
                              class="chakra-link css-wfga6a"
                              href="#"
  
                              target="_blank"
                            >
                              <span>Q1 2024 interim report</span>
                              <div class="icon-container css-1tu61vr">
                                <div class="icon-wrapper css-169nrdu">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="chakra-icon css-1r46jhu"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M19.5271 20C20.0644 20 20.5 20.4356 20.5 20.9729C20.5 21.5101 20.0644 21.9457 19.5271 21.9457L4.47285 21.9457C3.93556 21.9457 3.5 21.5101 3.5 20.9729C3.5 20.4356 3.93556 20 4.47285 20L19.5271 20ZM11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 14.5295L18.5462 8.9833C18.9492 8.58033 19.6026 8.58033 20.0055 8.9833C20.4085 9.38627 20.4085 10.0396 20.0055 10.4426L12.7093 17.7388C12.4762 17.9719 12.1595 18.0701 11.8558 18.0336C11.6342 18.0071 11.4196 17.9088 11.2496 17.7388L3.95333 10.4425C3.55036 10.0396 3.55036 9.38622 3.95333 8.98325C4.3563 8.58028 5.00964 8.58028 5.41261 8.98325L11 14.5706L11 3Z"
                                    ></path>
                                  </svg>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="chakra-icon css-kkfm6j"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M19.5271 20C20.0644 20 20.5 20.4356 20.5 20.9729C20.5 21.5101 20.0644 21.9457 19.5271 21.9457L4.47285 21.9457C3.93556 21.9457 3.5 21.5101 3.5 20.9729C3.5 20.4356 3.93556 20 4.47285 20L19.5271 20ZM11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 14.5295L18.5462 8.9833C18.9492 8.58033 19.6026 8.58033 20.0055 8.9833C20.4085 9.38627 20.4085 10.0396 20.0055 10.4426L12.7093 17.7388C12.4762 17.9719 12.1595 18.0701 11.8558 18.0336C11.6342 18.0071 11.4196 17.9088 11.2496 17.7388L3.95333 10.4425C3.55036 10.0396 3.55036 9.38622 3.95333 8.98325C4.3563 8.58028 5.00964 8.58028 5.41261 8.98325L11 14.5706L11 3Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </span>
                        </div>
                        <div class="slide__link css-1tvtugv">
                          <span
                            class="chakra-link css-p7j81s"
                            data-group="true"
                          >
                            <a
                              class="chakra-link css-p7j81s"
                              href="#"
                              target="_blank"
                            >
                              <div class="icon-wrapper css-k54ifn">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  focusable="false"
                                  class="chakra-icon css-1r46jhu"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M19.5271 20C20.0644 20 20.5 20.4356 20.5 20.9729C20.5 21.5101 20.0644 21.9457 19.5271 21.9457L4.47285 21.9457C3.93556 21.9457 3.5 21.5101 3.5 20.9729C3.5 20.4356 3.93556 20 4.47285 20L19.5271 20ZM11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 14.5295L18.5462 8.9833C18.9492 8.58033 19.6026 8.58033 20.0055 8.9833C20.4085 9.38627 20.4085 10.0396 20.0055 10.4426L12.7093 17.7388C12.4762 17.9719 12.1595 18.0701 11.8558 18.0336C11.6342 18.0071 11.4196 17.9088 11.2496 17.7388L3.95333 10.4425C3.55036 10.0396 3.55036 9.38622 3.95333 8.98325C4.3563 8.58028 5.00964 8.58028 5.41261 8.98325L11 14.5706L11 3Z"
                                  ></path>
                                </svg>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                  focusable="false"
                                  class="chakra-icon css-kkfm6j"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M19.5271 20C20.0644 20 20.5 20.4356 20.5 20.9729C20.5 21.5101 20.0644 21.9457 19.5271 21.9457L4.47285 21.9457C3.93556 21.9457 3.5 21.5101 3.5 20.9729C3.5 20.4356 3.93556 20 4.47285 20L19.5271 20ZM11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 14.5295L18.5462 8.9833C18.9492 8.58033 19.6026 8.58033 20.0055 8.9833C20.4085 9.38627 20.4085 10.0396 20.0055 10.4426L12.7093 17.7388C12.4762 17.9719 12.1595 18.0701 11.8558 18.0336C11.6342 18.0071 11.4196 17.9088 11.2496 17.7388L3.95333 10.4425C3.55036 10.0396 3.55036 9.38622 3.95333 8.98325C4.3563 8.58028 5.00964 8.58028 5.41261 8.98325L11 14.5706L11 3Z"
                                  ></path>
                                </svg>
                              </div>
                              <span>Q1 press release</span>
                            </a>
                          </span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </li>
              <li
                // class="splide__slide is-next"
                className={`splide__slide ${activeIndex === 1 ? 'is-active' : ''} ${activeIndex === 1 ? 'is-visible' : ''}`}
                data-tracking-type="visibility"
                data-tracking-id="homepage_hero_carousel"
                data-tracking-data='{"type":"auto slide","text":"Flying high: how drones are optimizing Aramco’s operations","index":2,"count":4}'
                id="splide01-slide02"
                role="group"
                aria-roledescription="slide"
                aria-label="2 of 4"
                style={{ width: " calc(100%)", transform: "translateX(-100%)" }}
                aria-hidden="true"
                data-gtm-vis-polling-id9071102_313="184"
                data-gtm-vis-polling-id9071102_283="187"
              >
                <div class="css-15cod9l">
                  <div class="slide__background css-0">
                    <img
                      alt="How drones are optimizing Aramco’s operations"
                      src={`${two}?cx=0.49&amp;cy=0.7`}
                      // src="https://www.aramco.com/-/jssmedia/magazine/2024/drones---flying-high/01_hero_img_drones.jpg?cx=0.49&amp;cy=0.7"
                      class="chakra-image css-0"
                      sizes="100vw"
                      srcset={`
                       ${two}?cx=0.49&amp;cy=0.7&amp;w=500   500w,
                       ${two}?cx=0.49&amp;cy=0.7&amp;w=1000 1000w,
                       ${two}?cx=0.49&amp;cy=0.7&amp;w=1760 1760w,
                       ${two}?cx=0.49&amp;cy=0.7&amp;w=2000 2000w
                      `}
                    />
                  </div>
                  <div class="slide__content css-st6rvq">
                    <div class="css-19va5fc">
                      <div class="slide__trumpet css-rszk63">
                        <span class="chakra-link css-1vdp24e" data-group="true">
                          <a
                            class="chakra-link css-1vdp24e"
                            href="#"
                            tabindex="-1"
                          >
                            <span>
                              <p class="chakra-text css-9vnofn">
                                <span>Drilling services</span>
                              </p>
                            </span>
                          </a>
                        </span>
                      </div>
                      <span class="slide__headline">
                        <span class="chakra-link css-1vdp24e" data-group="true">
                          <a
                            class="chakra-link css-1vdp24e"
                            href="#"
                            tabindex="-1"
                          >
                            <span>
                              <h2 class="chakra-heading css-19u3rc4">
                                <span>
                                Maximize Recovery. Minimize environmental footprint
                                </span>
                              </h2>
                            </span>
                          </a>
                        </span>
                      </span>

                      {/* <div class="slide__links css-15tp3vc">
                        <div class="slide__link css-1a3d90w">
                          <span
                            class="chakra-link css-wfga6a"
                            data-group="true"
                          >
                            <a
                              class="chakra-link css-wfga6a"
                              href="#"
                              tabindex="-1"
                            >
                              <span>Read more</span>
                              <div class="icon-container css-1tu61vr">
                                <div class="icon-wrapper css-169nrdu">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="chakra-icon css-19twtfl"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                    ></path>
                                  </svg>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="chakra-icon css-vv1bu6"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </span>
                        </div>
                      </div> */}

                    </div>
                  </div>
                </div>
              </li>
              <li
                // class="splide__slide"
                className={`splide__slide ${activeIndex === 2 ? 'is-active' : ''} ${activeIndex === 2 ? 'is-visible' : ''}`}
                data-tracking-type="visibility"
                data-tracking-id="homepage_hero_carousel"
                data-tracking-data='{"type":"auto slide","text":"The Aramco and Aston Martin Racing strategic partnership","index":3,"count":4}'
                id="splide01-slide03"
                role="group"
                aria-roledescription="slide"
                aria-label="3 of 4"
                style={{ width: " calc(100%)", transform: "translateX(-200%)" }}
                aria-hidden="true"
                data-gtm-vis-polling-id9071102_313="185"
                data-gtm-vis-polling-id9071102_283="188"
              >
                <div class="css-15cod9l">
                  <div class="slide__background css-0">
                    <img
                      alt="Aramco Aston Martin F1 car"
                      // src="https://www.aramco.com/-/jssmedia/images/astonmartin/01_am_hero.jpg?cx=0.45&amp;cy=0.95&amp;mw=10"
                      src={`${three}?cx=0.45&amp;cy=0.95&amp;mw=10`}
                      class="chakra-image css-0"
                      sizes="100vw"
                      data-splide-lazy="https://www.aramco.com/-/jssmedia/images/astonmartin/01_am_hero.jpg?cx=0.45&amp;cy=0.95"
                      // data-splide-lazy-srcset="
                      // https://www.aramco.com/-/jssmedia/images/astonmartin/01_am_hero.jpg?cx=0.45&amp;cy=0.95&amp;w=500 500w, 
                      // https://www.aramco.com/-/jssmedia/images/astonmartin/01_am_hero.jpg?cx=0.45&amp;cy=0.95&amp;w=1000 1000w,
                      //  https://www.aramco.com/-/jssmedia/images/astonmartin/01_am_hero.jpg?cx=0.45&amp;cy=0.95&amp;w=1760 1760w, 
                      //  https://www.aramco.com/-/jssmedia/images/astonmartin/01_am_hero.jpg?cx=0.45&amp;cy=0.95&amp;w=2000 2000w"
                      srcset={`
                       ${three}?cx=0.45&amp;cy=0.95&amp;w=500   500w,
                       ${three}?cx=0.45&amp;cy=0.95&amp;w=1000 1000w,
                       ${three}?cx=0.45&amp;cy=0.95&amp;w=1760 1760w,
                       ${three}?cx=0.45&amp;cy=0.95&amp;w=2000 2000w
                      `}
                    />
                    <span class="splide__spinner"></span>
                  </div>
                  <div class="slide__content css-st6rvq">
                    <div class="css-19va5fc">
                      <div class="slide__trumpet css-rszk63">
                        <span class="chakra-link css-1vdp24e" data-group="true">
                          <a
                            class="chakra-link css-1vdp24e"
                            href="#"
                            tabindex="-1"
                          >
                            <span>
                              <p class="chakra-text css-9vnofn">
                                <span>Production service</span>
                              </p>
                            </span>
                          </a>
                        </span>
                      </div>
                      <span class="slide__headline">
                        <span class="chakra-link css-1vdp24e" data-group="true">
                          <a
                            class="chakra-link css-1vdp24e"
                            href="#"
                            tabindex="-1"
                          >
                            <span>
                              <h2 class="chakra-heading css-19u3rc4">
                                <span>
                                Installation and maintenance of production platforms and equipment
                                </span>
                              </h2>
                            </span>
                          </a>
                        </span>
                      </span>

                      {/* <div class="slide__links css-15tp3vc">
                        <div class="slide__link css-1a3d90w">
                          <span
                            class="chakra-link css-wfga6a"
                            data-group="true"
                          >
                            <a
                              class="chakra-link css-wfga6a"
                              href="#"
                              tabindex="-1"
                            >
                              <span>Explore the partnership</span>
                              <div class="icon-container css-1tu61vr">
                                <div class="icon-wrapper css-169nrdu">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="chakra-icon css-19twtfl"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                    ></path>
                                  </svg>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="chakra-icon css-vv1bu6"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </span>
                        </div>
                      </div> */}

                    </div>
                  </div>
                </div>
              </li>
              <li
                // class="splide__slide"
                className={`splide__slide  ${activeIndex === 3 ? 'is-active' : ''} ${activeIndex === 3 ? 'is-visible' : ''}`}
                data-tracking-type="visibility"
                data-tracking-id="homepage_hero_carousel"
                data-tracking-data='{"type":"auto slide","text":"How can we help engineer a better future?","index":4,"count":4}'
                id="splide01-slide04"
                role="group"
                aria-roledescription="slide"
                aria-label="4 of 4"
                style={{ width: " calc(100%)", transform: "translateX(-300%)" }}
                aria-hidden="true"
                data-gtm-vis-polling-id9071102_313="186"
                data-gtm-vis-polling-id9071102_283="189"
              >
                <div class="css-15cod9l">
                  <div class="slide__background css-0">
                    <img
                      alt="Earth in space"
                      // src="https://www.aramco.com/-/jssmedia/images/campaigns/powered-by-how/planet_earth-2.jpg?cx=0.5&amp;cy=0.5"
                      src={`${four}?cx=0.5&amp;cy=0.5`}
                      class="chakra-image css-0"
                      sizes="100vw"
                      // srcset="
                      //   https://www.aramco.com/-/jssmedia/images/campaigns/powered-by-how/planet_earth-2.jpg?cx=0.5&amp;cy=0.5&amp;w=500   500w,
                      //   https://www.aramco.com/-/jssmedia/images/campaigns/powered-by-how/planet_earth-2.jpg?cx=0.5&amp;cy=0.5&amp;w=1000 1000w,
                      //   https://www.aramco.com/-/jssmedia/images/campaigns/powered-by-how/planet_earth-2.jpg?cx=0.5&amp;cy=0.5&amp;w=1760 1760w,
                      //   https://www.aramco.com/-/jssmedia/images/campaigns/powered-by-how/planet_earth-2.jpg?cx=0.5&amp;cy=0.5&amp;w=2000 2000w
                      // "
                      srcset={`
                       ${four}?cx=0.5&amp;cy=0.5&amp;w=500   500w,
                       ${four}?cx=0.5&amp;cy=0.5&amp;w=1000 1000w,
                       ${four}?cx=0.5&amp;cy=0.5&amp;w=1760 1760w,
                       ${four}?cx=0.5&amp;cy=0.5&amp;w=2000 2000w
                      `}
                    />
                  </div>
                  <div class="slide__content css-st6rvq">
                    <div class="css-19va5fc">
                      <div class="slide__trumpet css-rszk63">
                        <span class="chakra-link css-1vdp24e" data-group="true">
                          <a
                            class="chakra-link css-1vdp24e"
                            href="#"
                            tabindex="-1"
                          >
                            <span>
                              <p class="chakra-text css-9vnofn">
                                <span>Supply and management</span>
                              </p>
                            </span>
                          </a>
                        </span>
                      </div>
                      <span class="slide__headline">
                        <span class="chakra-link css-1vdp24e" data-group="true">
                          <a
                            class="chakra-link css-1vdp24e"
                            href="#"
                            tabindex="-1"
                          >
                            <span>
                              <h2 class="chakra-heading css-19u3rc4">
                                <span>
                                How can we engineer a better future
                                </span>
                              </h2>
                            </span>
                          </a>
                        </span>
                      </span>

{/* 
                      <div class="slide__links css-15tp3vc">
                        <div class="slide__link css-1a3d90w">
                          <span
                            class="chakra-link css-wfga6a"
                            data-group="true"
                          >
                            <a
                              class="chakra-link css-wfga6a"
                              href="#"
                              tabindex="-1"
                            >
                              <span>Discover how</span>
                              <div class="icon-container css-1tu61vr">
                                <div class="icon-wrapper css-169nrdu">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="chakra-icon css-19twtfl"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                    ></path>
                                  </svg>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="chakra-icon css-vv1bu6"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </span>
                        </div>
                      </div>
                       */}
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
    
      <li
        // className="splide__slide is-active "
        className={`splide__slide ${activeIndex === 0 ? 'is-active' : ''} ${activeIndex === 0 ? 'is-visible' : ''}`}
        data-tracking-type="visibility"
        data-tracking-id="homepage_hero_carousel"
        data-tracking-data='{"type":"hover slide up","text":"Saudi Aramco published its Q1 2024 results on May 07, 2024.","index":0,"count":4}'
        id="splide02-slide01"
        role="button"
        aria-label="Go to slide 1"
        // aria-current="true"
        // tabIndex="0"
        aria-current={activeIndex === 0}
        tabIndex={activeIndex === 0 ? 0 : -1}
        aria-controls="splide01-slide01 splide01-slide01 splide01-slide01 splide01-slide01 splide01-slide01 splide01-slide01"
        data-gtm-vis-recent-on-screen9071102_283="1540"
        data-gtm-vis-first-on-screen9071102_283="1540"
        data-gtm-vis-total-visible-time9071102_283="1000"
        data-gtm-vis-recent-on-screen9071102_313="1541"
        data-gtm-vis-first-on-screen9071102_313="1541"
        data-gtm-vis-total-visible-time9071102_313="1000"
        data-gtm-vis-has-fired9071102_283="1"
        data-gtm-vis-has-fired9071102_313="1"
      >
        <div className="css-3um24x " onMouseLeave={handleMouseLeave}>
          <p className={`chakra-text css-bxwo5k ${isHovered == 1 ? 'opacity-100' : 'opacity-50'} `} 
         onMouseEnter={()=>handleMouseEnter(1)}
        >
        Oil and gas exploration service</p>
        {activeIndex +1 !== 1 && (
  <div className="css-13o7eu2">
    <div
      className="chakra-collapse"
      style={{
        overflow: "hidden",
        borderRadius: "10px 10px 0 10px",
        display: "block",
        opacity: isHovered === 1 ? "1" : "0",
        maxHeight: isHovered === 1 ? "500px" : "0px",
        transition: "opacity 0.5s, max-height 0.5s, transform 0.7s",
        transform: isHovered === 1 ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <div onClick={() => handleClick(0)} className="chakra-aspect-ratio css-19nt5td">
        <img
          alt="Q1 2024 results announcement"
          src={`${one}?cx=0.97&cy=0.48&w=300`}
          className="chakra-image css-1pwom1"
        />
      </div>
    </div>
  </div>
)}

<div onMouseEnter={handleBarMouseEnter}   onMouseLeave={handleBarMouseLeave} className={`pagination__progress ${isBarHovered ? 'css-1qlx8sc' : 'css-13pjqad'}`}
     ></div> 
          
          
        </div>
      </li>
      <li
        // className="splide__slide  is-visible is-next "
        className={`splide__slide ${activeIndex === 1 ? 'is-active' : ''} ${activeIndex === 1 ? 'is-visible' : ''}`}
        data-tracking-type="visibility"
        data-tracking-id="homepage_hero_carousel"
        data-tracking-data='{"type":"hover slide up","text":"Flying high: how drones are optimizing Aramco’s operations","index":1,"count":4}'
        id="splide02-slide02"
        role="button"
        aria-label="Go to slide 2"
        tabIndex="0"
        aria-controls="splide01-slide02 splide01-slide02 splide01-slide02 splide01-slide02 splide01-slide02 splide01-slide02"
        data-gtm-vis-recent-on-screen9071102_283="1541"
        data-gtm-vis-first-on-screen9071102_283="1541"
        data-gtm-vis-total-visible-time9071102_283="1000"
        data-gtm-vis-recent-on-screen9071102_313="1541"
        data-gtm-vis-first-on-screen9071102_313="1541"
        data-gtm-vis-total-visible-time9071102_313="1000"
        data-gtm-vis-has-fired9071102_283="1"
        data-gtm-vis-has-fired9071102_313="1"
      >
        <div className="css-3um24x" onMouseLeave={handleMouseLeave}>
          <p    onMouseEnter={()=>handleMouseEnter(2)}
        className={`chakra-text css-bxwo5k ${isHovered == 2 ? 'opacity-100' : 'opacity-50'} `} >Drilling services</p>
        {activeIndex +1 !== 2 && (
          <div className="css-13o7eu2">
            <div
              className="chakra-collapse"
              style={{
        overflow: "hidden",
        borderRadius: "10px 10px 0 10px",
        display: "block",
        opacity: isHovered == 2 ? "1" : "0",
        maxHeight: isHovered == 2 ? "500px" : "0px", // Use maxHeight instead of height for smooth transition
        transition: "opacity 0.5s, max-height 0.5s, transform 0.7s",
        transform: isHovered == 2 ? "translateY(0)" : "translateY(100%)",
      }}
            >
          
      <div onClick={() => handleClick(1)}className="chakra-aspect-ratio css-19nt5td">
      <img
      alt="How drones are optimizing Aramco’s operations"
      src={`${two}?cx=0.49&cy=0.7&w=300`}
      className="chakra-image css-1pwom1"
    />
  </div>

            </div>
          </div>)}
          <div className={`pagination__progress  ${isHovered ? 'css-1qlx8sc' : 'css-13pjqad'}`}
     ></div> 
          


        </div>
      </li>
      <li
        // className="splide__slide is-visible"
        className={`splide__slide ${activeIndex === 2 ? 'is-active' : ''} ${activeIndex === 2 ? 'is-visible' : ''}`}
        data-tracking-type="visibility"
        data-tracking-id="homepage_hero_carousel"
        data-tracking-data='{"type":"hover slide up","text":"The Aramco and Aston Martin Racing strategic partnership","index":2,"count":4}'
        id="splide02-slide03"
        role="button"
        aria-label="Go to slide 3"
        tabIndex="0"
        aria-controls="splide01-slide03 splide01-slide03 splide01-slide03 splide01-slide03 splide01-slide03 splide01-slide03"
        data-gtm-vis-recent-on-screen9071102_283="1541"
        data-gtm-vis-first-on-screen9071102_283="1541"
        data-gtm-vis-total-visible-time9071102_283="1000"
        data-gtm-vis-recent-on-screen9071102_313="1541"
        data-gtm-vis-first-on-screen9071102_313="1541"
        data-gtm-vis-total-visible-time9071102_313="1000"
        data-gtm-vis-has-fired9071102_283="1"
        data-gtm-vis-has-fired9071102_313="1"
      >
        <div className="css-3um24x" onMouseLeave={handleMouseLeave}>
          <p    onMouseEnter={()=>handleMouseEnter(3)}
        className={`chakra-text css-bxwo5k ${isHovered == 3 ? 'opacity-100' : 'opacity-50'} `} >Production service</p>
       {activeIndex +1 !== 3 && (
          <div className="css-13o7eu2">
            <div
              className="chakra-collapse"
              style={{
        overflow: "hidden",
        borderRadius: "10px 10px 0 10px",
        
        display: "block",
        opacity: isHovered == 3 ? "1" : "0",
        maxHeight: isHovered == 3 ? "500px" : "0px", // Use maxHeight instead of height for smooth transition
        transition: "opacity 0.5s, max-height 0.5s, transform 0.7s",
        transform: isHovered == 3 ? "translateY(0)" : "translateY(100%)",
      }}
            >
              <div onClick={() => handleClick(2)} className="chakra-aspect-ratio css-19nt5td">
                <img
                  alt="Aramco Aston Martin F1 car"
                  src={`${three}?cx=0.45&cy=0.95&w=300`}
                  className="chakra-image css-1pwom1"
                />
              </div>
            </div>
          </div>)}
          <div onMouseEnter={handleBarMouseEnter}   onMouseLeave={handleBarMouseLeave} className={`pagination__progress ${isBarHovered ? 'css-1qlx8sc' : 'css-13pjqad'}`}
     ></div> 
          
        </div>
      </li>
      <li
        // className="splide__slide is-visible"
        className={`splide__slide ${activeIndex === 3 ? 'is-active' : ''} ${activeIndex === 3 ? 'is-visible' : ''}`}
        data-tracking-type="visibility"
        data-tracking-id="homepage_hero_carousel"
        data-tracking-data='{"type":"hover slide up","text":"How can we help engineer a better future?","index":3,"count":4}'
        id="splide02-slide04"
        role="button"
        aria-label="Go to slide 4"
        tabIndex="0"
        aria-controls="splide01-slide04 splide01-slide04 splide01-slide04 splide01-slide04 splide01-slide04 splide01-slide04"
        data-gtm-vis-recent-on-screen9071102_283="1541"
        data-gtm-vis-first-on-screen9071102_283="1541"
        data-gtm-vis-total-visible-time9071102_283="1000"
        data-gtm-vis-recent-on-screen9071102_313="1541"
        data-gtm-vis-first-on-screen9071102_313="1541"
        data-gtm-vis-total-visible-time9071102_313="1000"
        data-gtm-vis-has-fired9071102_283="1"
        data-gtm-vis-has-fired9071102_313="1"
      >
        <div className="css-3um24x" onMouseLeave={handleMouseLeave}>
          <p  onMouseEnter={()=>handleMouseEnter(4)} className={`chakra-text css-clbvj9 ${isHovered == 4 ? 'opacity-100' : 'opacity-50'} `}>Supply and management</p>
          {activeIndex +1 !== 4 && (
          <div className="css-13o7eu2">
            <div
              className="chakra-collapse"     style={{
        overflow: "hidden",
        borderRadius: "10px 10px 0 10px",
        display: "block",
        opacity: isHovered == 4 ? "1" : "0",
        maxHeight: isHovered == 4 ? "500px" : "0px", // Use maxHeight instead of height for smooth transition
        transition: "opacity 0.5s, max-height 0.5s, transform 1s",
        transform: isHovered == 4 ? "translateY(0)" : "translateY(100%)",
      }}
            >
              <div  onClick={() => handleClick(3)}  className="chakra-aspect-ratio css-19nt5td bg-white">
                
                <img
                  alt="Earth in space"
                  
                  src={`${four}?cx=0.5&cy=0.5&w=300`}
                  className="chakra-image css-1pwom1"
                />
              </div>
            </div>
          </div>)}
          <div onMouseEnter={handleBarMouseEnter}   onMouseLeave={handleBarMouseLeave} className={`pagination__progress ${isBarHovered ? 'css-1qlx8sc' : 'css-13pjqad'}`}
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
