import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'
import DataTable from '../../../Components/DataTable/DataTable'
import Modal from '../../../Components/Modal/Modal'

export default function Products() {

  const [showEditProductModal, setShowEditProductModal] = useState(false)

  const showAddNewProductAlert = () => {
    Swal.fire({
      text: 'کالای جدید با موفقیت ساخته شد',
      icon: 'success',
      confirmButtonText: 'متوجه شدم!'
    })
  }
  const showEditProductAlert = () => {
    Swal.fire({
      text: 'کالای مورد نظر با موفقیت ویرایش شد',
      icon: 'success',
      confirmButtonText: 'متوجه شدم!'
    })

    setShowEditProductModal(false)
  }

  const showRemoveProductAlert = () => {
    Swal.fire({
      text: 'آیا از حذف کالای مورد نظر مطمئن هستی؟',
      icon: 'question',
      confirmButtonText: 'بله',
      showCancelButton: true,
      cancelButtonText: 'خیر'
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: 'کالای مورد نظر با موفقیت حذف شد',
          icon: 'success',
          confirmButtonText: 'متوجه شدم!',
        })
      }
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
              <label htmlFor='product-images' className='font-morabba-medium'> تصاویر </label>
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
      <section className='products-container mt-8'>
        <AdminPanelTableTitle
          title='کالاها'
          isList={true}
        >
          <DataTable
            headerItemCount={6}
            headerItemTitle={['عنوان', 'دسته بندی', 'قیمت', 'تخفیف', 'ویرایش', 'حذف']}
            sectionsTableWidth={['w-44 sm:w-64 md:w-72 xl:w-96', 'w-24 sm:w-28 lg:w-32', 'w-16 sm:w-20', 'w-8 sm:w-9', 'w-10', 'w-6 sm:w-7']}
          >
            <tr>
              <td className='w-12 text-xs'>1</td>
              <td className='line-clamp-2 w-44 sm:w-64 md:w-72 xl:w-96'>
                <a href='/product/coffee' className='hover:text-orange-600 dark:hover:text-orange-300 transition-colors'>
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                </a>
              </td>
              <td className='line-clamp-2 w-24 sm:w-28'>
                لوازم جانبی و تجهیزات
              </td>
              <td className='line-clamp-2 w-16 sm:w-20'>
                2,000,000
              </td>
              <td className='line-clamp-2 w-7 sm:w-8'>
                40%
              </td>
              <td className='w-9'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium p-1 rounded transition-colors' onClick={() => setShowEditProductModal(true)}> ویرایش </button>
              </td>
              <td className='w-8'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium p-1 rounded transition-colors' onClick={showRemoveProductAlert}> حذف </button>
              </td>
            </tr>
            <tr>
              <td className='w-12 text-xs'>2</td>
              <td className='line-clamp-2 w-44 sm:w-64 md:w-72 xl:w-96'>
                <a href='/product/coffee' className='hover:text-orange-600 dark:hover:text-orange-300 transition-colors'>
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                </a>
              </td>
              <td className='line-clamp-2 w-24 sm:w-28'>
                قهوه ترک
              </td>
              <td className='line-clamp-2 w-16 sm:w-20'>
                450,000
              </td>
              <td className='line-clamp-2 w-7 sm:w-8'>
                ندارد
              </td>
              <td className='w-9'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium p-1 rounded transition-colors' onClick={() => setShowEditProductModal(true)}> ویرایش </button>
              </td>
              <td className='w-8'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium p-1 rounded transition-colors' onClick={showRemoveProductAlert}> حذف </button>
              </td>
            </tr>
            <tr>
              <td className='w-12 text-xs'>3</td>
              <td className='line-clamp-2 w-44 sm:w-64 md:w-72 xl:w-96'>
                <a href='/product/coffee' className='hover:text-orange-600 dark:hover:text-orange-300 transition-colors'>
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                </a>
              </td>
              <td className='line-clamp-2 w-24 sm:w-28'>
                پک تستر قهوه
              </td>
              <td className='line-clamp-2 w-16 sm:w-20'>
                3,056,500
              </td>
              <td className='line-clamp-2 w-7 sm:w-8'>
                10%
              </td>
              <td className='w-9'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium p-1 rounded transition-colors' onClick={() => setShowEditProductModal(true)}> ویرایش </button>
              </td>
              <td className='w-8'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium p-1 rounded transition-colors' onClick={showRemoveProductAlert}> حذف </button>
              </td>
            </tr>
          </DataTable>

          <Modal
            showModalState={showEditProductModal}
            setShowModalState={setShowEditProductModal}
            title='ویرایش کالا'
            moldaWidth='md:w-[700px]'
          >
            <form onSubmit={event => event.preventDefault()}>
              <div className='max-h-96 h-max overflow-y-auto grid items-center grid-cols-1 xs:grid-cols-2 gap-4 mb-3'>
                <div className='space-y-1'>
                  <label htmlFor='product-new-title' className='font-morabba-medium'> عنوان جدید </label>
                  <input type='text' id='product-new-title' placeholder='عنوان جدید را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='product-new-shortname' className='font-morabba-medium'> اسم کوتاه جدید </label>
                  <input type='text' id='product-new-shortname' placeholder="اسم کوتاه جدید را وارد کنید (مثال: dress-gray)" className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='product-new-price' className='font-morabba-medium'> قیمت(تومان) جدید </label>
                  <input type='number' id='product-new-price' placeholder='قیمت(تومان) جدید را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='product-new-off' className='font-morabba-medium'> درصد تخفیف جدید </label>
                  <input type='number' id='product-new-off' placeholder='درصد تخفیف جدید را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                </div>
                <div className='space-y-1'>
                  <label className='font-morabba-medium'> دسته بندی جدید </label>
                  <select className='w-full bg-blue-200/35 dark:bg-slate-500/75 p-2 rounded-md focus:outline-none border dark:text-white text-sm'>
                    <option value='category-1'> قهوه ترک </option>
                    <option value='category-2'> لوازم جانبی و تجهیزات </option>
                    <option value='category-3'> شهوه دمی و اسپرسو </option>
                    <option value='category-4'> اسپرسو ساز </option>
                    <option value='category-5'> پک تستر قهوه </option>
                  </select>
                </div>
                <div className='space-y-1'>
                  <label htmlFor='product-new-images' className='font-morabba-medium'> تصاویر جدید </label>
                  <input type='file' id='product-new-images' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' multiple />
                </div>
                <div className='space-y-1 -mb-2'>
                  <label htmlFor='product-new-description' className='font-morabba-medium'> توضیحات جدید </label>
                  <textarea type='number' id='product-new-description' placeholder='توضیحات جدید را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none" rows={6}></textarea>
                </div>
                <div className='space-y-1'>
                  <label className='font-morabba-medium'> وضعیت جدید </label>
                  <select className='w-full bg-blue-200/35 dark:bg-slate-500/75 p-2 rounded-md focus:outline-none border dark:text-white text-sm'>
                    <option value='status-1'> موجود در انبار </option>
                    <option value='status-2'> ناموجود </option>
                  </select>
                </div>
              </div>
              <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
                <button className='bg-green-500 hover:bg-green-600' onClick={showEditProductAlert}> تغییر اطلاعات </button>
                <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditProductModal(false)}> لغو </button>
              </div>
            </form>
          </Modal>
        </AdminPanelTableTitle>
      </section>
    </>
  )
}