import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { MainCroselData } from './MainCroselData';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';


const MainCrosel = () => {
    const items = MainCroselData.map((item)=> <img  className='cursor-pointer' role='presentation'
    src={item.image} alt=''/>)

     return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        mouseTracking
        />
);
}
export default MainCrosel;