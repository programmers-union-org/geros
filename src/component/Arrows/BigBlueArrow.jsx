import React from 'react';
import arrow from  '/assets/blueArrow.webp'

const BigBlueArrow = () => {
  return (
    <div>
          <div>
                <div id='arrowanimaiton' className='w-[64px] h-[64px] border-2 border-[#007FAD] relative rounded-full'>
                    <div className='w-[60px] h-[60px] border-[15px] border-transparent relative rounded-full'>
                        <div className='flex justify-center items-center w-full h-full absolute top-0 left-0 overflow-hidden'>
                            <img src={arrow} alt="arrow" className='w-auto h-auto transition-transform duration-700 ease-in-out 
                                    arrow-first absolute opacity-100 -translate-x-full' />
                            <img src={arrow} alt="arrow" className='w-auto h-auto transition-transform duration-700 ease-in-out 
                                    arrow-second absolute ml-[23px] -translate-x-1/2' />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BigBlueArrow