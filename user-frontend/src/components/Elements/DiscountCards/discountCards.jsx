import React from 'react'
import "./discountCards.css"
import { discountCard } from '../../../assets/data'
import Slider from "react-slick";

const DiscountCards = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  

  return (
    <div className='mainContainerDiscCards'>
      <div className="freeDel">
        <div className="container freeShipping">
          <div className="truckCont">
            <img src="https://img.icons8.com/?size=100&id=7493&format=png&color=000000" alt="free shipping" />
            <span className='freeShippingHeadInside'>FREE SHIPPING </span>
          </div>
          <span className='freeShippingHeadOutside'>FREE SHIPPING </span>
          &nbsp; <span className='freeShippingText'> Free Delivery Now On Your First Order and over $200 </span> &nbsp;
          <span className='freeShippingAmount'>- Only ₹499</span>
        </div>
      </div>

      <div className="discContainer">
        <div className="row discSubContainer">
          <Slider {...settings}>
            {discountCard.map((data, index) => (
              <div key={index}>
                <div className="cardsDisc"> 
                  <img src={data.image} alt={`slider-${index}`} />
                  {/* <div>
                    <p>{data.title}</p>
                    <p>{data.price}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default DiscountCards
