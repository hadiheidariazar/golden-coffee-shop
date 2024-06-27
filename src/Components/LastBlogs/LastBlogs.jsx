import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import BlogBox from '../BlogBox/BlogBox'

export default function LastBlogs() {
  return (
    <section className="blogs mb-12 md:mb-28">
      <div className="container">
        <SectionHeader
          title="مطالب خواندنی"
        >
          <a href="/blogs"
            className="flex justify-center items-center md:gap-x-0.5 pr-3 pl-1 h-11 rounded-lg transition-colors text-orange-400 dark:text-orange-300 hover:dark:bg-orange-300/20 hover:bg-orange-300/35 text-sm xs:text-lg ipad:text-xl tracking-tightest">
            مشاهده همه
            <svg className="w-4 h-4 xs:w-5 xs:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd" />
            </svg>
          </a>
        </SectionHeader>

        <div
          className="blogs-container grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <BlogBox
            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
            imageSrc="blog-1.png"
            link="/blog/coffee"
            day={25}
            month="اردیبهشت"
            year={1402}
          />
          <BlogBox
            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
            imageSrc="blog-1.png"
            link="/blog/coffee"
            day={25}
            month="اردیبهشت"
            year={1402}
          />
          <BlogBox
            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
            imageSrc="blog-1.png"
            link="/blog/coffee"
            day={25}
            month="اردیبهشت"
            year={1402}
          />
          <BlogBox
            title="راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو"
            imageSrc="blog-1.png"
            link="/blog/coffee"
            day={25}
            month="اردیبهشت"
            year={1402}
          />
        </div>
      </div>
    </section>
  )
}