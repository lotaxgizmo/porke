import React, { useEffect, useState } from 'react';
import sittingbg from '../assets/sittingbg.svg';
import connect from '../assets/connect.svg';
import fund from '../assets/fund.svg';
import howtobuy from '../assets/howtobuy.svg';
import swap from '../assets/swap.svg';

function Howto() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='z-[-10] about overflow-clip'>
            <div className=' z-[9]  howto p-4 flex flex-col lg:flex-row relative overflow-hidden'>
                <div className="relative overflow-clip left lg:w-1/2 mt-20 lg:mt-0">
                    <img
                        src={howtobuy} alt="" className='z-[-1] lg:fixed w-96 lg:animate-bounce top-0p left-10'
                        style={{ top: `calc(25% + ${scrollPosition * -0.05}px)` }}
                    />
                </div>
                <div className="right lg:w-1/2">
                    <img src={connect} alt="" className='my-20' />
                    <img src={fund} alt="" className='my-20' />
                    <img src={swap} alt="" className='my-20' />
                </div>
            </div>
        </div>
    );
}

export default Howto;
