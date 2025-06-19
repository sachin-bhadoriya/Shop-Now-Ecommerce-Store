import React from 'react'
import "./features.css"
import { FaTruckFast } from "react-icons/fa6";
import { PiKeyReturnFill } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BsHeadset } from "react-icons/bs";

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="subContainerFeature">
          <div className="freeShip">
            <FaTruckFast className='iconsFeature' fontSize={33}/>
            <p className='featitle'>Free Shipping</p>
            <p className='feadisc'>For all Orders Over $100</p>
          </div>
          <div className="freeShip">
            <PiKeyReturnFill className='iconsFeature' fontSize={40} />
            <p className='featitle'>30 Days Returns</p>
            <p className='feadisc'>For an Exchange Product</p>
          </div>
          <div className="freeShip">
            <BsWallet2 className='iconsFeature' fontSize={33} />
            <p className='featitle'>Secured Payments</p>
            <p className='feadisc'>Payment Cards Accepted</p>
          </div>
          <div className="freeShip">
            <LiaGiftSolid className='iconsFeature' fontSize={40} />
            <p className='featitle'>Special Gifts</p>
            <p className='feadisc'>Our First Product Order</p>
          </div>
          <div className="freeShip">
            <BsHeadset className='iconsFeature' fontSize={33} />
            <p className='featitle'>Support 24/7</p>
            <p className='feadisc'>Contact us Anytime</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features