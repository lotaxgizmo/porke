import React from 'react'
import roadmapphase3 from '../assets/roadmapphase3.svg';
import roadmapphase2 from '../assets/roadmapphase2.svg';
import roadmapphase1 from '../assets/roadmapphase1.svg';
import plankback from '../assets/plankback.png';
import plankback2 from '../assets/plankback2.png';
import roaddmaptxt from '../assets/roaddmaptxt.svg';

function Roadmap() {
    return (
        <div className='bg-black lg:-mb-10'>
            <div className='z-[20]  relative about flex flex-col justify-center items-center p-4 min-h-screen overflow-clip '>
                <img src={roaddmaptxt} alt="" className='z-[20] w-[550px] lg:mt-20' />
                <img src={plankback} alt="" className='z-[10] hidden lg:flex absolute top-0 p-10' />
                <img src={plankback2} alt="" className='z-[10] lg:hidden rotate-90 flex absolute top-0 w-[3700px] max-w-none' />

                <div className="z-[20] roadmap flex flex-col lg:flex-row justify-center items-center">
                    <img src={roadmapphase1} alt="" className='lg:w-72 lg:m-10' />
                    <img src={roadmapphase2} alt="" className='lg:w-72 lg:m-10' />
                    <img src={roadmapphase3} alt="" className='lg:w-72 lg:m-10' />
                </div>


            </div>
        </div>
    )
}

export default Roadmap