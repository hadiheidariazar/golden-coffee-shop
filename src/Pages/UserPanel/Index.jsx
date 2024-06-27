import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import toggleTheme from '../../Features/ToggleTheme/ToggleTheme'
import Sidebar from '../../Components/Sidebar/Sidebar'

export default function Index() {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <>
            <section className='my-account'>
                <div className="container-2xl">
                    <div className='content flex gap-x-7 dark:text-white'>
                        <div className='hidden ipad:block ipad:w-3/12 max-h-screen p-6 pl-0'>
                            <div className='min-h-full px-1 overflow-y-auto'>
                                <h1 className='text-4xl font-morabba-medium ms-1 mb-10'> حساب کاربری </h1>
                                <Sidebar />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={`overlay ipad:hidden transition-all ${showSidebar ? "overlay-open" : "invisible opacity-0"}`} onClick={() => setShowSidebar(false)}></div>
            </section>
        </>
    )
}