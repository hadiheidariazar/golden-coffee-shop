import React from 'react'

export default function CategoryBox({ title, imageSrc, link }) {
    return (
        <div className="w-auto flex justify-center items-center flex-col">
            <a href={link}>
                <img loading="lazy" src={`/images/categories/${imageSrc}`}
                    alt="Product Category Image" />
                <span
                    className="inline-block font-dana-bold text-sm/4 md:text-xl/5 text-zinc-700 dark:text-white hover:text-orange-400 hover:dark:text-orange-300 transition-colors mt-1.5 md:mt-2.5">
                    {title}</span>
            </a>
        </div>
    )
}