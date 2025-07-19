import first from '/assets/sample6.webp'
import second from '/assets/sample7.webp'
import therd from '/assets/sample4.webp'
import fourth from '/assets/sample8.webp'
import fifth from '/assets/sample9.webp'
import sixth from '/assets/sample10.webp'

const ThreeCard = () => {
  return (
    <div>
      <ThreeCardHead />
      <div className="">
        <ThreeCardOnly />
      </div>
    </div>
  );
};

const ThreeCardHead = () => (
  <div className="max-w-[71rem] m-auto md:px-0 px-4">
    <div className="flex lg:flex-row flex-col justify-between items-end gap-6 py-[64px] ">
      <div className="md:col-span-1 w-full lg:w-[65%]">
        <p className="text-start   font-medium text-sm uppercase font-section-one">Sectors</p>
        <p className="text-[40px] pb-[1.2rem] font-extrabold ">
          Sectors we operate in
        </p>
        <p className=" text-[25px]  pb-[1.2rem]">
          GEROS specializes in a comprehensive array of resources critical to
          modern infrastructure and technology.
        </p>
      </div>
    </div>
  </div>
);


const ThreeCardOnly = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-20 max-w-[75rem] m-auto mb-[4rem] lg:px-8 px-4  ">
      <div className="md:col-span-1">
          <div className=" overflow-hidden rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
            <img
              src={fourth}
              alt="img"
              loading="lazy"
              className="  w-full md:w-[352px] h-auto md:h-[235px]  transition-transform duration-1000 hover:scale-110 "
            />
          </div>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[30px] font-semibold pt-2">Precious Metals and Gemstones</p>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[18px] font-light pt-2">
            Our offerings include silver, platinum, palladium, and diamonds,
            which are indispensable in jewelry, industrial applications, and
            investment commodities.
          </p>
          {/* <p className='text-[14px] flex items-center text-[#007FAD] cursor-pointer' id='arrowanimaiton'>
                    <ArrowIcon />
                            Read more
                        </p> */}
        </div>
        <div className="md:col-span-1">
          <div className=" overflow-hidden rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
            {" "}
            <img
              src={therd}
              alt="img"
              loading="lazy"
              className="transition-transform duration-1000  w-full md:w-[352px] h-auto md:h-[235px]  hover:scale-110 "
            />
          </div>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[30px] font-semibold pt-2">Minerals and Metals</p>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[18px] font-light pt-2">
            From gold and copper to lithium and rare earth elements, our
            materials are pivotal in everything from battery production to
            electronic devices.
          </p>
          {/* <p className='text-[14px] flex items-center text-[#007FAD] cursor-pointer' id='arrowanimaiton'>
                    <ArrowIcon />
                            Read more
                        </p> */}
        </div>
        
        <div className="md:col-span-1">
          <div className=" overflow-hidden rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
            {" "}
            <img
              src={first }
              alt="img"
              loading="lazy"
              className=" w-full md:w-[352px] h-auto md:h-[235px]  transition-transform duration-1000 hover:scale-110 "
            />
          </div>
          <p style={{fontFamily:'ManifaPro2'  }} className=" text-[30px] pt-2 font-semibold">Fossil Fuels</p>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[18px] font-light  pt-2 ">
             Including oil, natural gas, and coal, we provide essential energy
            sources that power industries worldwide.
          </p>
          {/* <p className='text-[14px] flex items-center text-[#007FAD] cursor-pointer' id='arrowanimaiton'>
                    <ArrowIcon />
                            Read more
                        </p> */}
        </div>
        <div className="md:col-span-1">
          <div className=" overflow-hidden rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
            {" "}
            <img
              src={second}
              alt="img"
              loading="lazy"
              className=" w-full md:w-[352px] h-auto md:h-[235px]  transition-transform duration-1000 hover:scale-110 "
            />
          </div>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[30px] font-semibold pt-2">Industrial Minerals</p>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[18px] font-light pt-2">
            We source materials like phosphates, potash, salt, and quartz,
            essential for agriculture, manufacturing, and construction.
          </p>
          {/* <p className='text-[14px] flex items-center text-[#007FAD] cursor-pointer' id='arrowanimaiton'>
                    <ArrowIcon />
                            Read more
                        </p> */}
        </div>
        <div className="md:col-span-1">
          <div className=" overflow-hidden rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
            {" "}
            <img
              src={sixth}
              alt="img"
              loading="lazy"
              className="transition-transform duration-1000 hover:scale-110  w-full md:w-[352px] h-auto md:h-[235px] "
            />
          </div>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[30px] font-semibold pt-2">
            Energy Commodities Beyond Fossil Fuels
          </p>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[18px] font-light pt-2">
            We invest in the future with uranium for nuclear energy and biofuels
            for greener alternatives.
          </p>
          {/* <p className='text-[14px] flex items-center text-[#007FAD] cursor-pointer' id='arrowanimaiton'>
                    <ArrowIcon />
                            Read more
                        </p> */}
        </div>
        <div className="md:col-span-1">
          <div className=" overflow-hidden rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
            <img
              src={fifth}
              alt="img"
              loading="lazy"
              className="  w-full md:w-[352px] h-auto md:h-[235px]  transition-transform duration-1000 hover:scale-110 "
            />
          </div>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[30px] font-semibold pt-2">Water</p>
          <p style={{fontFamily:'ManifaPro2'  }} className="text-[18px] font-light pt-2">
            Recognizing water as a fundamental resource, we focus on its
            sustainable use and management to support life and economic
            development.
          </p>
          {/* <p className='text-[14px] flex items-center text-[#007FAD] cursor-pointer' id='arrowanimaiton'>
                    <ArrowIcon />
                            Read more
                        </p> */}
        </div>
      
      </div>
    </div>
  );
};


export default ThreeCard;
