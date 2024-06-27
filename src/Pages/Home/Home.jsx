import React, { useRef } from 'react'
import Header from '../../Components/Header/Header'
import LastProducts from '../../Components/LastProducts/LastProducts'
import CategoryBaner from '../../Components/CategoryBaner/CategoryBaner'
import Categories from '../../Components/Categories/Categories'
import BestSelling from '../../Components/BestSelling/BestSelling'
import LastBlogs from '../../Components/LastBlogs/LastBlogs'

export default function Home() {

    const lastProductsRef = useRef()

    const scrollToLastProductsSection = () => {
        let lastProductsSectionSpaceTop = lastProductsRef.current.firstChild.offsetTop
        window.scrollTo({top: lastProductsSectionSpaceTop, behavior: 'smooth'})
    }

    return (
        <>
            <Header />

            <main>
                <section
                    className="home mt-16 md:mt-0 h-50 xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]">
                    <div className="container relative overflow-y-hidden flex items-center justify-end h-full md:min-h-screen">
                        <div className="select-none text-white">
                            <h2 className="font-morabba-bold text-xl xs:text-3xl md:text-5xl/[62px] mb-0.5 md:mb-2">قهوه عربیکا
                                تانزانیکا
                            </h2>
                            <span className="font-morabba text-lg xs:text-2xl md:text-4xl/[64px]">یک فنجان بالانس</span>
                            <span className="block w-27 h-px md:h-0.5 bg-orange-300 my-2 xs:my-3 md:my-7"></span>
                            <p className="max-w-44 xs:max-w-52 sm:max-w-64 md:max-w-[420px] text-xs md:text-xl">
                                قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند
                                قهوه کشت میشود.
                            </p>
                        </div>

                        <div className="hidden md:flex circle circle--lg absolute bottom-0 right-0 left-0 mx-auto translate-y-2/4">
                            <div className="circle circle--md">
                                <div className="circle circle--sm"></div>
                            </div>
                        </div>
                    </div>

                    <svg className="hidden md:block absolute bottom-0 right-0 left-0 mx-auto text-gray-100 dark:text-zinc-800 w-27 h-[22px]" viewBox="0 0 100 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
                    </svg>

                    <div
                        className="hidden absolute md:flex items-center justify-center w-[30px] h-[30px] mx-auto bottom-0 right-0 left-0 border-2 border-orange-300 rounded-full translate-y-2/4 cursor-pointer" onClick={scrollToLastProductsSection}>
                        <svg className="w-4 h-4 text-zinc-700 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </section>

                <div ref={lastProductsRef}>
                    <LastProducts />
                </div>
                <CategoryBaner />
                <Categories />
                <BestSelling />
                <LastBlogs />

            </main>
        </>
    )
}