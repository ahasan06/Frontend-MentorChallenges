/* eslint-disable react/prop-types */
import itemRemoveIcon from "../../images/icon-remove-item.svg";
import { removeFromCart } from "../../store/reducers/prodCartReducer";
import { useDispatch } from "react-redux";

const CartItem = ({product}) => {
  const dispatch = useDispatch()
  const totalCart = parseFloat(product.quantity*product.price).toFixed(2)

  const removeFromCartHandler=()=>{
    dispatch(removeFromCart({id:product.id}))
  }
  return (
    <div className="cart-item">
      <div className="cart-content flex justify-between items-center border-b">
        <div className="cart-body flex flex-col py-4 gap-2">
          <h1 className="item-name font-semibold text-rose-950">{product.name}</h1>
          <div className="cart-details flex gap-3">
            <p className="item-qty font-bold text-red">{product.quantity}x</p>
            <p className="item-price text-rose-400 font-semibold">@${product.price}</p>
            <p className="item-total-price font-semibold text-rose-500">${totalCart}</p>
          </div>
        </div>
        <button
        onClick={removeFromCartHandler}
          className="removeItem rounded-full p-1"
          style={{ border: "1px solid rgba(128, 50, 50, 0.8)" }}
        >
          <img src={itemRemoveIcon} alt="" />
        </button>

      </div>
    </div>
  );
};

export default CartItem;
