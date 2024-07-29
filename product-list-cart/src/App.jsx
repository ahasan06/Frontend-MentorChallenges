import { useEffect } from 'react';
import data from '../data.json';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/reducers/prodCartReducer';
import ProductList from './components/products/ProductList';
import CartList from './components/cart/CartList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(data));
  }, [data]);

  return (
    <div className='bg-rose-50 h-full relative z-10'>
      <div className="container mx-auto md:pt-10 ">
        <div className="product-container p-8 lg:flex justify-center gap-4">
          <div className="product-list">
            <h1 className='font-bold text-5xl text-rose-900'>Desserts</h1>
            <ProductList/>
          </div>
          <div className="product-cart w-full lg:w-96">
            <CartList/>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default App;
