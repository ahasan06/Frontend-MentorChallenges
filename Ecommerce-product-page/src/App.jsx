/* eslint-disable no-unused-vars */
import { useState } from "react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import Header from "./components/Header";
import LightBox from "./components/LightBox";

export const data = [
  {
      id:1,
      prodId:1,
      title:"Fall Limited Edition Sneakers",
      mainImage:"./images/image-product-1.jpg",
      thumbnail:"./images/image-product-1-thumbnail.jpg",
      price: 125.00
  }, 
  
  {
      id:2,
      prodId:1,
      title:"Fall Limited Edition Sneakers",
      mainImage:"./images/image-product-2.jpg",
      thumbnail:"./images/image-product-2-thumbnail.jpg",
      price: 125.00
  },
     
  {
      id:3,
      prodId:1,
      title:"Fall Limited Edition Sneakers",
      mainImage:"./images/image-product-3.jpg",
      thumbnail:"./images/image-product-3-thumbnail.jpg",
      price: 125.00
  },
     
  {
      id:4,
      prodId:1,
      title:"Fall Limited Edition Sneakers", 
      mainImage:"./images/image-product-4.jpg",
      thumbnail:"./images/image-product-4-thumbnail.jpg",
      price: 125.00
  },
]

const App = () => {
  const [products, setProducts] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  const [qty, setQty] = useState(1);
  const [lightBox, setshowLightBox] = useState(false);
  const [cart, setCart] = useState([]);

  console.log(data);

  const addToCart = () => {
    const productToAdd = { ...products[value], qty };
    const existingProduct = cart.find(item => item.id === productToAdd.prodId);
    console.log("product to add ", productToAdd);
    if (existingProduct) {
      alert('Product Already Added')
    }
    else{
      setCart([...cart, productToAdd]);
      
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };


  const lighBoxHandler = () => {
    setshowLightBox(true)
  }

  const increaseHandler = () => {
    setQty((value) => value + 1)
  }

  const decreaseHandler = () => {
    if (qty !== 1) {
      setQty((value) => value - 1)
    }
    else {
      setQty(1)
    }
  }


  const nextSlide = () => {
    if (value !== products.length - 1) {
      setValue(value + 1);
    } else {
      setValue(0);
    }
  };

  const prevSlide = () => {
    if (value !== 0) {
      setValue(value - 1)
    }
    else {
      setValue(products.length - 1)
    }
  }

  return (
    <>
      <Header cart={cart} removeFromCart={removeFromCart}/>
      {
        lightBox && <LightBox products={products} value={value} mainImage={mainImage} prevSlide={prevSlide} nextSlide={nextSlide} setValue={setValue} setshowLightBox={setshowLightBox} />
      }

      <section className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  lg:mt-20 items-center ">

        <article>

          <div className="relative lg:flex flex-col items-center">
            <img src={mainImage} alt="" className="relative w-full h-72 lg:h-full lg:w-9/12 lg:rounded-2xl cursor-pointer  object-cover object-top" onClick={lighBoxHandler} />
            <ul className="lg:hidden">
              <li>
                <button onClick={prevSlide} className="bg-white p-5 rounded-full  absolute left-4 top-1/2  -translate-y-1/2 focus:outline-orange-200">
                  <FaChevronLeft />
                </button>
              </li>
              <li>
                <button onClick={nextSlide} className="bg-white p-5 rounded-full absolute right-4 top-1/2  -translate-y-1/2 focus:outline-orange-200"><FaChevronRight />
                </button>
              </li>
            </ul>
          </div>

          <ul className="hidden lg:flex flex-wrap justify-center items-center gap-10 mt-5">
            {products.map((item, index) => (
              <li key={item.id} onClick={() => setValue(index)} className={` ${index === value ? 'border-2 border-orange-600 opacity-60 rounded-2xl' : ''} cursor-pointer border-2 rounded-2xl`}>
                <img src={item.thumbnail} alt="" className="lg:w-20 rounded-xl overflow-hidden" />
              </li>
            ))}
          </ul>
        </article>

        <article className="items-center px-8">

          <h2 className="text-slate-600 font-bold uppercase my-5 text-sm">Sneaker Company</h2>
          <h1 className="text-slate-900 font-bold mb-5 text-4xl lg:text-5xl ">Fall Limited Edition Sneakers.</h1>
          <p className="text-slate-900 mb-10">
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

          <div className="mb-6 flex justify-between lg:block">
            <ul className="flex gap-4 items-center mb-2">
              <li className="text-3xl font-bold ">${qty * 125.00}</li>
              <li className="text-white bg-slate-900 flex align-middle  h-fit text-sm rounded px-2 py-0.5">50%</li>
            </ul>
            <p className="font-bold text-slate-600 text-lg"><s>${250.00 * qty}</s></p>
          </div>

          <div className=" gap-5 mb-4 lg:flex justify-between ">

            <ul className="flex lg:w-1/2 items-center justify-between bg-slate-100 py-4 px-4  rounded-xl shadow">
              <li className="cursor-pointer h-full flex items-center" onClick={decreaseHandler}><img src={minus} alt="" /></li>
              <li className="font-bold">{qty}</li>
              <li className="cursor-pointer h-full flex items-center" onClick={increaseHandler}><img src={plus} alt="" /></li>
            </ul>

            <button onClick={addToCart} className="flex items-center justify-center font-bold text-lg gap-3 bg-orange-400 py-4 px-4 w-full mt-4 lg:mt-0  rounded-xl shadow-orange-400">
              <BsCart3 /> Add to cart
            </button>
          </div>
        </article>

      </section>
    </>
  );
};

export default App;