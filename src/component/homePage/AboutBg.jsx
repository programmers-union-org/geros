import about from '/assets/about.webp'
import ArrowIconWhite from '../Arrows/ArrowIconWhite';
import { Link } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

const AboutBg = () => {
    const styles = {
        container: {
          position: "relative",
          height: "230px",
          backgroundImage: `url(${about})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
        overlay: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", 
        },
        content: {
          position: "relative",
          zIndex: 1, 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "white",
          textAlign: "center",
        },
      };

  return (
    <ParallaxProvider speed={100}>
    <div className=''>
          <div className="bg-black relative z-2 mb-1">
      <a href="/en/about-us">
        <div style={styles.container}>
          <div style={styles.overlay}></div>
          <div style={styles.content}>
            <div style={{fontFamily:'ManifaPro2' , fontWeight:400 }} className="text-3xl font-section-one font-normal font-body tracking-normal leading-relaxed md:text-5xl  md:tracking-wide md:leading-tight">
              About us
            </div>
          <Link to='/about-us' >
            <div className='flex -ml-6 items-center'>

            <ArrowIconWhite /> 
            <h6 className='text-lg font-section-one'> Learn more</h6>
            </div>
            </Link>
          </div>
        </div>
      </a>
    </div>
    </div>
    </ParallaxProvider>
  )
}

export default AboutBg