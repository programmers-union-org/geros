import React from 'react'
import BigBlueArrow from '../Arrows/BigBlueArrow'
import InnerPage from '../../innerPage/InnerPage'
import LastContent from '../../innerPage/LastContent'

const VideoHead = () => {
  return (
    <div className='max-w-[71rem] m-auto'>
        <div className='flex lg:flex-row flex-col justify-between items-end gap-6 my-8 md:py-[64px] px-4 md:px-7'>
                <div className='md:col-span-1 '>
                    <p style={{fontFamily:'ManifaPro2'  }} className='text-[45px] font-light  pb-[1.2rem]'>
                    OUR PROMISE
                    </p>
                    {/* <p className='text-[40px] pb-[1.2rem]'>90 years of powering progress across the world</p> */}
                  <LastContent />
                </div>
                {/* <div className='md:col-span-1  '>
                    <div className='flex items-center justify-end gap-3 cursor-pointer' id='arrowanimaiton'>
                        <p className='text-[18px] mb-2 text-[#007FAD] '>Aramco & Sustainability</p>
                       <BigBlueArrow />
                    </div>
                </div> */}
            </div>
    </div>
  )
}

export default VideoHead