import { useEffect, useState } from 'react';
import close from '/assets/close.webp'
import logo from '/assets/singleLogo.webp'

const Nav = ({aboutHandle,toggleDropdown}) => {

    const [color, setColor] = useState('transparent');

    const listenScrollEvent = () => {
      if (window.scrollY > 100) {
        setColor('white ');
      } else {
        setColor('transparent');
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent); 
       return () => {
        window.removeEventListener('scroll', listenScrollEvent);
      };
    }, []);
 const [bgGray , setBgGray ] = useState('')
 const [clickF , setClickF ] = useState(false)
// function clickHandle(){
//   if(bgGray == ' '){
//     setBgGray('bg-slate-700')

//   }else{
//     setBgGray(' ')
//   }
// }
// function closeHandle(){
//   setClickF(false)
// }
//  const AnimationAbout = () =>{
//   return (
//     <>
// <div className={`bg-[#323232] w-80  h-screen pt-12 fade-animation `} >
//             <div onClick={closeHandle} className='flex justify-end pr-10 cursor-pointer '>
//               <img  style={{width:'15px',cursor:'pointer'}} className=' cursor-pointer h-4' src={close} alt="" />
//             </div>
//               <ul>
//                 <li>About</li>
//                 <li>About</li>
//                 <li>About</li>
//                 <li>About</li>
//                 <li>About</li>
//               </ul>
//             </div>
//     </>
//   )
//  }

  return (
    <div className={`bg-${color}   text-start  pt-1  pb-4`}>
   {/* <h6 className="text-start px-16 pt-1">Global contacts</h6> */}
        <div className="flex order justify-between items-center text-white px-16 mt-10  " >
            <div className="flex gap-4">
                  {/* <svg
                    width="25px"
                    height="25px"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25.98 25.98"
                    focusable="false"
                    class="chakra-icon css-12qnb82"
                  >
                    <path
                      d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z"
                      fill="white"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z"
                      fill="white"
                      fill-rule="evenodd"
                    ></path>
                  </svg> */}
              <ul className="flex gap-6 px-3 font-medium  cursor-pointer">
                
              <li  onClick={()=>toggleDropdown(1)} className=''><span>ABOUT</span> <span className='ml-1'>GEROS</span></li>
                <li onClick={()=>toggleDropdown(2)} >SECTORS</li>
                <li onClick={()=>toggleDropdown(3)} >MARKETS</li>
                <li onClick={()=>toggleDropdown(4)} >PROJECTS</li>
                <li onClick={()=>toggleDropdown(5)} >INVESTMENTS</li>
              </ul>
            </div>
              <div className='w-none h-10'>
                <img  className="w-full h-10" src={logo} alt="" />
              </div>
            </div>

            {/* click time open navBar  */}
           {/* {clickF&& <AnimationAbout />} */}
            {/* <div className='bg-[#323232] w-80 h-screen pt-12 fade-animation '>
            <div className='flex justify-end pr-10 '>
              <img style={{width:'15px'}} className=' cursor-pointer h-4' src={close} alt="" />
            </div>
              <ul>
                <li>About</li>
                <li>About</li>
                <li>About</li>
                <li>About</li>
                <li>About</li>
              </ul>
            </div> */}
            {/* click time open navBar  */}
    </div>
  )
}

export default Nav