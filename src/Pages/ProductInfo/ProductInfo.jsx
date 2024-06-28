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
                            <div className='bg-white dark:bg-zinc-700 dark:text-white px-4 py-3 rounded-lg'>
                                <h4 className='font-morabba-medium mb-2 ipad:mb-1 lg:mb-4'> درباره محصول </h4>
                                <div className='h-27 ipad:h-20 xl:h-36 xs:h-32 mb-4 ipad:mb-4 xl:mb-6'>
                                    <p className='product-about line-clamp-5 ipad:line-clamp-4 xl:line-clamp-6 text-sm xs:text-base ipad:text-sm xl:text-base'>
                                        ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                                        ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                                        ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم.
                                    </p>
                                </div>
                                <div className='flex items-center'>
                                    <span>
                                        امتیاز:
                                    </span>
                                    <div className='flex ms-1.5'>
                                        <svg className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                            </path>
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                            </path>
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                            </path>
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                            </path>
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                            </path>
                                        </svg>
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