import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import TitlePage from '../../Components/TitlePage/TitlePage'

export default function AboutUs() {
    return (
        <>
            <TitlePage title="درباره ما" />
            <Header />
            <section className='about-us mt-28 md:mt-44 mb-16 md:mb-28'>
                <div className="container">
                    <div className="bg-white dark:bg-zinc-700 dark:text-white rounded-lg p-6">
                        <h1 className='text-4xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> درباره ما </h1>
                        <div className='mt-5'>
                            <p>
                                هادی حیدری آذر هستم یک برنامه نویس فرانت اند. برنامه نویسی رو از اولین روز سال ۱۴۰۱ شروع کردم و از همون اول خودم رو به چالش میکشیدم تا بتونم پیشرفت کنم و همیشه کاری رو که شروع میکنم رو به بهترین نحوه تموم میکنم و به همه جزئیات دقت میکنم و علاقه زیادی به یادگیری چیز های بیشتر دارم.
                                <br />
                                <span className='text-sm xs:text-base'>
                                    سایت شخصی (رزومه) : <a href="http://hadiheidariazar.iapp.ir" target='_blank' className='text-blue-800 dark:text-green-500'> هادی حیدری آذر </a>
                                </span>
                            </p>
                            <br />
                            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                            <br /><br /><br />
                            <h3 className='text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> راه های ارتباطی </h3>
                            <ul className='mt-7 list-disc ms-5 child:marker:text-orange-400'>
                                <li> بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳ </li>
                                <li> Info@coffee.com </li>
                                <li> 021-6789012 </li>
                                <li> 09123456789 </li>
                                <li> golden_coffee@ </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}