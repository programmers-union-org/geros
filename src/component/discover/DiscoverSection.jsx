import React, { useEffect, useRef, useState } from 'react';
import product from '../../assets/product.jpg';
import oil from '../../assets/oil.jpeg';
import supplay from '../../assets/supplay.jpg';
import drilling from '../../assets/drilling.jpg';
import DiscoverHead from '../discover/DiscoverHead'
import '../../App.css';

const DiscoverSection = () => {
  const scrollLineRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const targetElement = scrollContainerRef.current;

    const fillScrollLine = () => {
      const scrollLine = scrollLineRef.current;
      if (scrollLine && targetElement) {
        const scrollWidth = targetElement.scrollWidth;
        const clientWidth = targetElement.clientWidth
        const scrolled = targetElement.scrollLeft;
        const percentScrolled = (scrolled / (scrollWidth - clientWidth)) * 100;

        scrollLine.style.width = `${percentScrolled}%`;
      }
    };

    targetElement.addEventListener('scroll', fillScrollLine);

    return () => targetElement.removeEventListener('scroll', fillScrollLine);
  }, []);

  return (
    <div className='bg-bgGray lg:px-0 px-4 pb-16'>
      {/* Replace DiscoverHead with its content or import it if it's a separate component */}
      <div className='discover-head'>
        <DiscoverHead />
      </div>
      <div className='scroll-container-wrapper relative max-w-[75rem] m-auto pt-16'>
        <div ref={scrollContainerRef} id='scrollCardSection' className='scrollCardSection overflow-x-scroll lg:overflow-hidden' style={{ scrollbarWidth: 'none' }}>
          <div className='flex flex-row gap-x-4 gap-y-5 w-[1250px] lg:w-full p-3'>
            <div className='relative md:w-[50%] w-full'>
              <div id='arrowanimaiton' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 1%, rgba(0,212,255,0) 100%) ,url(${oil})`, backgroundSize: "cover", backgroundColor: 'black', backgroundPosition: "center", borderRadius: '1.125rem' }} className='p-4 h-[25rem] bg-black rounded-4xl flex flex-col justify-between'>
                <div className='text-white mt-4'>
                  <h6 style={{fontFamily:'Ghawar',fontWeight:500}} className='font-medium tracking-normal text-sm uppercase font-section-one'>Oil and gas exploration </h6>
                </div>
                <h3 style={{fontFamily:'Ghawar',fontWeight:500}} className='md:text-lg text-xl text-white leading-5'>Resources that power industries worldwide </h3>
              </div>
            </div>
            <div className='relative md:w-[50%] w-full'>
              <div style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 1%, rgba(0,212,255,0) 100%) ,url(${drilling})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: '1.125rem' }} className='cursor-pointer p-4 h-[25rem] rounded-4xl flex flex-col justify-between'>
                <div className='text-white mt-4'>
                  <h6 style={{fontFamily:'Ghawar',fontWeight:500}} className='font-medium tracking-normal text-sm uppercase font-section-one'>Drilling services </h6>
                </div>
                <h3 style={{fontFamily:'Ghawar',fontWeight:500}} className='md:text-lg text-xl leading-5 text-white'>Maximise Recovery. minimise environmental footprint </h3>
              </div>
            </div>
            <div className='relative md:w-[50%] w-full'>
              <div style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 1%, rgba(0,212,255,0) 100%) ,url(${product})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: '1.125rem' }} className='p-4 h-[25rem] rounded-4xl flex flex-col justify-between'>
                <div className='text-white mt-4'>
                  <h6 style={{fontFamily:'Ghawar',fontWeight:500}} className='font-medium tracking-normal text-sm uppercase font-section-one'>Production service </h6>
                </div>
                <h3 style={{fontFamily:'Ghawar',fontWeight:500}} className='md:text-lg text-xl mt-3 leading-5 text-white'>installation and maintenance of production platforms and equipment </h3>
              </div>
            </div>
            <div className='relative md:w-[50%] w-full'>
              <div style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 1%, rgba(0,212,255,0) 100%) ,url(${supplay})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: '1.125rem' }} className='p-4 h-[25rem] rounded-4xl flex flex-col justify-between'>
                <div className='text-white mt-4'>
                  <h6 style={{fontFamily:'Ghawar',fontWeight:500}} className='font-medium tracking-normal text-sm uppercase font-section-one'>Supply and management </h6>
                </div>
                <h3 style={{fontFamily:'Ghawar',fontWeight:500}} className='md:text-lg text-xl mt-3 leading-5 text-white'>How can we engineer a better future</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:hidden' style={{ position: 'absolute', bottom: -28, left: 0, width: '100%', height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '2px' }}>
          <div 
            style={{ 
              height: '100%',
              background: 'linear-gradient(90deg, rgba(252,176,69,1) 0%, rgba(131,58,180,1) 100%)',
              width: '0', 
              transition: 'width 0.2s ease', 
              borderRadius: '2px' 
            }} 
            ref={scrollLineRef}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;