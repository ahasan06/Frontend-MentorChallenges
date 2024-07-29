/* eslint-disable react/prop-types */
import itemRemoveIcon from "../../images/icon-remove-item.svg";
import { useSelector } from "react-redux";
import CartConfirmItem from "./CartConfirmItem";
import orderConfimIcon from "../../images/icon-order-confirmed.svg";
function CartConfirm({ setShowCard }) {
  const cart = useSelector((streState) => streState.prodCart.cartItems);
  const totalCart = cart.reduce(
    (acc, current) => acc + parseFloat(current.price),
    0
  );
  const popUpRemoveHandler = () => {
    setShowCard(false);
  };
  return (
    <div className="popUp-orderConfirm absolute bottom-0 left-0 z-20 bg-black h-full w-full bg-opacity-50 ">
      <button
        onClick={popUpRemoveHandler}
        className="removePopup border border-rose-200 hover:bg-white transition-all rounded-full p-1 fixed top-20 right-1/2 lg:top-28 "
      >
        <img src={itemRemoveIcon} className="size-5" />
      </button>
      <div className="popUp-card h-5/6 bg-white w-full fixed bottom-0 rounded-t-2xl p-8 lg:h-3/5 lg:rounded-xl lg:translate-x-1/2 lg:translate-y-1/2 lg:right-1/2 lg:bottom-1/2">
        <div className="card-container h-full ">
          <img src={orderConfimIcon} alt="order confim" className="w-16 lg:w-12" />
          <h2 className="text-5xl pt-8 pb-3 font-bold lg:text-2xl lg:pt-1 lg:pb-1">
            Order <br className="lg:hidden"/> Confirmed
          </h2>
          
          <p className="text-lg font-semibold text-rose-500 lg:text-sm">
            We hope you enjoy your food!
          </p>

          <div className="orderCart bg-rose-50 mt-10 rounded-xl h-3/6 px-4 py-1 lg:mt-5 lg:h-3/5">
          <div className=" h-5/6 overflow-y-auto scrollbar">
            {cart?.map((product) => (
              <CartConfirmItem product={product} key={product.id} />
            ))}
          </div>
            <div className="cart-total py-5 lg:py-2 flex justify-between items-center">
              <p className="font-semibold text-rose-900">Order Total</p>
              <h2 className="font-bold text-3xl text-rose-900 lg:text-xl">${parseFloat(totalCart).toFixed(2)}</h2>
            </div>
          </div>

          <button className="py-4 mt-6 w-full bg-red rounded-full text-white font-semibold">
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartConfirm;
