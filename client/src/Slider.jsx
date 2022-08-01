import React, { useEffect, useState, useRef } from 'react'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft} from "react-icons/ai";
import StarRating from './StarRating';

 
const dishes = [
    "/images/food1.jpg",
    "/images/food2.jpg",
    "/images/food3.jpg",
];

let count = 0;
let slideInterval;
export default function Slider(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim');

    }
    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation);
        slideRef.current.addEventListener('mouseenter', pauseSlider);
        slideRef.current.addEventListener('mouseleave', startSlider);
        startSlider();
        return () => {
            pauseSlider()
        }
    }, []);

    const startSlider = () => {
     slideInterval = setInterval(() => {
            handleOnNextClick()
        }, 3000);
    }

    const pauseSlider = () => {
        clearInterval(slideInterval)
    }

    const handleOnNextClick = () => {
        count = (count + 1) % dishes.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }
    const handleOnPrevClick = () => {
        const dishesLength = dishes.length;
        count = (currentIndex + dishesLength - 1) % dishesLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');

    }

    return (
        
        <div ref={slideRef} className=' select-none'>
            <div style={{textAlign: 'center', fontSize: 23}}>
                <h2>Let customers speak for us</h2>
                <StarRating />
            </div>
            <div className='aspect-w-16 aspect-h-3' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={dishes[currentIndex]} alt="" />
            </div>
            <div className='absolute  w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                <button className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnPrevClick}><AiOutlineVerticalRight size={30}/></button>
                <button className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30}/></button>
            </div>
        </div>
      
    )
}