import React from 'react'
import buybtnn from '../assets/buybtnn.png';
import porketextt from '../assets/porketextt.png';
import dexscreener from '../assets/dexscreener.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';

function Header() {
    return (
        <div className='absolute w-full'>
            <div className=' flex justify-center items-center z-40'>
                <div className='z-40 flex justify-between lg:px-10 px-5 items-center bg-[#FFC7C2] lg:w-3/6 w-full p-3 m-3 rounded-full border-4 border-black'>
                    <img src={porketextt} alt="" className='lg:w-auto w-24' />


                    <div className='flex flex-row justify-center items-center'>
                        <div className="socials flex flex-row">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={dexscreener} alt="" className='lg:w-10 w-7 m-1' />
                            </a>
                            <a href="https://x.com/porke_eth" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="" className='lg:w-10 w-7 m-1' />
                            </a>
                            <a href="https://t.me/porke_eth" target="_blank" rel="noopener noreferrer">
                                <img src={telegram} alt="" className='lg:w-10 w-7 m-1' />
                            </a>
                        </div>
                        <div className='mx-2 hidden lg:flex'>
                            <img src={buybtnn} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header