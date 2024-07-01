import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import "./Blogs.css"

export default function Blogs() {

  const [ckeditorValue, setCkeditorValue] = useState("")

  const showAddNewBlogAlert = () => {
    Swal.fire({
      text: 'بلاگ جدید با موفقیت ساخته شد',
      icon: 'success',
      confirmButtonText: 'متوجه شدم!'
    })
  }

  const showDraftNewBlogAlert = () => {
    Swal.fire({
      text: 'بلاگ جدید با موفقیت پیش نویس شد',
      icon: 'success',
      confirmButtonText: 'متوجه شدم!'
    })
  }

  return (
    <>
      <TitlePage title='مدیریت بلاگ ها' />
      <section className='add-new-blog'>
        <AdminPanelTableTitle
          title="بلاگ جدید"
        >
          <form onSubmit={event => event.preventDefault()}>
            <div className='grid items-center grid-cols-1 sm:grid-cols-2 gap-6 child:space-y-2'>
              <div>
                <label htmlFor='blog-title' className='font-morabba-medium'> عنوان </label>
                <input type='text' id='blog-title' placeholder='عنوان را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
              </div>
              <div>
                <label htmlFor='blog-shortname' className='font-morabba-medium'> اسم کوتاه </label>
                <input type='text' id='blog-shortname' placeholder="اسم کوتاه را وارد کنید (مثال: dress-gray)" className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
              </div>
              <div>
                <label htmlFor='blog-image' className='font-morabba-medium'> تصویر </label>
                <input type='file' id='blog-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
              </div>
            </div>
            <div className='space-y-2 my-6'>
              <label htmlFor='blog-content' className='font-morabba-medium'> محتوا </label>
              <CKEditor
                editor={ClassicEditor}
                data={ckeditorValue}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setCkeditorValue(data)
                }}
              />
            </div>
            <div className='flex'>
              <br className='invisible' />
              <button className='w-max py-1 px-2 h-8 rounded bg-green-500 text-white hover:bg-green-600 transition-colors' onClick={showAddNewBlogAlert}> افزودن </button>
              <button className='w-max py-1 px-2 h-8 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors ms-2' onClick={showDraftNewBlogAlert}> پیش نویس </button>
            </div>
          </form>
        </AdminPanelTableTitle>
      </section>
    </>
  )
}