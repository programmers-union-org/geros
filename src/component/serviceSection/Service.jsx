
const Service = () => {
  return (
    <div className='bg-[#323232] '>
        <div className=' text-white py-16 max-w-[71rem] m-auto'>
                <div className='pb-16'>
                    <p className='text-[40px] '>At a glance</p>
                </div>
                <div className='grid md:grid-cols-3 gap-10'>
                    <div className='md:col-span-1 border-b'>
                        <p className='text-[53px]'>90</p>
                        <p className='pb-6 text-[14px]'>
                            Years of experience
                        </p>
                    </div>
                    <div className='md:col-span-1 border-b'>
                        <p className='text-[53px]'>73,000+</p>
                        <p className='pb-6 text-[14px]'>
                        Total workforce
                        </p>
                    
                    </div>
                    <div className='md:col-span-1 border-b'>
                        <p className='text-[53px]'>251.2</p>
                        <div className='pb-6 text-[14px]'>
                            <p >
                            Total hydrocarbon reserves
                            </p>
                            <p>(billion boe)</p>
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Service