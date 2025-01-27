import React from 'react';
import down from '../../assets/down.png';
import pluse from '../../assets/pluse.png';
import DownLoadHead from './DownLoadHead';


const DownLoad = () => {
  return (
    <div className='bg-bgGray pb-16'>
    <DownLoadHead />
        <div style={{borderRadius:'1.125rem'}} className='bg-white px-5 max-w-[71rem] m-auto '>
                <p className='text-[24px] py-6'>
                    Key documents
                </p>
                <hr />

                <div className='py-6'>
                    <div className='md:flex  justify-between items-center'>
                        <p className='text-[18px] text-[#007FA2] underline-animation hover:no-underline '>
                            Annual Report 2023
                        </p>

                        <div className='text-[12px] flex'>

                            <p> March 11, 2024</p>
                            <p className='font-bold mx-2 md:block hidden'>&middot;</p>

                            <p>.pdf</p>
                            <p className='font-bold mx-2 md:block hidden'>&middot;</p>

                            <p>18.2MB</p>

                            <div className='ps-12 ms-auto me-1 flex'>
                                <button className='px-3'>
                                    <img src={down} alt="download" className='w-[24px] h-[24px]' />
                                </button>
                                <button className='px-3'>
                                    <img src={pluse} alt="download" className='w-[24px] h-[24px]' />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className='py-6'>
                    <div className='md:flex  justify-between items-center'>
                        <p className='text-[18px] text-[#007FA2] underline-animation hover:no-underline'>
                            Full-year 2023 financial report



                        </p>

                        <div className='text-[12px] flex'>

                            <p> March 11, 2024</p>
                            <p className='font-bold mx-2 md:block hidden'>&middot;</p>

                            <p>.pdf</p>
                            <p className='font-bold mx-2 md:block hidden'>&middot;</p>

                            <p>5.4MB</p>

                            <div className='ps-12  ms-auto me-1 flex'>
                                <button className='px-3'>
                                    <img src={down} alt="download" className='w-[24px] h-[24px]' />
                                </button>
                                <button className='px-3'>
                                    <img src={pluse} alt="download" className='w-[24px] h-[24px]' />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className='py-6'>
                    <div className='md:flex  justify-between items-center'>
                        <p className='text-[18px] text-[#007FA2] underline-animation hover:no-underline'>
                            Our 2022 Sustainability Report


                        </p>

                        <div className='text-[12px] flex'>

                            <p> June 15, 2024</p>
                            <p className='font-bold mx-2 md:block hidden'>&middot;</p>

                            <p>.pdf</p>
                            <p className='font-bold mx-2 md:block hidden'>&middot;</p>

                            <p>11.1MB</p>

                            <div className='ps-12  ms-auto me-1 flex'>
                                <button className='px-3'>
                                    <img src={down} alt="download" className='w-[24px] h-[24px]' />
                                </button>
                                <button className='px-3'>
                                    <img src={pluse} alt="download" className='w-[24px] h-[24px]' />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className='py-6 flex justify-end'>
                    <button className='flex items-center'>
                        <p className='mb-1 text-[16px] px-6 text-[#007FA2]'> Download zip file</p>
                        <div className='w-[45px] h-[45px] rounded-full border-2 border-blue-900 flex justify-center items-center'>
                        <img src={down} alt="download" className='w-[18px] h-[18px]' />
                        </div>
                    </button>


                </div>
            </div>
    </div>
  )
}

export default DownLoad