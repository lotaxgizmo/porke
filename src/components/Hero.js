import React, { useState, useEffect } from 'react';
import samplebg from '../assets/samplebg.jpg';
import porkehero from '../assets/porkehero.png';
import sittingbg from '../assets/sittingbg.png';
import heroboard from '../assets/heroboard.png';
import contract2 from '../assets/contract2.svg';
import buybtn from '../assets/buybtn.svg';

function Hero() {
    const [offset, setOffset] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };

        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const sittingbgParallaxStyle = {
        transform: `translateY(${offset * 0.5}px)`,
        transition: 'transform 0.4s ease-out',
        left: `${mousePosition.x * -0.01}px`,
        top: `${mousePosition.y * -0.01}px`,
        position: 'relative',
    };

    const porkeheroParallaxStyle = {
        transform: `translateY(-${offset * 0.2}px)`,
        transition: 'transform 0.1s ease-out',
        left: `${mousePosition.x * 0.01}px`,
        top: `${mousePosition.y * 0.01}px`,
        position: 'relative',
    };

    return (
        <div className='z-20 about relative hero  flex flex-col-reverse lg:flex-row justify-center items-start lg:h-[1000px]'>

            <div className=" z-20 left lg:w-1/2 self-start lg:relative absolute lg:top-0 top-52">
                <img src={sittingbg} alt="" className='z-20 absolute lg:-ml-32 lg:w-[1600px] w-[700px] lg:mt-0 -mt-40 -ml-48 max-w-max' style={sittingbgParallaxStyle} />
            </div>

            <div className="right flex flex-col justify-center items-center lg:w-1/2 p-5 lg:p-20">
                <img src={porkehero} alt="" style={porkeheroParallaxStyle} className='lg:mt-0 mt-14 w-[300px] lg:w-[600px] max-w-none z-10' />
                <div className="contract relative mt-52">
                    <div className="z-40' -mb-[38vw]  lg:absolute flex flex-col justify-center items-center top-8 'left-10 lg:top-14 lg:left-14">
                        <img src={contract2} alt="" className='z-40 relative w-[60vw] lg:w-96' />
                        <img src={buybtn} alt="" className='z-40 relative w-40 lg:w-52 mt-3' />
                    </div>
                    <img src={heroboard} alt="" className='relative lg:w-[500px] z-30' />
                </div>
            </div>

        </div>
    );
}

export default Hero;
