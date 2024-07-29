import React from 'react'
import joinus from '../assets/joinus.png';
import joinustext from '../assets/joinustext.svg';
import uniswaocircle from '../assets/uniswaocircle.png';
import twittercircle from '../assets/twittercircle.png';
import telegramcircle from '../assets/telegramcircle.png';
import dextoolscircle from '../assets/dextoolscircle.png';

function Joinus() {
    return (
        <div className='bg-[#C3A083] z-50 relative lg:-mb-10 .'>
            <div className='mt-10 about z-50 joinus relative flex flex-col justify-center items-center bg-black rounded-2xl m-4'>
                <img src={joinus} alt="" className='z-50 hidden lg:flex p-10' />
                <div className="z-50 lg:absolute w-full px-20 two flex flex-col lg:flex-row lg:mt-16 mt-40 mb-5">
                    <div className="z-50  lg:mt-36 flex flex-col justify-center items-center left lg:w-1/2 ">
                        <img src={joinustext} alt="" className='z-50  w-80' />
                        <div className='z-50  flex justify-center '>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={uniswaocircle} alt="" className='z-50  p-1 w-20 lg:p-3 lg:w-24' />
                            </a>
                            <a href="https://x.com/porke_eth" target="_blank" rel="noopener noreferrer">
                                <img src={twittercircle} alt="" className='z-50  p-1 w-20 lg:p-3 lg:w-24' />
                            </a>
                            <a href="https://t.me/porke_eth" target="_blank" rel="noopener noreferrer">
                                <img src={telegramcircle} alt="" className='z-50  p-1 w-20 lg:p-3 lg:w-24' />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={dextoolscircle} alt="" className='z-50  p-1 w-20 lg:p-3 lg:w-24' />
                            </a>
                        </div>

                    </div>
                    <div className="z-50  right lg:w-1/2">
                        {/* <img src={joinustext} alt="" /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Joinus