import React from "react";
import Image from "next/image";
// import CarouselImage from "/assets/CarouselImage.svg";

const Carousel = () => {
  return (
    <Image
      src="/assets/carousel.svg"
      width={854}
      height={400}
      layout="responsive"
      alt="Hero "
    />
  );
};
export default Carousel;
