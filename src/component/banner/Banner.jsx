import React from 'react'
import ImageSlide from '../imageSlide/ImageSlide'
import MobileBanner from '../imageSlide/MobileBanner'
import Sample from '../sample/Sample'
import Example from '../sample/Example'
import SampleBanner from '../sample/SampleBanner'
import AramcoTimeRane from '../timeRange/AramcoTimeRane';
import BannerSample from '../sample/BannerSample'
import CssSite from '../sample/CssSite'
// import '../timeRange/aramco.css'


const Banner = () => {
  return (
    <div>
    {/* <div className='md:block hidden '> */}
        {/* <ImageSlide /> */}
        {/* <Sample /> */}
        {/* <Example /> */}
        {/* <SampleBanner /> */}
        <CssSite />
        {/* <AramcoTimeRane /> */}
        {/* <BannerSample /> */}
    {/* </div> */}
    {/* <div className='md:hidden block'>
        <MobileBanner />
    </div> */}
    </div>
  )
}

export default Banner