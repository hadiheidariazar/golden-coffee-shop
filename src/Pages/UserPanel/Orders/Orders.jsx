import React from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import CounterBox from '../../../Components/CounterBox/CounterBox'

export default function Orders() {
    return (
        <>
            <TitlePage title="سفارش ها - پنل کاربری" />
            <section className='counter'>
                <div className="container-2xl">
                    <div className='boxes-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ipad:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <CounterBox
                            boxColor="bg-slate-500"
                            title="در حال انجام"
                            count={1500}
                            subTitle="سفارش"
                            iconBg="bg-slate-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xs:w-9 xs:h-9 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                        </CounterBox>
                        <CounterBox
                            boxColor="bg-emerald-500"
                            title="تکمیل شده"
                            count={1500}
                            subTitle="سفارش"
                            iconBg="bg-emerald-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xs:w-9 xs:h-9 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                        </CounterBox>
                        <CounterBox
                            boxColor="bg-red-500"
                            title="لغو شده"
                            count={1500}
                            subTitle="سفارش"
                            iconBg="bg-red-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xs:w-9 xs:h-9 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>


                        </CounterBox>
                    </div>
                </div>
            </section>
        </>
    )
}