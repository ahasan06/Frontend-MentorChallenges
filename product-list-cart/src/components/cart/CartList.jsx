import cartEmptytoast from "../../images/illustration-empty-cart.svg";
import carbonNeuIcon from '../../images/icon-carbon-neutral.svg'
import CartItem from "./CartItem";
const CartList = () => {
  return (
    <div className="cart-container bg-white mt-8 lg:mt-0 p-6 rounded-lg">
      <h1 className="text-2xl font-bold text-red">Your Cart (0)</h1>
      <div className="cart-item">
        
        <div className="cart-empty-content flex flex-col items-center hidden">
          <img src={cartEmptytoast} alt="cart-empty" />
          <p className="font-bold text-rose-500 pt-4">
            Your added items willbe appear here
          </p>
        </div>

        <div className="cart-content pt-4">
          <CartItem />
          <CartItem />
          <CartItem />

          <div className="cart-total py-5 flex justify-between">
            <p className="font-semibold text-rose-900">Order Total</p>
            <h2 className="font-bold text-2xl text-rose-900">$46.50</h2>
          </div>
          <div className="quality-tag flex items-center justify-center gap-2 bg-rose-50 py-4 rounded-lg">
            <img src={carbonNeuIcon} alt="" />
            <tag className="font-semibold text-rose-500">This is a <span className="text-rose-950 font-bold">carbon-neutral</span> delivery</tag>
          </div>

          <button className="py-4 mt-6 w-full bg-red rounded-full text-white font-semibold">Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
