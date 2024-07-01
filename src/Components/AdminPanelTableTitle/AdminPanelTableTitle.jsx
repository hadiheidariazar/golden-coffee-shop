import React from 'react'

export default function AdminPanelTableTitle({ title, isList, breakPoint, children }) {
    return (
        <div className='w-full bg-gray-100 dark:bg-zinc-800 py-5 rounded shadow-lg'>
            <div className='mx-6 font-morabba-medium'>
                <span>{isList ? "لیست" : "افزودن"}</span>
                <span className='text-orange-600 dark:text-orange-400'> {title} </span>
            </div>
            <div className='mt-4 xs:mt-5 px-3 xs:px-5 w-full'>
                <div className={breakPoint}>
                    {children}
                </div>
            </div>
        </div>
    )
}