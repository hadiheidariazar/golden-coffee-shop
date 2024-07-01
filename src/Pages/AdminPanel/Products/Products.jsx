import React from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'

export default function Products() {

  const showAddNewProductAlert = () => {
    Swal.fire({
      text: 'کالای جدید با موفقیت ساخته شد',
      icon: 'success',
      confirmButtonText: 'متوجه شدم!'
    })
  }

  return (
    <>
      <TitlePage title='مدیریت کالاها' />
      <section className='add-new-product'>
        <AdminPanelTableTitle
          title="کالا جدید"
        >
          <form onSubmit={event => event.preventDefault()} className='grid items-center grid-cols-1 sm:grid-cols-2 gap-6 child:space-y-2'>
            <div>
              <label htmlFor='product-title' className='font-morabba-medium'> عنوان </label>
              <input type='text' id='product-title' placeholder='عنوان را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
            </div>
            <div>
              <label htmlFor='product-shortname' className='font-morabba-medium'> اسم کوتاه </label>
              <input type='text' id='product-shortname' placeholder="اسم کوتاه را وارد کنید (مثال: dress-gray)" className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
            </div>
            <div>
              <label htmlFor='product-price' className='font-morabba-medium'> قیمت(تومان) </label>
              <input type='number' id='product-price' placeholder='قیمت(تومان) را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
            </div>
            <div>
              <label htmlFor='product-off' className='font-morabba-medium'> درصد تخفیف </label>
              <input type='number' id='product-off' placeholder='درصد تخفیف را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
            </div>
            <div>
              <label className='font-morabba-medium'> دسته بندی </label>
              <select className='w-full bg-blue-200/35 dark:bg-slate-500/75 p-2 rounded-md focus:outline-none border dark:text-white text-sm'>
                <option value='category-1'> قهوه ترک </option>
                <option value='category-2'> لوازم جانبی و تجهیزات </option>
                <option value='category-3'> شهوه دمی و اسپرسو </option>
                <option value='category-4'> اسپرسو ساز </option>
                <option value='category-5'> پک تستر قهوه </option>
              </select>
            </div>
            <div>
              <label htmlFor='product-images' className='font-morabba-medium'> تصویر ها </label>
              <input type='file' id='product-images' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' multiple />
            </div>
            <div>
              <label htmlFor='product-description' className='font-morabba-medium'> توضیحات </label>
              <textarea type='number' id='product-description' placeholder='توضیحات را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none" rows={6}></textarea>
            </div>
            <div className='flex sm:block'>
              <br className='invisible' />
              <button className='w-max py-1 px-2 h-8 rounded bg-green-500 text-white hover:bg-green-600 transition-colors' onClick={showAddNewProductAlert}> افزودن </button>
            </div>
          </form>
        </AdminPanelTableTitle>
      </section>
    </>
  )
}