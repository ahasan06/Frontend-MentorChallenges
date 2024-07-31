/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";
import leftSlideIcon from "../../public/assets/images/icon-angle-left.svg";
import rightSlideIcon from "../../public/assets/images/icon-angle-right.svg";
import arrowIcon from "../../public/assets/images/icon-arrow.svg";
function HomePage() {

  const products = useSelector((storeState) => storeState.products.products);
  const [cureentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[cureentIndex];

  const handleNext = () => {
    if (cureentIndex != products.length - 1) {
      setCurrentIndex(cureentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (cureentIndex !== 0) {
      setCurrentIndex(cureentIndex - 1);
    } else {
      setCurrentIndex(products.length - 1);
    }
  };

  return (
    <div className="room-homePage ">
    
    <div className="home-shopSection lg:grid grid-cols-3">
      <div className="home-shopImage relative lg:col-span-2">
        <img
          src={currentProduct?.image["mobile"]}
          alt="homepage-Slider"
          className="w-full md:hidden"
        />
        <img
          src={currentProduct?.image["desktop"]}
          alt="homepage-image"
          className="w-full  hidden md:block"
        />
        <div className="homepage-btn bg-black w-28 h-12 flex justify-between absolute bottom-0 right-0  lg:translate-x-full ">
          <button
            className=" hover:bg-dark-gray flex flex-1 items-center justify-center"
            onClick={handlePrev}
          >
            <img src={leftSlideIcon} alt="left icon" />
          </button>
          <button
            className=" hover:bg-dark-gray flex flex-1 items-center justify-center"
            onClick={handleNext}
          >
            <img src={rightSlideIcon} alt="right icon" />
          </button>
        </div>
      </div>
      <div className="home-shopContent px-5 py-10 h-full flex flex-col justify-center lg:px-12 ">
        <h2 className="font-bold text-4xl lg:text-6xl shop-font">{currentProduct?.title}</h2>
        <p className="font-semibold text-gray-400 py-4">
          {currentProduct?.description}
        </p>
        <button className=" hover:text-gray-500">
         <a className="flex items-center  font-semibold uppercase tracking-mega-wide gap-6 text-sm"> Shop Now <img src={arrowIcon} alt="arrow btn" /></a>
        </button>
      </div>
    </div>

    <div className="home-aboutSection   lg:grid grid-cols-4">
      <img
        src="./assets/images/image-about-dark.jpg"
        alt="image-dark"
        className="w-full lg:h-full"
      />
      <div className="home-shopContent h-full px-5 py-8 flex flex-col justify-center lg:p-16 lg:col-span-2">
        <h3 className="font-bold tracking-extra-wide uppercase">
          {" "}
          About our furniture{" "}
        </h3>
        <p className="font-semibold text-gray-400 py-4">
          {" "}
          Our multifunctional collection blends design and function to
          suit your individual taste. Make each room unique, or pick a
          cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from
          traditional to contemporary styles or anything in between.
          Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img
        src="./assets/images/image-about-light.jpg"
        alt="image-dark"
        className=" w-full lg:h-full"
      />
    </div>

</div>
  );
}

export default HomePage;
