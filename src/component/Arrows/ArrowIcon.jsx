
const ArrowIcon = () => {
  return (
    <div>
        <div id="arrowanimaiton" className="flex justify-center m-2  ">
        <div className="w-[35px] h-[35px]  relative rounded-full  cursor-pointer">
          <div className="w-[35px] h-[35px]  border-transparent relative rounded-full">
            <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 overflow-hidden">
              <svg
                className="w-[32px] h-[21px] transition-transform duration-700 ease-in-out arrow-first absolute opacity-100 -translate-x-full"
                viewBox="0 0 24 24"
                fill="#007FAD"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                ></path>
              </svg>
              <svg
                className="w-[32px] h-[21px] transition-transform duration-700 ease-in-out arrow-second ml-[60px] absolute opacity-100 -translate-x-full"
                viewBox="0 0 24 24"
                fill="#007FAD"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4016 3.9304C13.9986 3.52743 13.3452 3.52743 12.9423 3.9304C12.5393 4.33337 12.5393 4.98671 12.9423 5.38968L18.5363 10.9837H2.93184C2.39455 10.9837 1.95898 11.4192 1.95898 11.9565C1.95898 12.4938 2.39455 12.9294 2.93184 12.9294H18.5362L12.9422 18.5233C12.5393 18.9263 12.5393 19.5796 12.9422 19.9826C13.3452 20.3856 13.9986 20.3856 14.4015 19.9826L21.6978 12.6863C21.8789 12.5052 21.9786 12.2736 21.9969 12.0368C22.0195 11.7466 21.9198 11.4486 21.6978 11.2267L14.4016 3.9304Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArrowIcon