/* eslint-disable react/prop-types */
import { useState } from 'react';
import arrow from '../assets/images/icon-arrow.svg';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Question({ item, showAns, setShowAns }) {
    const handleAnswer = (id) => {
        if (showAns === id) {
            setShowAns(null); 
        } else {
            setShowAns(id); 
        }
    };

    return (
        <div className={`border-b cursor-pointer hover:text-soft-red ${showAns === item.id && 'border-b-2 pb-4 '}`} onClick={() => handleAnswer(item.id)}>
            <div className='flex items-center justify-between py-5 '>
                <h2 className="text font-semibold hover:text-soft-red">{item.question} ?</h2>
                <button className={`${showAns === item.id && 'text-soft-red'}`}> { showAns === item.id ?<IoIosArrowUp /> : <IoIosArrowDown /> } </button>
            </div>
            {showAns === item.id && <p>{item.answer}</p>}
        </div>
    );
}
export default Question
