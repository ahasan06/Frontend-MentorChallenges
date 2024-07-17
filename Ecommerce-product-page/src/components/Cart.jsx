/* eslint-disable react/prop-types */

import deleteCart from '../images/icon-delete.svg'


const Cart = ({ cart,removeFromCart }) => {

    return (
      <>
        <article className='bg-white rounded-xl shadow-2xl p-8 absolute lg:w-2/6 lg:h-auto w-11/12 lg:mt-0 top-full mt-2 right-4 z-50 '>
          <h2 className='border-b border-slate-400 lg:mb-2 mb-6 pb-6 font-bold text-xl'>Cart</h2>
          {cart.length === 0 ? (
            <p className='py-6'>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className='flex justify-between mt-2 mb-4'>
                <img src={item.thumbnail} alt="" className='w-12 h-12 rounded-lg mr-3' />
                <ul>
                  <li className='text-sm mb-1'>{item.title}</li>
                  <li className='text-sm'>${item.price} x {item.qty} <span className='font-bold pl-2'>${item.price * item.qty}</span></li>
                </ul>
                <button className='bg-transparent border-none cursor-pointer flex justify-center items-center'onClick={() => removeFromCart(item.id)}>
                  <img src={deleteCart}  alt="Delete" />
                </button>
              </div>
            ))
          )}
          <button className='flex items-center justify-center font-bold bg-orange-400 py-2 px-3 w-full rounded-xl shadow-orange-400'>Checkout</button>
        </article>
      </>
    );
  };

  export default Cart