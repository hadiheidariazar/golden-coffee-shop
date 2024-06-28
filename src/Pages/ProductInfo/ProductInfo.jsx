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
                        <div className="flex flex-col space-y-4 md:space-y-3 xl:space-y-5 w-full md:w-1/2 ipad:w-2/3 my-4 md:my-0 md:mx-4">
                            <div className='flex flex-col bg-white dark:bg-zinc-700 dark:text-white px-4 py-3 rounded-lg'>
                                <div className='h-12 ipad:h-10 mb-6 ipad:mb-3 xl:mb-6'>
                                    <h1 className='product-title text-lg/6 ipad:text-base/5 xl:text-lg/6 line-clamp-2'>
                                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                                    </h1>
                                </div>
                                <div className='flex flex-col xs:flex-row justify-between items-center space-y-2 xs:space-y-0'>
                                    <div className='bg-green-200 text-green-700 w-full xs:w-max text-center px-2 py-1'>
                                        <span className='font-morabba-medium'>
                                            موجود در انبار
                                        </span>
                                    </div>
                                    <div className='bg-orange-200/80 dark:bg-orange-200 text-orange-600 px-2 py-1 w-full xs:max-w-44 xs:w-max'>
                                        <p className='text-center font-morabba-medium text-sm'>
                                            دسته بندی
                                            <br />
                                            <span className='line-clamp-1'>
                                                لوازم جانبی و تجهیزات و برقییی
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}