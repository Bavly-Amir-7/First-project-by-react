import React from 'react'
import dress1 from "../../assets/images/dress styles/image 11.png"
import dress2 from "../../assets/images/dress styles/image 13.png"
import dress3 from "../../assets/images/dress styles/image 12.png"
import dress4 from "../../assets/images/dress styles/image 14.png"



export default function DressStyles() {
    return (
        <div>
            <div className="container styles">
                <div className='dressStyles'>
                    <div className='stylesTitles'>BROWSE BY dress STYLE</div>
                    <img className='dress1' src={dress1} alt="dress1" />
                    <img className='dress2' src={dress2} alt="dress2" />
                    <img className='dress3' src={dress3} alt="dress3" />
                    <img className='dress4' src={dress4} alt="dress4" />
                </div>
            </div>
        </div>
    )
}
