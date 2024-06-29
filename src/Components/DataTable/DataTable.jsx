import React from 'react'

export default function DataTable({ headerItemCount, headerItemTitle, sectionsTableWidth, children }) {
    return (
        <table className='pe-0 grid overflow-x-auto'>
            <thead>
                <tr className='flex justify-between items-center px-2 py-1 w-full child:font-morabba-medium child:text-sm sm:child:text-base child:text-center h-max bg-orange-200/70 dark:bg-zinc-600 text-orange-600 dark:text-orange-400 rounded'>
                    <th className='w-11'> شناسه </th>
                    {
                        new Array(headerItemCount).fill(0).map((item, index) => (
                            <th key={index + 1} className={sectionsTableWidth[index]}>{headerItemTitle[index]}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className='w-full grid child:flex child:justify-between child:items-start child:gap-x-2 child:w-full child:text-xs child:font-dana-medium sm:child:text-sm sm:child:font-dana child:text-center px-1 child:py-2'>
                {children}
            </tbody>
        </table>
    )
}