// import React from 'react'
import Banner from '../component/banner/Banner'
import DiscoverSection from '../component/discover/DiscoverSection'
// import DragCard from '../component/slideCard/DragCard'
// import Gallery from '../component/ImageGallery/Gallery'
import ThreeCard from '../component/ThreeItemCard/ThreeCard'
// import HoverCard from '../component/HoverCard/HoverCard'
// import DownLoad from '../component/downloadSection/DownLoad'
// import Service from '../component/serviceSection/Service'
import AboutBg from '../component/AboutBg/AboutBg'
import VideoSection from '../component/video/VideoSection'

const Home = () => {
  return (
    <div className='font-custom'>
        <Banner />
      <DiscoverSection />
      {/* <DragCard /> */}
      {/* <Gallery /> */}
      <ThreeCard />
      {/* <HoverCard /> */}
      {/* <DownLoad /> */}
      {/* <Service /> */}
      <VideoSection />
      <AboutBg />
    </div>
  )
}

export default Home