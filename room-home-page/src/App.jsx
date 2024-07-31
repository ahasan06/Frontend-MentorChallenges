import { useEffect } from "react";
import data from "../data.json";
import { setProducts } from "./store/reducer/productReducer";
import { useDispatch } from "react-redux";


import Nav from "./components/Nav";
import HomePage from "./components/HomePage";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(data));
  }, [data]);



  return (
    <div>
      <div className="room-container relative z-10">
        <Nav/>
        <HomePage/>
      </div>
    </div>
  );
}
