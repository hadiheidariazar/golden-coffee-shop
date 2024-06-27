import React from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import CounterBox from '../../../Components/CounterBox/CounterBox'

export default function Counter() {
    return (
        <>
            <TitlePage title="پیشخوان - پنل کاربری" />
            <section className='counter'>
                <div className="container-2xl">
                    <div className='boxes-container grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <CounterBox
                            boxColor="bg-sky-500"
                            title="سفارش های من"
                            count={1500}
                            subTitle="سفارش"
                            iconBg="bg-sky-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xs:w-9 xs:h-9 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                        </CounterBox>
                        <CounterBox
                            boxColor="bg-emerald-500"
                            title="مجموع تیکت ها"
                            count={1500}
                            subTitle="تیکت"
                            iconBg="bg-emerald-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xs:w-9 xs:h-9 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                            </svg>

                        </CounterBox>
                    </div>
                    <p className='mt-6 xs:mt-10 sm:mt-12 md:mt-16 text-sm/5 xs:text-base'>
                        از طریق پیشخوان حساب کاربری‌تان، می‌توانید محصول هایی که سفارش دادید را مشاهده کنید و اگر مشکلی یا سوالی هم داشتید تیکت ارسال کنید و آنها را مدیریت کنید و جزییات حساب کاربری و کلمه عبور خود را ویرایش کنید.
                    </p>
                    <div className='mt-8 xs:mt-10'>
                        <p className='text-sm/4'>
                            سلام
                            <span className='font-dana-bold tracking-tight text-base'> هادی حیدری آذر </span>
                            (
                            <span className='font-dana-bold tracking-tight text-base'> هادی حیدری آذر </span>
                            نیستید؟
                            <span className='cursor-pointer hover:font-bold transition-all'> خارج شوید </span>
                            )
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}