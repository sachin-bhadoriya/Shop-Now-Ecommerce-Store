import React from 'react'
import './Card.css'
import { IoCartOutline  } from "react-icons/io5";

const Card = ({ companyName, productTitle, productRating, cancelPriceProduct, activePriceProduct, productImageLink }) => {
  return (
    <div>
        <div className="cardContainer">
            <div className="imageContainer">
                <img  src={productImageLink} alt={companyName} />
            </div>
            <div className="productDetailContainer">
                <div className="companyName">
                    <span className='montserrat'>{companyName}</span>
                </div>
                <div className="productTitle">
                    <span className='montserrat'>{productTitle}</span>
                </div>
                <div className="productRating">
                    <span>{productRating}</span>
                </div>
                <div className="productPrice">
                    <div className="cancelPriceProduct">
                        <span className='montserrat'>₹{cancelPriceProduct}</span>
                    </div>
                    <div className="activePriceProduct">
                        <span className='montserrat'>₹{activePriceProduct}</span>
                    </div>
                </div>
                <div className="addToCartBtn">
                    <button> <IoCartOutline  /> <span className='montserrat'> ADD TO CART</span> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
