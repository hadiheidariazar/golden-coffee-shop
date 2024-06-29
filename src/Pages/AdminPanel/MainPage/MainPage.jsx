import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import CounterBox from '../../../Components/CounterBox/CounterBox'
import Datas from '../SellAndProfitDatas.js'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import DataTable from '../../../Components/DataTable/DataTable.jsx'

export default function MainPage() {

    const [sellAndProfitDatas, setSellAndProfitDatas] = useState(Datas)
    const [opacity, setOpacity] = useState({ profit: 1, sell: 1 });

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className='bg-white dark:bg-zinc-700 border-[1px] border-gray-300 dark:border-zinc-500 shadow-lg py-2 px-3 rounded-md'>
                    <p className='mb-1'>{label}</p>
                    <p className='text-rose-600 dark:text-rose-500'>{`${payload[0].dataKey}: %${payload[0].value}`}</p>
                    <p className='text-emerald-600 dark:text-emerald-500'>{`${payload[1].dataKey}: %${payload[1].value}`}</p>
                </div>
            );
        }

        return null;
    };

    const CustomXTick = ({ x, y, payload }) => {
        return (
            <text x={(x + 15)} y={(y + 15)}>
                <tspan className='fill-zinc-700 dark:fill-white'>{payload.value}</tspan>
            </text>
        );
    };

    const CustomYTick = ({ x, y, payload }) => {
        return (
            <text x={(x + 1)} y={y + 3}>
                <tspan className='fill-zinc-700 dark:fill-white'>{payload.value}</tspan>
            </text>
        );
    };

    return (
        <>
            <TitlePage title="صفحه اصلی پنل مدیریت" />
            <section>
                <div className='topbar'>
                    <nav className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 justify-center items-center gap-3'>
                        <CounterBox
                            boxColor="bg-sky-500"
                            title="ثبت نامی ها"
                            count={1500}
                            subTitle="کاربر"
                            iconBg="bg-sky-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                        </CounterBox>
                        <CounterBox
                            boxColor="bg-rose-500"
                            title="میزان فروش"
                            count={80}
                            subTitle="درصد"
                            iconBg="bg-rose-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                            </svg>
                        </CounterBox>
                        <CounterBox
                            boxColor="bg-emerald-500"
                            title="میزان سود"
                            count={72}
                            subTitle="درصد"
                            iconBg="bg-emerald-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                            </svg>
                        </CounterBox>
                    </nav>
                </div>
                <div className='chart mt-8'>
                    <AdminPanelTableTitle
                        title="میزان فروش و سود"
                        isList={true}
                        breakPoint='w-[980px] md:w-full'
                    >
                        <ResponsiveContainer height={300}>
                            <LineChart
                                data={sellAndProfitDatas}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" tick={<CustomXTick />} />
                                <YAxis tick={<CustomYTick />} />
                                <Tooltip content={<CustomTooltip />} />
                                <Line type="monotone" dataKey="فروش" strokeOpacity={opacity.profit} stroke="#ef4444" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="سود" strokeOpacity={opacity.sell} stroke="#10b981" />
                            </LineChart>
                        </ResponsiveContainer>
                    </AdminPanelTableTitle>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 ipad:grid-cols-1 lg:grid-cols-2 justify-center items-start gap-4 mt-8'>
                    <AdminPanelTableTitle
                        title="ثبت نامی های اخیر"
                        isList={true}
                    >
                        <DataTable
                            headerItemCount={2}
                            headerItemTitle={['نام کاربر', 'تاریخ']}
                            breakPoint='w-[400px] xs:w-full xs:pe-0'
                            setionsTableWidth={['w-[inherit]', 'w-16 sm:w-20']}
                        >
                            <tr>
                                <td className='w-14 text-xs'>1</td>
                                <td className='line-clamp-2 w-[inherit]'> آرین محمودی </td>
                                <td className='w-16 sm:w-20'> 1403/2/28 </td>
                            </tr>
                            <tr>
                                <td className='w-14 text-xs'>2</td>
                                <td className='line-clamp-2 w-[inherit]'> مهدی حسینی </td>
                                <td className='w-16 sm:w-20'> 1403/2/17 </td>
                            </tr>
                            <tr>
                                <td className='w-14 text-xs'>3</td>
                                <td className='line-clamp-2 w-[inherit]'> بابک تسمی </td>
                                <td className='w-16 sm:w-20'> 1403/2/9 </td>
                            </tr>
                            <tr>
                                <td className='w-14 text-xs'>4</td>
                                <td className='line-clamp-2 w-[inherit]'> قدیر یلمه </td>
                                <td className='w-16 sm:w-20'> 1403/2/2 </td>
                            </tr>
                            <tr>
                                <td className='w-14 text-xs'>5</td>
                                <td className='line-clamp-2 w-[inherit]'> هادی حیدری آذر</td>
                                <td className='w-16 sm:w-20'> 1403/1/27 </td>
                            </tr>
                        </DataTable>
                    </AdminPanelTableTitle>
                </div>
            </section>
        </>
    )
}