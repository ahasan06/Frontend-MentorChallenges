/* eslint-disable react/prop-types */
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import remove from '../images/icon-close.svg'
const LightBox = ({ products, mainImage, value, prevSlide, nextSlide, setValue, setshowLightBox }) => {

    const removeLightboxHandler = () => {
        setshowLightBox(false)
    }

    return (
        <>
            <article className="bg-black flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-50 bg-opacity-70">

                <div>
                    <div className="relative lg:flex flex-col items-center">
                        <img src={remove} alt=""  className="w-6 h-6 absolute lg:right-52 right-1/2 transform translate-x-1/2 -top-10 cursor-pointer z-50"  onClick={removeLightboxHandler} />
                        <img src={mainImage} alt="" className=" relative  lg:w-7/12 lg:rounded-2xl opacity-100" />
                        <ul className="">
                            <li>
                                <button onClick={prevSlide} className="bg-white p-5 rounded-full  absolute left-4 lg:left-44 top-1/2  -translate-y-1/2 focus:outline-orange-200">
                                    <FaChevronLeft />
                                </button>
                            </li>
                            <li>
                                <button onClick={nextSlide} className="bg-white p-5 rounded-full absolute right-4 lg:right-44 top-1/2  -translate-y-1/2 focus:outline-orange-200"><FaChevronRight />
                                </button>
                            </li>
                        </ul>
                    </div>

                    <ul className="flex  lg:flex justify-center items-center gap-5 lg:gap-14 mt-5">
                        {products?.map((item, index) => (
                            <li key={item.id} onClick={() => setValue(index)} className={` ${index === value ? 'border-2 border-orange-400 opacity-60 rounded-2xl' : 'border-transparent'} cursor-pointer border-2  rounded-2xl`}>
                                <img src={item.thumbnail} alt="" className="lg:w-24 rounded-xl overflow-hidden" />
                            </li>
                        ))}
                    </ul>
                </div>
            </article>

        </>
    )
};

export default LightBox;