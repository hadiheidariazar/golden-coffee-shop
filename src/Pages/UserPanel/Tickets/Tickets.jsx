import React from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import CounterBox from '../../../Components/CounterBox/CounterBox'

export default function Tickets() {
    return (
        <>
            <TitlePage title="تیکت ها - پنل کاربری" />
            <section className='tickets'>
                <div className="container-2xl">
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
                        <CounterBox
                            boxColor="bg-purple-600"
                            title="کل تیکت ها"
                            count={1500}
                            subTitle="تیکت"
                            iconBg="bg-purple-400/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xs:w-9 xs:h-9 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                            </svg>
                        </CounterBox>
                        <CounterBox
                            boxColor="bg-emerald-500"
                            title="پاسخ داده شده"
                            count={1500}
                            subTitle="تیکت"
                            iconBg="bg-emerald-300/50"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className='w-7 h-7 xs:w-9 xs:h-9 text-white' viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></svg>
                        </CounterBox>
                        <CounterBox
                            boxColor="bg-red-500"
                            title="پاسخ داده نشده"
                            count={1500}
                            subTitle="تیکت"
                            iconBg="bg-red-300/50"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className='w-7 h-7 xs:w-9 xs:h-9 text-white' viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></svg>
                        </CounterBox>
                    </div>
                </div>
            </section>
        </>
    )
}