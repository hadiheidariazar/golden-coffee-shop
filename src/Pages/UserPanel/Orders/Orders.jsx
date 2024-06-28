import React, { useRef, useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import CounterBox from '../../../Components/CounterBox/CounterBox'

export default function Orders() {

    const [tabActive, setTabActive] = useState("first")
    const tab = useRef()

    const active = (event) => {
        setTabActive(event.target.classList[9])
    }

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
                    <div className="tabs mt-10 border-b-[1px] pb-3 border-b-gray-300 dark:border-b-white/30">
                        <ul className='flex gap-x-5' ref={tab}>
                            <li>
                                <a className={`cursor-default pb-3 hover:border-b-2 border-b-blue-500 hover:text-blue-600 dark:hover:text-blue-500 font-bold dark:font-normal transition-colors first ${tabActive === 'first' ? "text-blue-600 dark:text-blue-500 border-b-blue-500 border-b-2" : ""}`} onClick={active}> در حال انجام </a>
                            </li>
                            <li>
                                <a className={`cursor-default pb-3 hover:border-b-2 border-b-blue-500 hover:text-blue-600 dark:hover:text-blue-500 font-bold dark:font-normal transition-colors second ${tabActive === 'second' ? "text-blue-600 dark:text-blue-500 border-b-blue-500 border-b-2" : ""}`} onClick={active}> تکمیل شده </a>
                            </li>
                            <li>
                                <a className={`cursor-default pb-3 hover:border-b-2 border-b-blue-500 hover:text-blue-600 dark:hover:text-blue-500 font-bold dark:font-normal transition-colors last ${tabActive === 'last' ? "text-blue-600 dark:text-blue-500 border-b-blue-500 border-b-2" : ""}`} onClick={active}> لغو شده </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}