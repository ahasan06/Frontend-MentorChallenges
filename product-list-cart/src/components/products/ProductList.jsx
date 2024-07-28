import { useSelector } from "react-redux";
import ProductItem from './ProductItem';
const ProductList = () => {
    const products = useSelector(storeState => storeState.prodCart.products)
    console.log("Prod in componenets",products);

    return (
        <div>
            {
                products?.map((product)=>(
                    <ProductItem product={product} key={product.id}/>
                ))
            }
        </div>
    );
};

export default ProductList;