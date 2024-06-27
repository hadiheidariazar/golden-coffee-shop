import React from 'react'

export default function CounterBox({ boxColor, title, count, subTitle, children, iconBg }) {
    return (
        <div className={`box flex gap-x-3 p-4 rounded-2xl ${boxColor}`}>
            <div className={`${iconBg} flex items-center p-3 xs:p-4 rounded-xl`}>
                {children}
            </div>
            <div className='flex flex-col py-1.5 justify-between text-white'>
                <h4 className='font-morabba-medium text-base/4'> {title} </h4>
                <p className='text-xs font-dana-bold'>
                    {count.toLocaleString()} {subTitle}
                </p>
            </div>
        </div>
    )
}