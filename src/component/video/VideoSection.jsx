import React, { useEffect, useState, useRef } from 'react';
import VideoHead from './VideoHead';
import video from '../../assets/video.jpg';

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

export default VideoSection;
