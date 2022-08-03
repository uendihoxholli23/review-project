import React, { useEffect, useState, useRef } from 'react'
import { BsChevronLeft, BsChevronRight} from "react-icons/bs";
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
        <div ref={slideRef} className='slider'>
            <div className='mainRating' style={{textAlign: 'center', fontSize: 23}}>
                <h2>Let customers speak for us</h2>
                <StarRating />
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <div className='card' style={{width: 200, padding:'10px', textAlign: 'center'}}>
                    <b><input className='title' type="text" placeholder='Title'/></b>
                    <textarea name="comment" id="comment" placeholder='Comment...'></textarea>
                    <input className='name' type="text" placeholder='User name...'/>
                    <input type="date" />
                    <img src={dishes[currentIndex]} alt="" width={200} style={{padding: '10px'}}/>
                </div>
                <div className='card' style={{width: 200, padding:'10px', textAlign: 'center'}}>
                    <b><input className='title' type="text" placeholder='Title'/></b>
                    <textarea name="comment" id="comment" placeholder='Comment...'></textarea>
                    <input className='name' type="text" placeholder='User name...'/>
                    <input type="date" />
                    <img src={dishes[currentIndex]} alt="" width={200} style={{padding: '10px'}}/>
                </div>
                <div className='card' style={{width: 200, padding:'10px', textAlign: 'center'}}>
                    <b><input className='title' type="text" placeholder='Title'/></b>
                    <textarea name="comment" id="comment" placeholder='Comment...'></textarea>
                    <input className='name' type="text" placeholder='User name...'/>
                    <input type="date" />
                    <img src={dishes[currentIndex]} alt="" width={200} style={{padding: '10px'}}/>
                </div>
            </div>
            <div className=' w-full top-1/2  px-20 flex justify-center items-center'>
                <button className=' p-1 cursor-pointer hover:bg-green-100 bg-opacity-100 transition' onClick={handleOnPrevClick}><BsChevronLeft size={30}/></button>
                <button className='p-1 cursor-pointer hover:bg-green-100 bg-opacity-100 transition' onClick={handleOnNextClick}><BsChevronRight size={30}/></button>
            </div>
        </div>
      
    )
}