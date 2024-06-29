import React from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'

export default function Categories() {

    const showAlert = () => {
        Swal.fire({
            text: 'دسته بندی جدید با موفقیت ساخته شد',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!'
        })
    }

    return (
        <>
            <TitlePage title="مدیریت دسته بندی ها" />
            <section className='add-new-category'>
                <AdminPanelTableTitle
                    title="دسته بندی جدید"
                >
                    <form onSubmit={event => event.preventDefault()} className='grid items-center grid-cols-1 sm:grid-cols-2 gap-6 child:space-y-2'>
                        <div>
                            <label htmlFor='category-title' className='font-morabba-medium'> عنوان </label>
                            <input type='text' id='category-title' placeholder='عنوان را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                        </div>
                        <div>
                            <label htmlFor='category-shortname' className='font-morabba-medium'> اسم کوتاه </label>
                            <input type='text' id='category-shortname' placeholder="اسم کوتاه را وارد کنید (مثال: dress-gray)" className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
                        </div>
                        <div>
                            <label htmlFor='category-image' className='font-morabba-medium'> تصویر </label>
                            <input type='file' id='category-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
                        </div>
                        <div>
                            <br className='invisible' />
                            <button className='w-max py-1 px-2 h-8 rounded bg-green-500 text-white hover:bg-green-600 transition-colors' onClick={showAlert}> افزودن </button>
                        </div>
                    </form>
                </AdminPanelTableTitle>
            </section>
        </>
    )
}