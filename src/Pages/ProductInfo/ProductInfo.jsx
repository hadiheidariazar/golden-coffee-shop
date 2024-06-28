import React, { useState } from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import { Swiper, SwiperSlide } from 'swiper/react'
import Swal from 'sweetalert2'

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

    const showAddToCartAlert = () => {
        Swal.fire({
            text: 'محصول مورد نظر با موفقیت به سبد خرید اضافه شد',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!'
        })
    }

    const showAddCommentAlert = () => {
        Swal.fire({
            text: 'دیدگاه شما با موفقیت ثبت شد شد',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!'
        })
    }

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
                            <div className='flex justify-between items-center bg-white dark:bg-zinc-700 dark:text-white px-4 py-3 rounded-lg'>
                                <div className='me-2'>
                                    <button className='btn-orange text-sm/4 xs:text-base/4 p-3 rounded-md tracking-tighter' onClick={showAddToCartAlert}> افزودن به سبد </button>
                                </div>
                                <div className='flex flex-col text-end'>
                                    <span className='text-red-500 dark:text-gray-300 text-[13px] xs:text-sm line-through mb-3'> 2,000,000 </span>
                                    <span className='text-green-600 dark:text-green-500 font-dana-bold text-base/3 xs:text-2xl/3'>
                                        2,000,000
                                        <span className='text-[10px] xs:text-sm'> تومان </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='comments mb-20 md:mb-28'>
                <div className="container">
                    <h2 className=' text-3xl/normal font-morabba-medium dark:text-white border-b-2 border-b-black dark:border-b-white w-max'> دیدگاه شما </h2>
                    <div className="new-comment bg-white dark:bg-zinc-700 border-2 border-dashed border-gray-500 p-4 rounded-lg mt-5 dark:text-white">
                        <div className='mb-8'>
                            <label htmlFor="user-score"> امتیاز: </label>
                            <select id="user-score" className='text-black bg-blue-200/30 dark:bg-gray-500 dark:text-white ms-2 py-1 focus:outline-none w-40 rounded-lg'>
                                <option value="عالی">عالی</option>
                                <option value="بسیار خوب">بسیار خوب</option>
                                <option value="خوب">خوب</option>
                                <option value="متوسط">متوسط</option>
                                <option value="ضعیف">ضعیف</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="user-comment-input"> متن دیدگاه شما </label>
                            <textarea id='user-comment-input' rows="5" className='w-full focus:outline-none rounded-md text-black bg-blue-200/30 dark:bg-gray-500 dark:text-white px-3 py-2 resize-none -mb-2 mt-2 dark:placeholder:text-gray-300' placeholder='دیدگاه خود را بنویسید...'></textarea>
                        </div>
                        <button className='btn-orange px-3 py-2 rounded-md mt-6' onClick={showAddCommentAlert}>
                            ثبت دیدگاه
                        </button>
                    </div>
                    <h2 className=' text-3xl/normal font-morabba-medium dark:text-white border-b-2 border-b-black dark:border-b-white w-max mt-14'> دیدگاه ها </h2>
                    <div className="comments">
                        <div className="flex flex-col gap-y-4 bg-white dark:bg-zinc-700 border-2 border-dashed border-gray-500 p-4 xs:p-5 rounded-lg mt-5 dark:text-white">
                            <div className='flex items-center gap-x-1.5 xs:gap-x-4'>
                                <img loading="lazy" src="/images/avatars/avatar10.png" alt="User Profile" className='rounded-full w-11 h-11 xs:w-14 xs:h-14' />
                                <div className='w-full'>
                                    <p className='font-dana-bold text-zinc-800 text-base dark:text-white w-max max-w-44 line-clamp-1'> هادی حیدری آذر </p>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center gap-x-2 xs:gap-x-3'>
                                            <span className='text-[11px] xs:text-xs mt-1 font-bold text-zinc-500 dark:text-zinc-300'> 1402/12/25 </span>
                                            <div className='flex items-center'>
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
                                        <a href='/login' className='btn-orange text-xs xs:text-sm p-2 rounded font-dana-bold'> وارد شوید </a>
                                    </div>
                                </div>
                            </div>
                            <div className='comment-content'>
                                <p className='text-sm xs:text-base'>
                                    سلام
                                    <br />
                                    ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                                    ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                                </p>

                                <div className="reply-container"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4 bg-white dark:bg-zinc-700 border-2 border-dashed border-gray-500 p-4 xs:p-5 rounded-lg mt-5 dark:text-white">
                            <div className='flex items-center gap-x-1.5 xs:gap-x-4'>
                                <img loading="lazy" src="/images/avatars/avatar1.jpg" alt="User Profile" className='rounded-full w-11 h-11 xs:w-14 xs:h-14' />
                                <div className='w-full'>
                                    <p className='font-dana-bold text-zinc-800 text-base dark:text-white w-max max-w-44 line-clamp-1'> هادی حیدری آذر </p>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center gap-x-2 xs:gap-x-3'>
                                            <span className='text-[11px] xs:text-xs mt-1 font-bold text-zinc-500 dark:text-zinc-300'> 1402/12/25 </span>
                                            <div className='flex items-center'>
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
                                                <svg className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='text-zinc-700 dark:text-white cursor-pointer' title='پاسخ'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 xs:w-6 xs:h-6">
                                                <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='comment-content'>
                                <p className='text-sm xs:text-base'>
                                    سلام
                                    <br />
                                    ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                                    ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                                </p>

                                <div className="reply-container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}