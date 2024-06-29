import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'
import DataTable from '../../../Components/DataTable/DataTable'
import Modal from '../../../Components/Modal/Modal'

export default function Categories() {

    const [showEditCategoryModal, setShowEditCategoryModal] = useState(false)

    const showAddCategoryAlert = () => {
        Swal.fire({
            text: 'دسته بندی جدید با موفقیت ساخته شد',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!'
        })
    }

    const showEditCategoryAlert = () => {
        Swal.fire({
            text: 'دسته بندی مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!'
        })

        setShowEditCategoryModal(false)
    }

    const showRemoveCategoryAlert = () => {
        Swal.fire({
            text: 'آیا از حذف دسته بندی مورد نظر مطمئن هستی؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        }).then(res => {
            if (res.isConfirmed) {
                Swal.fire({
                    text: 'دسته بندی مورد نظر با موفقیت حذف شد',
                    icon: 'success',
                    confirmButtonText: 'متوجه شدم!',
                })
            }
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
                            <button className='w-max py-1 px-2 h-8 rounded bg-green-500 text-white hover:bg-green-600 transition-colors' onClick={showAddCategoryAlert}> افزودن </button>
                        </div>
                    </form>
                </AdminPanelTableTitle>
            </section>
            <section className='categories-container mt-8'>
                <AdminPanelTableTitle
                    title='دسته بندی ها'
                    isList={true}
                >
                    <DataTable
                        headerItemCount={3}
                        headerItemTitle={['عنوان', 'ویرایش', 'حذف']}
                        breakPoint='w-[400px] xs:w-full xs:pe-0'
                        setionsTableWidth={['w-[inherit]', 'w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40', 'w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40']}
                    >
                        <tr>
                            <td className='w-14 text-xs'>1</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                لوازم جانبی و تجهیزات
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> ویرایش </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-14 text-xs'>2</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                قهوه ترک
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> ویرایش </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-14 text-xs'>3</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                شهوه دمی و اسپرسو
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> ویرایش </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-14 text-xs'>4</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                اسپرسو ساز
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> ویرایش </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-14 text-xs'>5</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                پک تستر قهوه
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> ویرایش </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> حذف </button>
                            </td>
                        </tr>
                    </DataTable>
                    <Modal
                        showModalState={showEditCategoryModal}
                        setShowModalState={setShowEditCategoryModal}
                        title='تغییر اطلاعات دسته بندی'
                        topSpace='top-[14%]'
                    >
                        <form onSubmit={event => event.preventDefault()} className='grid items-center grid-cols-1 gap-4'>
                            <div className='space-y-1'>
                                <label htmlFor='category-new-title' className='font-morabba-medium'> عنوان جدید </label>
                                <input type='text' id='category-new-title' placeholder='عنوان جدید را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                            </div>
                            <div className='space-y-1'>
                                <label htmlFor='category-new-short-name' className='font-morabba-medium'> اسم کوتاه جدید </label>
                                <input type='text' id='category-new-short-name' placeholder='اسم کوتاه جدید را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                            </div>
                            <div className='space-y-1'>
                                <label htmlFor='category-new-image' className='font-morabba-medium'> تصویر </label>
                                <input type='file' id='category-new-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
                                <img src='/public/images/categories/category5.png' className='w-24' />
                            </div>
                            <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
                                <button className='bg-green-500 hover:bg-green-600' onClick={showEditCategoryAlert}> تغییر اطلاعات </button>
                                <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditCategoryModal(false)}> لغو </button>
                            </div>
                        </form>
                    </Modal>
                </AdminPanelTableTitle>
            </section>
        </>
    )
}