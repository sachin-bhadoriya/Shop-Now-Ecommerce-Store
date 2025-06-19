import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./catSliderItem.css";
import arrow from "../../../assets/images/arrow.png";
import arrowTwo from "../../../assets/images/arrowTwo.png";
import { images } from "../../../assets/data";

const CatSliderItem = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);



  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-buttons">
        <button onClick={scrollPrev}>⟨</button>
        <button onClick={scrollNext}>⟩</button>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {Object.values(images).map((src, index) => (
            <div className="embla__slide" key={index}>
              <img src={src} alt={`Slide ${index}`} className="slide-img" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CatSliderItem;
