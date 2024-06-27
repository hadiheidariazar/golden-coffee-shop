import React from 'react'

export default function CategoryBaner() {
  return (
    <section className="category-baner mb-10 md:mb-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-6 pt-9 sm:pt-12 md:pt-20 lg:pt-24">
                    <a href="/shop"
                        className="flex items-start justify-center flex-col pr-12 category-baner1 h-32 xs:h-44 lg:h-60 bg-cover bg-[left_top] rounded-2xl">
                        <span className="text-white font-dana-bold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">انواع قهوه</span>
                        <span className="text-white font-dana-medium md:text-xl">ترکیبی و پر رو</span>
                    </a>
                    <a href="/shop"
                        className="flex items-start justify-center flex-col pr-12 category-baner2 h-32 xs:h-44 lg:h-60 bg-cover bg-[center_top] rounded-2xl">
                        <span className="text-white font-dana-bold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">پودر های
                            فوری</span>
                        <span className="text-white font-dana-medium md:text-xl">نسکافه ، هات چاکلت ،ماسالا</span>
                    </a>
                </div>
            </div>
        </section>
  )
}
