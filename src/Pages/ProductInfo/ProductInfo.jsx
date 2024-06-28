import React, { useState } from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import 'swiper/css/thumbs';

// import required modules
import { Zoom, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductInfo() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <TitlePage title="اطلاعات محصول" />
            <Header />
            <section className='product-info mt-28 md:mt-40 mb-16 md:mb-28'>
                <div className="container">
                    <Breadcrumb
                        firstTitle="لوازم جانبی و تجهیزات"
                        firsTitletLink="/category/coffee"
                        lastTitle="قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی"
                        isBg={true}
                    />

                    <div className="product-info-body flex items-center flex-col md:flex-row mt-10">
                        <div className='bg-white dark:bg-zinc-700 p-4 rounded-lg w-full md:w-1/2 ipad:w-1/3'>
                            <Swiper
                                spaceBetween={0}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Zoom, FreeMode, Thumbs]}
                                zoom={true}
                                className="mySwiper2 rounded-md select-none h-auto"
                            >
                                <SwiperSlide className='flex items-center justify-center cursor-zoom-in relative'>
                                    <div className="swiper-zoom-container">
                                        <img loading="lazy" src="/images/products/p1.png" alt='product Images' className='h-auto md:h-full max-h-[400px] w-full' />
                                    </div>
                                    <span className="absolute top-0 right-0 py-1 px-2 text-xs xs:text-sm font-bold text-zinc-700 bg-orange-300 rounded-full">15%</span>
                                </SwiperSlide>
                                <SwiperSlide className='flex items-center justify-center cursor-zoom-in'>
                                    <div className="swiper-zoom-container">
                                        <img loading="lazy" src="/images/products/p1.png" alt='product Images' className='h-auto md:h-full max-h-[400px] w-full' />
                                    </div>
                                    <span className="absolute top-0 right-0 py-1 px-2 text-xs xs:text-sm font-bold text-zinc-700 bg-orange-300 rounded-full">15%</span>
                                </SwiperSlide>
                                <SwiperSlide className='flex items-center justify-center cursor-zoom-in'>
                                    <div className="swiper-zoom-container">
                                        <img loading="lazy" src="/images/products/p1.png" alt='product Images' className='h-auto md:h-full max-h-[400px] w-full' />
                                    </div>
                                    <span className="absolute top-0 right-0 py-1 px-2 text-xs xs:text-sm font-bold text-zinc-700 bg-orange-300 rounded-full">15%</span>
                                </SwiperSlide>
                                <SwiperSlide className='flex items-center justify-center cursor-zoom-in'>
                                    <div className="swiper-zoom-container">
                                        <img loading="lazy" src="/images/products/p1.png" alt='product Images' className='h-auto md:h-full max-h-[400px] w-full' />
                                    </div>
                                    <span className="absolute top-0 right-0 py-1 px-2 text-xs xs:text-sm font-bold text-zinc-700 bg-orange-300 rounded-full">15%</span>
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={7}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper mt-2 select-none"
                            >
                                <SwiperSlide className='flex items-center justify-center'>
                                    <img loading="lazy" src="/images/products/p1.png" alt='product Images' className='rounded-[5px]' />
                                </SwiperSlide>
                                <SwiperSlide className='flex items-center justify-center'>
                                    <img loading="lazy" src="/images/products/p1.png" alt='product Images' className='rounded-[5px]' />
                                </SwiperSlide>
                                <SwiperSlide className='flex items-center justify-center'>
                                    <img loading="lazy" src="/images/products/p1.png" alt='product Images' className='rounded-[5px]' />
                                </SwiperSlide>
                                <SwiperSlide className='flex items-center justify-center'>
                                    <img loading="lazy" src="/images/products/p1.png" alt='product Images' className='rounded-[5px]' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}