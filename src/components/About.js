import React from 'react'
import aboutimg from '../assets/aboutimg.svg';
import aboutdesktop from '../assets/aboutdesktop.svg';
import aboutmobile from '../assets/aboutmobile.svg';
import tokenomicsimg from '../assets/tokenomicsimg.svg';
import porkenomics from '../assets/porkenomics.png';
import porkenomicsmob from '../assets/porkenomicsmob.png';

function About() {
    return (
        <>
            <div className='about relative z-40 flex flex-col lg:flex-row lg:p-20 p-4 justify-center items-center'>
                <div className="left">
                    <img src={aboutdesktop} alt="" className='hidden lg:flex' />
                    <img src={aboutmobile} alt="" className='lg:hidden flex' />
                </div>
                <div className="right">
                    <img src={aboutimg} alt="" />
                </div>
            </div>




            <div className='about relative z-40 flex flex-col-reverse lg:flex-row lg:p-20 p-4 justify-center items-center'>
                <div className="right">
                    <img src={tokenomicsimg} alt="" />
                </div>
                <div className="left">
                    <img src={porkenomics} alt="" className='hidden lg:flex ' />
                    <img src={porkenomicsmob} alt="" className='lg:hidden flex ' />
                </div>
            </div>

        </>
    )
}

export default About