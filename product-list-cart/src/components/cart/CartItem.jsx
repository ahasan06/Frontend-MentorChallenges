import itemRemoveIcon from "../../images/icon-remove-item.svg";
const CartItem = () => {
  return (
    <div className="cart-item">

      <div className="cart-content flex justify-between items-center border-b">
        <div className="cart-body flex flex-col py-4 gap-2">
          <h1 className="item-name font-semibold text-rose-950">Classic Tiramisu</h1>
          <div className="cart-details flex gap-3">
            <p className="item-qty font-bold text-red">1x</p>
            <p className="item-price text-rose-400 font-semibold">@$5.50</p>
            <p className="item-total-price font-semibold text-rose-500">$5.50</p>
          </div>
        </div>
        <button
          className="rounded-full p-1"
          style={{ border: "1px solid rgba(128, 50, 50, 0.8)" }}
        >
          <img src={itemRemoveIcon} alt="" />
        </button>

      </div>
    </div>
  );
};

export default CartItem;
