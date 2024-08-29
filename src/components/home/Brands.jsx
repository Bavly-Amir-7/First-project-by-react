import React from 'react'
import first from "../../assets/images/brands/Group.png"
import second from "../../assets/images/brands/zara-logo-1 1.png"
import third from "../../assets/images/brands/gucci-logo-1 1.png"
import fourth from "../../assets/images/brands/prada-logo-1 1.png"
import fifth from "../../assets/images/brands/Group 2.png"

export default function Brands() {
  return (
    <div>
      <div className="brands">
        <div className='container imagesContainer'>
          <img src={first} alt="Brand Logo 1" />
          <img src={second} alt="Zara Logo" />
          <img src={third} alt="Gucci Logo" />
          <img src={fourth} alt="Prada Logo" />
          <img src={fifth} alt="Brand Logo 2" />
        </div>
      </div>
    </div>
  )
}
