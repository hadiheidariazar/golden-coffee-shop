import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Blogs() {
    return (
        <>
            <TitlePage title="بلاگ ها" />
            <Header />
            <section className='blog-header mt-16 md:mt-0 h-60 xs:h-80 md:h-screen bg-blog-header bg-no-repeat bg-cover bg-[right_top]'>
                <div className="container flex items-center h-full"></div>
            </section>
            <Footer />
        </>
    )
}