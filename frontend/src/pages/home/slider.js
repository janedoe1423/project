import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ slides }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = new Swiper(swiperRef.current, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
                {slides.map((slide, index) => (
                    <div key={index} className="swiper-slide">
                        <img src={slide.image} alt={slide.title} />
                        <div className="slide-content">
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default Slider;