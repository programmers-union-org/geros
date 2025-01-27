import React from 'react'
import HoverCardHead from './HoverCardHead'
import BlueArrow from '../Arrows/BlueArrow'

const HoverCard = () => {
  return (
    <div className='bg-bgGray'>
<HoverCardHead />
        <div className='grid md:grid-cols-4 max-w-[75rem] m-auto gap-5 space-y-2 '>
                <div id='seventhSecCard' className='md:col-span-2 lg:col-span-1 cursor-pointer mt-2' >
                    <div id='arrowanimaiton' >
                        <img src={"https://www.aramco.com/-/jssmedia/news/2024/aramco-rongsheng-web.jpg?cx=0.5&cy=0.5&cw=427&ch=240"} alt="img" loading='lazy' className='rounded-t-2xl mx-auto' />
                        <div className='seventSecChild p-6 bg-white  h-[234px]  rounded-t-2xl -mt-4 relative'>
                            <p className='text-[14px]'>NEWS
                                <span className='font-bold mx-2'>&middot;</span>
                                <span> APRIL 22, 2024 </span> </p>
                            <p className='text-[20px]  pt-4'> Aramco in talks to acquire 10% stake in Chinese company Hengli Petrochemica height 0.3s ease; </p>
                        </div>
                        <span className='flex justify-end items-end pe-6 pb-6 bg-white rounded-b-2xl'>
                            <div className='flex items-center justify-end gap-3 cursor-pointer' >
                                <BlueArrow />
                            </div>
                        </span>
                    </div>
                </div>
                <div id='seventhSecCard' className='md:col-span-2 lg:col-span-1 cursor-pointer' >
                    <div id='arrowanimaiton'>
                        <img src={"https://www.aramco.com/-/jssmedia/news/2024/logo-aramco-fifa-original.jpg?cx=0.5&cy=0.5&cw=427&ch=240"} alt="img" loading='lazy' className='rounded-t-2xl mx-auto' />
                        <div className='seventSecChild p-6 bg-white  h-[234px] rounded-t-2xl -mt-4 relative'>
                            <p className='text-[14px]'>NEWS
                                <span className='font-bold mx-2'>&middot;</span>
                                <span> APRIL 22, 2024 </span> </p>
                            <p className='text-[20px]  py-4 '> Aramco in talks to acquire 10% stake in Chinese company Hengli Petrochemica height 0.3s ease; </p>
                        </div>
                         <span className='flex justify-end items-end pe-6 pb-6 bg-white rounded-b-2xl'>
                            <div className='flex items-center justify-end gap-3 cursor-pointer' >
                                <BlueArrow />
                            </div>
                        </span>
                    </div>
                </div>
                <div id='seventhSecCard' className='md:col-span-2 lg:col-span-1 cursor-pointer' >
                    <div id='arrowanimaiton'>
                        <img src={"https://www.aramco.com/-/jssmedia/news/2024/aramco-hengli-mou.jpg?cx=0.5&cy=0.5&cw=427&ch=240"} alt="img" loading='lazy' className='rounded-t-2xl mx-auto' />
                        <div className='seventSecChild p-6 bg-white  h-[234px] rounded-t-2xl -mt-4 relative'>
                            <p className='text-[14px]'>NEWS
                                <span className='font-bold mx-2'>&middot;</span>
                                <span> APRIL 22, 2024 </span> </p>
                            <p className='text-[20px]  py-4 '> Aramco in talks to acquire 10% stake in Chinese company Hengli Petrochemica height 0.3s ease; </p>
                        </div>
                         <span className='flex justify-end items-end pe-6 pb-6 bg-white rounded-b-2xl'>
                            <div className='flex items-center justify-end gap-3 cursor-pointer' >
                                <BlueArrow />
                            </div>
                        </span>
                    </div>
                </div>
                <div id='seventhSecCard' className='md:col-span-2 lg:col-span-1 cursor-pointer' >
                    <div id='arrowanimaiton'>
                        <img src={"https://www.aramco.com/-/jssmedia/news/2024/fadhili-gas-plant-contracts-signing-ceremony.jpeg?cx=0.5&cy=0.5&cw=427&ch=240"} alt="img" loading='lazy' className='rounded-t-2xl mx-auto' />
                        <div className='seventSecChild p-6 bg-white  h-[234px] rounded-t-2xl -mt-4 relative'>
                            <p className='text-[14px]'>NEWS
                                <span className='font-bold mx-2'>&middot;</span>
                                <span> APRIL 22, 2024 </span> </p>
                            <p className='text-[20px]  py-4 '> Aramco in talks to acquire 10% stake in Chinese company Hengli Petrochemica height 0.3s ease; </p>
                        </div>
                         <span className='flex justify-end items-end pe-6 pb-6 bg-white rounded-b-2xl'>
                            <div className='flex items-center justify-end gap-3 cursor-pointer' >
                                <BlueArrow />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HoverCard