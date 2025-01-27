import React from "react";
import BigBlueArrow from "../Arrows/BigBlueArrow";

const HoverCardHead = () => {
  return (
    <div className="">
      <div className="max-w-[71rem] m-auto">
        <div className="flex lg:flex-row flex-col justify-between items-end gap-6 py-[64px]">
          <div className="md:col-span-1 w-full lg:w-[30rem] px-4rem">
            <p className="text-[40px]"> News from the world of Aramco</p>
          </div>

          <div className="md:col-span-1  ">
            <div
              className="flex items-center justify-end gap-3 cursor-pointer"
              id="arrowanimaiton"
            >
              <p className="text-[18px] mb-2 text-[#007FAD] ">Read all news</p>
              {/* <div className="w-[64px] h-[64px] border-2 border-[#007FAD] relative rounded-full">
                <div className="w-[60px] h-[60px] border-[15px] border-[#f2f2f2] relative rounded-full">
                  
                </div>
              </div> */}
              <BigBlueArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCardHead;
