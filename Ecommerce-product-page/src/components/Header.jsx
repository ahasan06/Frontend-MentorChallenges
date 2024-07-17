/* eslint-disable react/prop-types */
import logo from '../images/logo.svg'
import menubar from '../images/icon-menu.svg'
import avatar from '../images/image-avatar.png'
import { BsCart3 } from "react-icons/bs";
import MobileHeader from './MobileHeader';
import { useState } from 'react';
import Cart from './Cart'

const Header = ({ cart, removeFromCart }) => {
  console.log("header cart", cart);
  const [menuBar, setMenuBar] = useState(false)
  const [cartVisible, setCartVisible] = useState(false)
  const totalCartQty = cart.reduce((acc, item) => acc + item.qty, 0);

  const openMobileNav = () => {
    setMenuBar(true)
  }

  const cartHandler = () => {
    setCartVisible(prev => !prev);
  };
  return (
    <>
      <header className="flex relative items-center justify-between border-b border-slate-200  h-20 px-8 max-w-7xl mx-auto">
        <div className="flex items-center h-full justify-start gap-8">
          <ul className='flex items-center h-full justify-start gap-5'>
            <li><img className='relative top-0.5 cursor-pointer lg:hidden ' src={menubar} alt="menubar" onClick={openMobileNav} /></li>
            <li><img src={logo} alt="logo" /></li>
          </ul>

          {
            menuBar && <MobileHeader setMenuBar={setMenuBar} menuBar={menuBar} />
          }

          <nav className="lg:block hidden h-full ">
            <ul className="flex items-center justify-start h-full gap-4">
              <li className="cursor-pointer h-full flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">Collection</li>
              <li className="cursor-pointer h-full flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">Men</li>
              <li className="cursor-pointer h-full flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">Wemen</li>
              <li className="cursor-pointer h-full flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">About</li>
              <li className="cursor-pointer h-full flex items-center border-b-2 hover:text-black border-transparent hover:border-orange-600 transition-colors duration-300">Contact</li>
            </ul>
          </nav>
          
        </div>

        <div >
          <ul className="flex items-center  lg:gap-2 justify-start">
            <button className="flex cursor-pointer bg-transparent bg-none border-none" onClick={cartHandler}>
              <BsCart3 className="relative text-2xl text-slate-600 " />
              <p className='absolute top-2 lg:right-24 right-16 bg-orange-400 rounded-full h-6 w-6 text-white'>{totalCartQty}</p>
            </button>
            <li>
              {cartVisible && <Cart cart={cart} removeFromCart={removeFromCart} />}
            </li>
            <li className="cursor-pointer"><img src={avatar} alt="" className="w-8 lg:w-12  border-2 border-transparent hover:border-orange-400 rounded-full transition-colors duration-300" /></li>
          </ul>
        </div>
      </header>
    </>
  )
};

export default Header;