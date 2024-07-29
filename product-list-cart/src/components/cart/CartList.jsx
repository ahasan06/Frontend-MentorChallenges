import cartEmptytoast from "../../images/illustration-empty-cart.svg";
import carbonNeuIcon from "../../images/icon-carbon-neutral.svg";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import CartConfirm from "./CartConfirm";
import { useState } from "react";

const CartList = () => {
  const cart = useSelector((streState) => streState.prodCart.cartItems);
  console.log("cartItem", cart);
  const [showCard, setShowCard] = useState(false);

  const isIncart = cart.some((item) => item);
  const totalCart = cart.reduce(
    (acc, current) => acc + parseFloat(current.price),
    0
  );
  const cartLength = cart.reduce(
    (acc, current) => acc + parseInt(current.quantity),
    0
  );
  const confirmOrderHandler = () => {
    setShowCard(true);
    // setTimeout(() => {
    //   setShowCard(false);
    // }, 10000);
  };

  return (
    <div className="cart-container bg-white mt-8 lg:mt-0 p-6 rounded-lg">
      <h1 className="text-2xl font-bold text-red">Your Cart ({cartLength})</h1>
      <div className="cart-item">
        {isIncart ? (
          <div className="cart-content  pt-4">
            <div className=" h-60 overflow-y-auto scrollbar">
              {cart?.map((product) => (
                <CartItem product={product} key={product.id} />
              ))}
            </div>

            <div className="cart-total py-5 flex justify-between">
              <p className="font-semibold text-rose-900">Order Total</p>
              <h2 className="font-bold text-2xl text-rose-900">${totalCart}</h2>
            </div>
            <div className="quality-tag flex items-center justify-center gap-2 bg-rose-50 py-4 rounded-lg">
              <img src={carbonNeuIcon} alt="" />
              <li className=" list-none font-semibold text-rose-500">
                This is a
                <span className="text-rose-950 font-bold"> carbon-neutral</span>{" "}
                delivery
              </li>
            </div>
            <button
              className="py-4 mt-6 w-full bg-red rounded-full text-white font-semibold"
              onClick={confirmOrderHandler}
            >
              Confirm Order
            </button>
          </div>
        ) : (
          <div className="cart-empty-content flex flex-col items-center lg:pt-8">
            <img src={cartEmptytoast} alt="cart-empty" />
            <p className="font-bold text-rose-500 pt-4 lg:text-sm">
              Your added items willbe appear here
            </p>
          </div>
        )}
      </div>

      <div className="popUp-cart">
        {showCard && <CartConfirm setShowCard={setShowCard} />}
      </div>
    </div>
  );
};

export default CartList;
