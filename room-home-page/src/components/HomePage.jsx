/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";
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
    <div>
      
    </div>
  );
}

export default HomePage;
