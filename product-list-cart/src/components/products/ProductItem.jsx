/* eslint-disable react/prop-types */
import addToCartIcon from "../../images/icon-add-to-cart.svg";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
const ProductItem = ({ product }) => {
  return (
    <div className="product-card pt-8">
      <div className="card-contain">
        <div className="card-header relative">
          <img src={product.image.mobile} alt="" className="rounded-xl  md:hidden" />
          <img
            src={product.image.desktop}
            alt={product.name}
            className="hidden md:block rounded-xl w-72"
          />
          <button className=" add-to-cart flex justify-center px-4 py-3 w-44 rounded-full bg-white absolute right-1/2  translate-x-1/2 -translate-y-1/2" style={{ border: '1px solid rgba(128, 50, 50, 0.8)' }}>
            <img src={addToCartIcon} alt="" /> <li className="list-none ml-2 font-bold text-sm text-rose-900"> Add to Cart</li>
          </button>

          <div className=" hidden cart-added bg-red flex justify-between items-center px-4 py-3 w-44 rounded-full absolute right-1/2  translate-x-1/2 -translate-y-1/2">
            <button>
              <CiCircleMinus className="text-white text-2xl" />
            </button>
            <li className="list-none text-white">1</li>
            <button>
              <CiCirclePlus className="text-white text-2xl" />
            </button>
          </div>
        </div>
        <div className="card-body pt-8">
          <p className="prod-catagory text-rose-500">{product.category}</p>
          <h2 className="prod-name text-rose-900 font-bold opacity-95">{product.name}</h2>
          <p className="prod-price text-red font-bold text-lg">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
