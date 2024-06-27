import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Swal from 'sweetalert2'

export default function ContactUs() {

    const showAlert = () => {
        Swal.fire({
            text: 'درخواست شما با موفقیت ارسال شد',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!'
        })
    }

    return (
        <>
            <TitlePage title='تماس با ما' />
            <Header />
            <section className='contact-us'>
                <div className="container flex flex-col items-center mt-28 md:mt-48 mb-20">
                    <div className="space-y-10">
                        <div>
                            <img loading="lazy" src="/images/blogs/contact.png" alt="Contact Us Image" className='mx-auto' />
                        </div>
                        <div>
                            <h3 className='text-black dark:text-white text-center text-2xl xs:text-3xl font-dana-bold tracking-tighter'>تماس با ما</h3>
                            <p className='text-base xs:text-lg sm:text-xl mt-4 font-dana-medium text-zinc-500 dark:text-gray-400 text-center'>
                                برای مشکلات فنی یا همکاری یا ... میتوانید از طریق فرم زیر با ما در ارتباط باشید.
                            </p>
                        </div>
                        <div>
                            <form className='space-y-3' onSubmit={(event) => event.preventDefault()}>
                                <div className='space-y-2'>
                                    <label htmlFor="name" className='text-black dark:text-white text-sm xs:text-base'> نام </label>
                                    <input type="text" placeholder='هادی حیدری آذر' id='name' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                                </div>
                                <div className='space-y-2'>
                                    <label htmlFor="user-tel" className='text-black dark:text-white text-sm xs:text-base'> شماره تماس </label>
                                    <input type="tel" placeholder='09123456789' id='user-tel' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base text-right' />
                                </div>
                                <div className='space-y-2'>
                                    <label htmlFor="user-email" className='text-black dark:text-white text-sm xs:text-base'> ایمیل </label>
                                    <input type="email" placeholder='name@company.com' id='user-email' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                                </div>
                                <div className='space-y-2'>
                                    <label htmlFor="user-message" className='text-black dark:text-white text-sm xs:text-base'> متن پیام </label>
                                    <textarea rows={5} placeholder='پیام خود را بنویسید...' id='user-message' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base resize-none' />
                                </div>
                                <button className='bg-orange-400 w-full p-1.5 xs:p-2 text-white text-lg xs:text-xl text-center rounded-md hover:bg-green-500 transition-colors' onClick={showAlert}>
                                    ثبت درخواست
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}