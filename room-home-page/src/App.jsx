import { useEffect } from "react";
import data from "../data.json";
import { setProducts } from "./store/reducer/productReducer";
import { useDispatch } from "react-redux";


import { useState } from "react";
import { useSelector } from "react-redux";
import leftSlideIcon from "../public/assets/images/icon-angle-left.svg";
import rightSlideIcon from "../public/assets/images/icon-angle-right.svg";
import arrowIcon from "../public/assets/images/icon-arrow.svg";
import Nav from "./components/Nav";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(data));
  }, [data]);

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
    <div>
      <div className="room-container relative z-10 ">

        <Nav/>

        <div className="room-homePage ">
          <article>
            <div className="home-shopSection lg:grid grid-cols-2">
              <div className="home-shopImage relative ">
                <img
                  src={currentProduct?.image["mobile"]}
                  alt="homepage-Slider"
                  className="w-full md:hidden"
                />
                <img
                  src={currentProduct?.image["desktop"]}
                  alt="homepage-image"
                  className="w-full h-full hidden md:block"
                />
                <div className="homepage-btn bg-black w-28 h-12 flex justify-between absolute bottom-0 right-0 lg:h-1/6 lg:w-1/3 lg:translate-x-full ">
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
              <div className="home-shopContent px-5 py-10 h-full flex flex-col justify-center lg:pl-20 lg:pr-16">
                <h2 className="font-bold text-4xl lg:text-6xl shop-font">{currentProduct?.title}</h2>
                <p className="font-semibold text-gray-400 py-4">
                  {currentProduct?.description}
                </p>
                <button className="flex items-center gap-6  font-semibold uppercase tracking-mega-wide hover:text-gray-500">
                  Shop Now <img src={arrowIcon} alt="" />
                </button>
              </div>
            </div>

            <div className="home-aboutSection   lg:grid grid-cols-3">
              <img
                src="./assets/images/image-about-dark.jpg"
                alt="image-dark"
                className="w-full lg:h-full"
              />
              <div className="home-shopContent h-full px-5 py-8 flex flex-col justify-center lg:p-16 ">
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
          </article>
        </div>
      </div>
    </div>
  );
}
