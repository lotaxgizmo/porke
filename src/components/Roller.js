import React from 'react'
import roller from '../assets/roller.svg';

function Roller() {
    return (
        <div className="roller-container">
            <img src={roller} alt="roller" className="roller z-30 relative w-[1500px] lg:w-[2500px] max-w-none" />
        </div>
    )
}

export default Roller;
