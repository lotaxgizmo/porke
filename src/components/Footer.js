import React from 'react'
import slider from '../assets/slider.png';
import contract2 from '../assets/contract2.svg';
import allrights from '../assets/allrights.png';
import footertext from '../assets/footertext.png';
import woodplank from '../assets/woodplank.png';

function Footer() {
    return (
        <div className='z-50 about relative flex justify-center items-center flex-col my-10 p-3'>
            <img src={woodplank} alt="" className='absolute lg:max-w-screen-2xl max-w-none' />
            <img src={slider} alt="" className='z-10 max-w-none lg:w-full w-[700px] ' />
            <div className='z-10  flex flex-col lg:flex-row justify-between items-center w-full p-10 ' >
                <div className="z-10 left">
                    <img src={contract2} alt="" className='lg:w-auto w-80 max-w-none' />
                </div>
                <div className="z-10 right ">

                    <img src={footertext} alt="" />
                    <img src={allrights} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Footer