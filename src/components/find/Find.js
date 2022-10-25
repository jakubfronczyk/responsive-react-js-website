import React from 'react'
import Card from './Card'
import styles from './Find.module.css'
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Find() {

    return (
        <div className={styles.find}>
            <div className={styles.heading}>
                <h1>Find your drive</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore the world's largers car sharing marketplace</span>
                    </p>
                </div>
            </div>
            <div className={styles.slider_container}>
            
<Swiper
                // install Swiper modules
                modules={[Navigation,Scrollbar]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                breakpoints={{
                  // when window width is >= 340px
                  340: {
                    width: 200,
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 4,
                  },
                  // when window width is >= 1040px
                  1040: {
                    width: 1040,
                    slidesPerView: 5,
                  },
                }}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                    <Card img='https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80' brand='Audi'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card img='https://images.unsplash.com/photo-1616455263449-0bd3aac04029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' brand='BMW'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card img='https://images.unsplash.com/photo-1546518071-fddcdda7580a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' brand='Mercedes'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card img='https://images.unsplash.com/photo-1655285267202-8faebd47e486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' brand='Volkswagen'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card img='https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80' brand='Jeep'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card img='https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' brand='Lamborghini'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card img='https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' brand='Porsche'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card img='https://images.unsplash.com/photo-1610908374865-dae3c6392a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' brand='Bentley'/>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Find
