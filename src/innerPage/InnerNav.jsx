
import logo from '/assets/whiteLogo.webp'

const InnerNav = () => {
  return (
    <div className='md:block hidden'>
        <div className="flex order justify-between px-8 mb-10  mt-16 " >
            <div className="flex gap-4">
                  <svg
                    width="25px"
                    height="25px"
                    className="w-6 h-6 chakra-icon css-12qnb82 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25.98 25.98"
                    focusable="false"
                  >
                    <path
                      d="m17.5,11.25c0,3.45-2.8,6.25-6.25,6.25s-6.25-2.8-6.25-6.25,2.8-6.25,6.25-6.25,6.25,2.8,6.25,6.25Zm-2.44,0c0,2.11-1.71,3.81-3.81,3.81s-3.81-1.71-3.81-3.81,1.71-3.81,3.81-3.81,3.81,1.71,3.81,3.81Z"
                      fill="black"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="m11.25,22.5c2.64,0,5.07-.91,6.99-2.44l5.54,5.54c.5.5,1.32.5,1.82,0s.5-1.32,0-1.82l-5.54-5.54c1.52-1.92,2.44-4.35,2.44-6.99C22.5,5.04,17.46,0,11.25,0S0,5.04,0,11.25s5.04,11.25,11.25,11.25Zm0-2.44c4.87,0,8.81-3.95,8.81-8.81S16.12,2.44,11.25,2.44,2.44,6.38,2.44,11.25s3.95,8.81,8.81,8.81Z"
                      fill="black"
                      fillRule="evenodd"
                    ></path>
                  </svg>
              <ul className="flex gap-6 px-3 font-medium  cursor-pointer">
                
              <li className=''><span>ABOUT</span> <span className='ml-1'>GEROS</span></li>
                <li>SECTORS</li>
                <li>MARKETS</li>
                <li>PROJECTS</li>
                <li>INVESTMENTS</li>
              </ul>
            </div>
              <div>
                <img className=" w-full h-10" src={logo} alt="" />
              </div>
            </div>
    </div>
  )
}

export default InnerNav