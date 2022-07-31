import React, { useEffect, useState, useRef } from 'react'

const dishes = [
    "/images/food1.jpg",
    "/images/food2.jpg",
    "/images/food3.jpg",
];

let count = 0;
export default function Slider(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim');

    }
    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation);
        startSlider();
    }, []);

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick()
        }, 3000);
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
        <div ref={slideRef} className='w-full select-none'>
                <div className='aspect-w-16 aspect-h-9'></div>
            <img src={dishes[currentIndex]} alt="" />
            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                <button onClick={handleOnPrevClick}>Previous</button>
                <button onClick={handleOnNextClick}>Next</button>
            </div>
        </div>
    )
}