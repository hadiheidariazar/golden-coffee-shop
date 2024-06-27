import React from 'react'

export default function BlogBox({ title, imageSrc, link, day, month, year}) {
    return (
        <div
            className="inline-flex gap-x-3 sm:gap-x-0 sm:flex-col bg-white dark:bg-zinc-700 shadow-normal p-3 sm:p-4 rounded-xl">
            <a href={link}>
                <img loading="lazy" src={`/images/blogs/${imageSrc}`} alt="Blog Image"
                    className="min-w-27 w-36 h-[70px] sm:w-auto sm:h-auto rounded-lg sm:rounded-xl" />
            </a>
            <div className="flex flex-col sm:flex-row justify-between items-center sm:mt-3">
                <h4
                    className="font-dana-medium text-sm/4 sm:text-base/5 line-clamp-2 sm:line-clamp-3 dark:text-white h-8 sm:h-[60px]">
                    <a href={link} className="hover:dark:text-orange-300 hover:text-orange-400 transition-all">
                        {title}
                    </a>
                </h4>
                <span
                    className="block w-full h-px sm:w-px sm:h-full bg-gray-200 dark:bg-white/15 my-2 sm:ms-2 sm:me-3"></span>
                <h4
                    className="flex gap-x-0.5 sm:gap-x-0 sm:flex-col justify-center items-center text-emerald-600 dark:text-emerald-500 child:font-dana-medium">
                    <p className="text-sm sm:text-xl">{day}</p>
                    <p className="text-sm sm:text-xs">{month}</p>
                    <p className="text-sm sm:text-sm">{year}</p>
                </h4>
            </div>
        </div>
    )
}
