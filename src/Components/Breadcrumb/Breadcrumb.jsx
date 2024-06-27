import React from 'react'

export default function Breadcrumb({ firstTitle, lastTitle, firsTitletLink, isBg, centered }) {
    return (
        <div className="breadcrumb">
            <nav className={`flex ${isBg ? "bg-white dark:bg-zinc-700 w-full px-3 py-2 rounded-2xl" : ""}`} aria-label="Breadcrumb">
                <ol className={`inline-flex items-center overflow-x-auto overflow-y-hidden w-full py-2 space-x-1 child:tracking-tighter text-center ${centered ? "justify-center" : ""}`}>
                    <li className="inline-flex items-center">
                        <a href="/" className="inline-flex items-center text-sm/[18px] w-max font-medium text-gray-700 hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-300 transition-colors me-1">
                            صفحه اصلی
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href={firsTitletLink} className="ms-1 text-sm/[18px] w-max font-medium text-gray-700 hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-300 transition-colors">
                                {firstTitle}
                            </a>
                        </div>
                    </li>
                    {lastTitle ? (
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm/[18px] w-max font-medium text-gray-500 dark:text-gray-400">
                                    {lastTitle}
                                </span>
                            </div>
                        </li>
                    ) : null}
                </ol>
            </nav>

        </div>
    )
}