import { useEffect } from 'react';
import data from '../data.json'
import { useDispatch } from 'react-redux';
import { setProducts } from './store/reducers/prodCartReducer';
import ProductList from './components/products/ProductList';


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setProducts(data))
  }, [data])

  return (
    <div className='bg-rose-50 h-screen'>
      <div className="container mx-auto">

        <div className="product-container p-8">
          <div className="product-list">
            <h1 className='font-bold text-3xl text-rose-950'>Desserts</h1>
       
            <ProductList/>
          </div>
          <div className="product-cart"></div>
        </div>

      </div>
    </div>
  );
};

export default App;