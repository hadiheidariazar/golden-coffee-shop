import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

export default function ProductInfo() {
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
                </div>
            </section>
            <Footer />
        </>
    )
}