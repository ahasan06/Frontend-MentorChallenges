import { useSelector } from "react-redux";
import ProductItem from './ProductItem';
const ProductList = () => {
    const products = useSelector(storeState => storeState.prodCart.products)
    console.log("Prod in componenets",products);

    return (
        <div className="md:grid grid-cols-3 gap-5">
            {
                products?.map((product)=>(
                    <ProductItem product={product} key={product.id}/>
                ))
            }
        </div>
    );
};

export default ProductList;