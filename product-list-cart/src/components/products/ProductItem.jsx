/* eslint-disable react/prop-types */
import addToCartIcon from "../../images/icon-add-to-cart.svg";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import { addToCart, modifyToCart ,removeFromCart} from "../../store/reducers/prodCartReducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const cart = useSelector((streState) => streState.prodCart.cartItems);
  const [itemQty, setItemQty] = useState(product.quantity);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    setItemQty(product.quantity);
  };
  const increaseHandler = () => {
    const newQty = itemQty + 1;
    setItemQty(newQty);
    dispatch(modifyToCart({ id: product.id, quantity: newQty }));
  };
  const decreaseHandler = () => {
    const newQty = itemQty - 1;
    if (newQty>0) {
      setItemQty(newQty);
      dispatch(modifyToCart({ id: product.id, quantity: newQty }));
    }
    else{
      dispatch(removeFromCart({ id: product.id }));
    }
   
  };
  const isInCart = cart?.some((item) => item.id === product.id);

  return (
    <div className="product-card pt-8">
      <div className="card-contain">
        <div className="card-header relative">
          <img
            src={product.image.mobile}
            alt=""
            className={`md:hidden rounded-xl border-2 ${
              isInCart ? "border-red" : "border-transparent"
            }`}
          />
          <img
            src={product.image.desktop}
            alt={product.name}
            className={`hidden md:block rounded-xl w-72 border-2 ${
              isInCart ? "border-red" : "border-transparent"
            }`}
          />
          {isInCart ? (
            <div className="cart-added bg-red flex justify-between items-center px-4 py-3 w-44 rounded-full absolute right-1/2  translate-x-1/2 -translate-y-1/2">
              <button className="product-increase"
              onClick={decreaseHandler}
              >
                <CiCircleMinus className="text-white text-2xl" />
              </button>
              <li className="list-none text-white"
              >
                {itemQty}
              
              </li>
              <button className="product-decrease" onClick={increaseHandler}>
                <CiCirclePlus className="text-white text-2xl" />
              </button>
            </div>
          ) : (
            <button
              className=" add-to-cart flex justify-center px-4 py-3 w-44 rounded-full bg-white absolute right-1/2  translate-x-1/2 -translate-y-1/2"
              style={{ border: "1px solid rgba(128, 50, 50, 0.8)" }}
              onClick={addToCartHandler}
            >
              <img src={addToCartIcon} alt="" />
              <li className="list-none ml-2 font-bold text-sm text-rose-900">
                Add to Cart
              </li>
            </button>
          )}
        </div>

        <div className="card-body pt-8">
          <p className="prod-catagory text-rose-500">{product.category}</p>
          <h2 className="prod-name text-rose-900 font-bold opacity-95">
            {product.name}
          </h2>
          <p className="prod-price text-red font-bold text-lg">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
