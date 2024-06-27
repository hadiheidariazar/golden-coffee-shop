import React from 'react'

export default function ServiceBox({title, desc, children}) {
    return (
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <div>
                {children}
            </div>
            <div className="text-center">
                <h4
                    className="font-dana-medium text-sm/4 md:text-lg/5 mb-3 text-zinc-800 dark:text-white transition-all">
                    {title}</h4>
                <p className="text-zinc-700 text-xs/4 md:text-sm/4 dark:text-white transition-all">{desc}</p>
            </div>
        </div>
    )
}