import React from 'react'
import ProductBox from '../ProductBox/ProductBox'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function LastProducts() {
    return (
        <section className="products-section pt-8 md:pt-20 lg:pt-36 bg-no-repeat">
            <div className="container mt-5">
                <SectionHeader
                    title="جدیدترین محصولات"
                    subTitle="فرآوری شده از دانه قهوه">
                    <a href="/shop"
                        className="flex justify-center items-center md:gap-x-0.5 pr-3 pl-1 h-11 rounded-lg transition-colors text-orange-400 dark:text-orange-300 hover:dark:bg-orange-300/20 hover:bg-orange-300/35 text-sm xs:text-lg ipad:text-xl tracking-tightest">
                        مشاهده همه
                        <svg className="w-4 h-4 xs:w-5 xs:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </a>
                </SectionHeader>

                <div className="section-body grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 md:gap-4">
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />

                    <div
                        className="p-3 md:p-5 bg-white hover:bg-gray-100 dark:bg-zinc-700 hover:dark:bg-zinc-600 rounded-2xl shadow-normal transition-all">
                        <a href="#" className="flex relative justify-center items-center">
                            <img loading="lazy" src="/images/products/p1.png" alt="Product Image"
                                className="w-32 mx-auto md:w-auto" />
                            <span
                                className="absolute top-0 right-0 py-1 px-2 text-xs xs:text-sm font-bold text-zinc-700 bg-orange-300 rounded-full">15%</span>
                        </a>
                        <a href="/category/coffee"
                            className="inline-block bg-sky-700 p-1 xs:py-1 xs:px-2 rounded-full text-white text-[11px]/3 md:text-sm/3 font-morabba -translate-y-full">
                            لوازم جانبی و تجهیزات
                        </a>
                        <h3 className="text-[15px]/5 xs:text-[17px]/6 md:text-xl/6 h-16">
                            <a href="/product/coffee"
                                className="tracking-tighter hover:text-orange-500 dark:text-white hover:dark:text-orange-300 transition-colors overflow-y-hidden line-clamp-2">
                                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                            </a>
                        </h3>
                        <div className="flex items-center gap-x-2 h-7">
                            <span className="text-red-600 dark:text-red-500 text-xs/3 md:text-sm/3 font-bold">
                                موجود نیست
                            </span>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <button
                                className="appearance-none bg-gray-200/80 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 p-2 rounded-full transition-colors cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-[20px] h-4 md:h-[20px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="flex justify-center items-center">
                                <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                    </path>
                                </svg>
                                <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                    </path>
                                </svg>
                                <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                    </path>
                                </svg>
                                <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                    </path>
                                </svg>
                                <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
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
        </section>
    )
}