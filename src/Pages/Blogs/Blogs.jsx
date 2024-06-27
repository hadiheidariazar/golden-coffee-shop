import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import BlogBox from '../../Components/BlogBox/BlogBox'

export default function Blogs() {
    return (
        <>
            <TitlePage title="بلاگ ها" />
            <Header />
            <section className='blog-header mt-16 md:mt-0 h-60 xs:h-80 md:h-screen bg-blog-header bg-no-repeat bg-cover bg-[right_top]'>
                <div className="container flex items-center h-full"></div>
            </section>
            <section className='blog my-12 md:my-20'>
                <div className="container">
                    <h1 className='text-center text-3xl xs:text-4xl font-morabba-medium text-zinc-900 dark:text-white'> آخرین بلاگ ها </h1>
                    <div className="w-full h-0.5 mt-9 bg-gray-200 dark:bg-white/20 rounded-full"></div>
                    <div className="blogs-container mt-12 md:mt-16 grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <BlogBox
                            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={25}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={25}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={25}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={25}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={25}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={25}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={25}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={25}
                            month="اردیبهشت"
                            year={1402}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}