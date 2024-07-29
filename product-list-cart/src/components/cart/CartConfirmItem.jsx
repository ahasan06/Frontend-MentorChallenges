/* eslint-disable react/prop-types */

function CartConfirmItem({ product }) {
  const totalCart = parseFloat(product.quantity * product.price).toFixed(2);
  const transCateName = (name) => {
    const word = name.split(" ");
    return word.length > 2 ? word.slice(0, 2).join(" ") + ".." : name;
  };
  return (
    <div className="cart-item">
      <div className="cart-content flex justify-between items-center border-b">
        <div className="cart-body flex flex-col py-4 gap-2">
          <div className="cart-details flex gap-4">
            <img
              src={product.image.thumbnail}
              alt=""
              className="w-16 rounded-lg"
            />
            <div className="cart-details flex flex-col gap-3">
              <h1 className="item-name font-semibold text-lg">
                {transCateName(product.name)}
              </h1>
              <div className="flex gap-4">
                <p className="item-qty font-bold text-red text-lg">
                  {product.quantity}x
                </p>
                <p className="item-price text-rose-400 font-semibold text-lg">
                  @${product.price}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="totalItem">
          <p className="item-total-price text-lg font-bold text-rose-900">
            ${totalCart}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartConfirmItem;
