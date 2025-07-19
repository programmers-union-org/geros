import { useEffect, useState, useRef } from 'react';
import video from '/assets/video.webp';

const VideoSection = () => {
  const [imageStyle, setImageStyle] = useState({
    width: '70%',
    height: '100vh'
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far into the section we've scrolled
      const scrollPosition = viewportHeight - sectionTop;
      const scrollProgress = scrollPosition / (sectionHeight + viewportHeight);

      // Ensure width increases to 100% and does not exceed it
      let newWidth = Math.min(100, 70 + (scrollProgress * 42));
      setImageStyle({
        width: `${newWidth}%`,
        height: '100%',
       
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="py-20">
      <VideoHead />
      <div className='max-w-full m-auto flex justify-center'>
        <img
          className='rounded-t-[1.125rem] rounded-bl-[1.125rem]'
          src={video}
          alt="Video thumbnail"
          style={imageStyle}
        />
      </div>
    </div>
  );
};
const VideoHead = () => {
  return (
    <div className='max-w-[71rem] m-auto'>
        <div className='flex lg:flex-row flex-col justify-between items-end gap-6 my-8 md:py-[64px] px-4 md:px-7'>
                <div className='md:col-span-1 '>
                    <p style={{fontFamily:'ManifaPro2'  }} className='text-[45px] font-light  pb-[1.2rem]'>
                    OUR PROMISE
                    </p>
                  <LastContent />
                </div>
            </div>
    </div>
  )
}

const LastContent = () => {
  return (
    <div className="max-w-[71rem] m-auto py-6">
      <div className="text-[18px] md:text-lg md:max-w-full basis-full md:columns-2 gap-12 mb-10 ">
        {/* <h2 className="text-4xl tracking-wide mb-12 font-light">Where we're going</h2> */}
        <p style={{fontFamily:'ManifaPro2'  }} className="mb-7 font-light text-2xl ">
        A pioneering collective of sector-leading entities dedicated to the sustainable
management and innovative utilisation of energy and natural resources. Founded
on the principles of diversification, sustainability, and strategic market innovation,
GEROS serves as an umbrella organisation that champions alternative markets
and explores uncharted niches to alleviate pressure on saturated supply streams
and high-demand contracts.
        </p>
        <p style={{fontFamily:'ManifaPro2'  }} className="mb-7 font-light text-2xl  ">
        Global Energy & Resources Organisations (GEROS) is a pioneering collective of
sector-leading entities dedicated to the sustainable management and innovative
utilization of energy and natural resources. Founded on the principles of
diversification, sustainability, and strategic market innovation, GEROS serves as an
umbrella organization that champions alternative markets and explores uncharted
niches to alleviate pressure on saturated supply streams and high-demand
contracts.
        </p>
      
      </div>
    </div>
  )
}

export default VideoSection;
