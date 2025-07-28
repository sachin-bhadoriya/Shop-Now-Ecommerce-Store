import React from 'react'
import CatSliderItem from '../CatSliderItem/catSliderItem'
import './catSlider.css'
import { images } from '../../../assets/data'


const CatSlider = () => {
  return (
    <div className="catSliderContainer">
      <div className="row align-items-stretch">
        <div className="col-md-7">
          <div className="carouselContainer h-100 py-1">
            <CatSliderItem />
          </div>
        </div>
        <div className="col-md-5 d-flex flex-column justify-content-between">
          <div className="cardOne card-img-wrapper py-1">
            <img src={images.carouselFour} alt="Card 1" />
          </div>
          <div className="cardTwo card-img-wrapper py-1">
            <img src={images.carouselFour} alt="Card 2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatSlider