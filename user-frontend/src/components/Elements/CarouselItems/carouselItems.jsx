import React from "react";
import Slider from "react-slick";
import { images, catCards } from '../../../assets/data'
import './carouselItems.css'



export default function SimpleSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
  };
  return (
    <div className="wholecarouselandcardcontainer">
      <div className="mainContainerCarousel">
        <Slider {...settings}>
          {Object.values(images).map((img, index) => (
            <div key={index}>
              <img src={img} alt={`slider-${index}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="categoryContainer">
        <div className="categorySub">
          <div className="subCategoryContainer">
            {catCards.map((card, id) => (
              <div key={id} className="fashion cardsContainer">
                <img src={card.img} alt={card.text} />
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}