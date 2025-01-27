import React from "react";
import BigBlueArrow from "../Arrows/BigBlueArrow";

const ThreeCardHead = () => {
  return (
    <div className="max-w-[71rem] m-auto md:px-6 px-4">
      <div className="flex lg:flex-row flex-col justify-between items-end gap-6 py-[64px] ">
        <div className="md:col-span-1 w-full lg:w-[65%]">
          <p  className="text-start   font-medium text-sm uppercase font-section-one">Sectors</p>
          <p  className="text-[40px] pb-[1.2rem] ">
            Sectors we operate in
          </p>
          <p  className=" text-[30px]  pb-[1.2rem]">
            GEROS specializes in a comprehensive array of resources critical to
            modern infrastructure and technology.
          </p>
        </div>
        {/* <div className='md:col-span-1  '>
                    <div className='flex items-center justify-end gap-3 cursor-pointer' id='arrowanimaiton'>
                        <p className='text-[18px] mb-2 text-[#007FAD] '>Aramco & Sustainability</p>
                        
                        <BigBlueArrow />
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default ThreeCardHead;
