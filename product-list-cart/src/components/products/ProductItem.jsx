/* eslint-disable react/prop-types */
import addToCartIcon from '../../images/icon-add-to-cart.svg'

const ProductItem = ({product}) => {
    return (
        <div className="product-cart">
            <div className="cart-contain">
                <div className="cart-header">
                    <img src={product.image.mobile} alt="" />
                    <img src={product.image.desktop}  alt={product.name} className="hidden"/>
                <button> Add to Cart</button>
                <img src={addToCartIcon} alt="" />
                </div>
                <div className="cart-body">

                </div>
            </div>
        </div>
    )

};

export default ProductItem;