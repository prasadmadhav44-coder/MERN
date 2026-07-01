import Car from "../../assets/car.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { carImage } from "../../assets/constant";

const ImageCard = () => {
  return (
    <>
      <p>Image Component</p>

      <p>Via Local Storage</p>
      <img src={Car} alt="car-image" />

      <p>Via CDN Approach</p>
      <img src={carImage} alt="car-image" />

      <LazyLoadImage
        alt={"car-image"}
        src={carImage}
      />
    </>
  );
};

export default ImageCard;
