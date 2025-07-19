import  { useEffect, useRef } from 'react';
import product from '/assets/product.webp';
import oil from '/assets/oil.webp';
import supplay from '/assets/supplay.webp';
import drilling from '/assets/drilling.webp';
import gold from '/assets/gold.webp';

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
          <a href='/services/gold-and-natural-resources' className='relative md:w-[50%] w-full'>
              <div id='arrowanimaiton' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 1%, rgba(0,212,255,0) 100%) ,url(${gold})`, backgroundSize: "cover", backgroundColor: 'black', backgroundPosition: "center", borderRadius: '1.125rem' }} className='p-4 h-[25rem] bg-black rounded-4xl flex flex-col justify-between hover:scale-105 transition-transform duration-300'>
                <div className='text-white mt-4'>
                  <h6 style={{fontFamily:'Ghawar',fontWeight:500}} className='font-medium tracking-normal text-sm uppercase font-section-one'>Gold and natural resources </h6>
                </div>
                <h3 style={{fontFamily:'Ghawar',fontWeight:500}} className='text-sm text-white leading-5'>Unlocking Global Opportunities in Gold and Resource Markets</h3>
              </div>
            </a>
            <a href='/services/oil-and-gas' className='relative md:w-[50%] w-full'>
              <div id='arrowanimaiton' style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 1%, rgba(0,212,255,0) 100%) ,url(${oil})`, backgroundSize: "cover", backgroundColor: 'black', backgroundPosition: "center", borderRadius: '1.125rem' }} className='p-4 h-[25rem] bg-black rounded-4xl flex flex-col justify-between hover:scale-105 transition-transform duration-300'>
                <div className='text-white mt-4'>
                  <h6 style={{fontFamily:'Ghawar',fontWeight:500}} className='font-medium tracking-normal text-sm uppercase font-section-one'>Oil and gas exploration </h6>
                </div>
                <h3 style={{fontFamily:'Ghawar',fontWeight:500}} className='text-sm text-white leading-5'>Resources that power industries worldwide </h3>
              </div>
            </a>
            <a href='/services/drilling' className='relative md:w-[50%] w-full'>
              <div style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 1%, rgba(0,212,255,0) 100%) ,url(${drilling})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: '1.125rem' }} className='cursor-pointer p-4 h-[25rem] rounded-4xl flex flex-col justify-between hover:scale-105 transition-transform duration-300'>
                <div className='text-white mt-4'>
                  <h6 style={{fontFamily:'Ghawar',fontWeight:500}} className='font-medium tracking-normal text-sm uppercase font-section-one'>Drilling services </h6>
                </div>
                <h3 style={{fontFamily:'Ghawar',fontWeight:500}} className='text-sm leading-5 text-white'>Maximise Recovery. minimise environmental footprint </h3>
              </div>
            </a>
            <a href='/services/environmental-and-safety' className='relative md:w-[50%] w-full'>
              <div style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 1%, rgba(0,212,255,0) 100%) ,url(${product})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: '1.125rem' }} className='p-4 h-[25rem] rounded-4xl flex flex-col justify-between hover:scale-105 transition-transform duration-300'>
                <div className='text-white mt-4'>
                  <h6 style={{fontFamily:'Ghawar',fontWeight:500}} className='font-medium tracking-normal text-sm uppercase font-section-one'>Environmental and safety service </h6>
                </div>
                <h3 style={{fontFamily:'Ghawar',fontWeight:500}} className='text-sm mt-3 leading-5 text-white'>Environmental and safety service </h3>
              </div>
            </a>
            <a href='/services/consulting-and-engineering' className='relative md:w-[50%] w-full'>
              <div style={{ backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 1%, rgba(0,212,255,0) 100%) ,url(${supplay})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: '1.125rem' }} className='p-4 h-[25rem] rounded-4xl flex flex-col justify-between hover:scale-105 transition-transform duration-300 '>
                <div className='text-white mt-4'>
                  <h6 style={{fontFamily:'Ghawar',fontWeight:500}} className='font-medium tracking-normal text-sm uppercase font-section-one'>Consulting and Engineering </h6>
                </div>
                <h3 style={{fontFamily:'Ghawar',fontWeight:500}} className='text-sm mt-3 leading-5 text-white'>Consulting and Engineering services</h3>
              </div>
            </a>
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

const DiscoverHead = () => {
  return (
    <div className="max-w-[71rem] m-auto pt-20 md:pl-0">
      <h6  className="text-start   font-medium text-sm uppercase font-section-one">
        OUR SERVICES
      </h6>
      <h3  className="text-start mt-6 font-medium text-2xl md:text-3xl md:w-3/4 w-full capilaze  ">
        GEROS, Global Energy & Resources Organisations, is a free-market
        consortium specialising in a wide range of energy and resource sectors.
      </h3>
    </div>
  );
};

export default DiscoverSection;