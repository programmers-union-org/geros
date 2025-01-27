import React from 'react'
import GalleryHead from './GalleryHead'
import ArrowIcon from '../Arrows/ArrowIcon'

const Gallery = () => {
  return (
    <div>
        <GalleryHead />
        <div>
        <div className='grid md:grid-cols-3  pb-[4rem] max-w-[71rem] gap-4 m-auto'>
                <div className='md:col-span-1 space-y-8'>
                    <div>
                        <img style={{ borderRadius: "1.125rem 1.125rem 0 1.125rem" }} src={"https://www.aramco.com/-/jssmedia/magazine/2023/migratory-birds/02_shrike.jpg?cx=0.78&cy=0.26&cw=592&ch=444"}
                            className=' w-[364px] mx-auto' alt="img" loading='lazy' />
                        <p className='text-3xl pt-3 leading-8'>
                            Protecting some of the favourite pitstops of Saudi Arabia’s migrating birds
                        </p>
                        <p className='text-[14px] flex items-center text-[#007FAD] cursor-pointer' id='arrowanimaiton'>
                            <ArrowIcon />
                            Read more
                        </p>
                    </div>
                    <div>
                        <img style={{ borderRadius: "1.125rem 1.125rem 0 1.125rem" }} src={"https://www.aramco.com/-/jssmedia/magazine/2023/rsi/okinawa/01_hero_img_okinawa.jpg?cx=0.56&cy=0.57&cw=592&ch=444"}
                            className=' w-[364px] mx-auto' alt="img" loading='lazy' />
                        <p className='text-3xl  pt-3 leading-8'>
                            Real stories inspire — Bringing Okinawa’s unique coral reef back from the brink
                        </p>
                        <p className='text-[14px] flex items-center text-[#007FAD] cursor-pointer' id='arrowanimaiton'>
                        <ArrowIcon />
                            Read more
                        </p>
                    </div>
                </div>
                <div className='md:col-span-2'>
                    <img style={{ borderRadius: "1.125rem 1.125rem 0 1.125rem" }} src={"https://www.aramco.com/-/jssmedia/magazine/2023/from-palm-to-pipeline/graded_5243.jpg?cx=0.71&cy=0.62&cw=783&ch=620"}
                        className=' md:w-[750.6px] md:h-[795px] md:object-cover mx-auto' alt="img" loading='lazy' />
                    <p className='text-3xl  pt-3'>
                        From palm to pipeline: the seed of a great idea
                    </p>
                    <p className='text-[14px] flex items-center text-[#007FAD] cursor-pointer' id='arrowanimaiton'>
                    <ArrowIcon />
                            Read more
                        </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery