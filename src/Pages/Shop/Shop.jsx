import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Shop() {
  return (
    <>
        <TitlePage title="فروشگاه" />
        <Header />
        <section className='shop-header mt-7 md:mt-0 h-60 xs:h-80 md:h-screen bg-shop-header bg-no-repeat bg-cover bg-[center_top] xs:bg-[left_top]'>
                <div className="container flex items-center h-full">
                    <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl ipad:text-6xl select-none font-morabba-bold text-white'> فروشگاه محصولات </h1>
                </div>
            </section>
        <Footer />
    </>
  )
}