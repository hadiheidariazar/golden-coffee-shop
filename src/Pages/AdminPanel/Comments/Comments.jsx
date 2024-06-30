import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import DataTable from '../../../Components/DataTable/DataTable'
import Swal from 'sweetalert2'
import Modal from '../../../Components/Modal/Modal'

export default function Comments() {

    const [showCommentModal, setShowCommentModal] = useState(false)
    const [showCommentReplyModal, setShowCommentReplyModal] = useState(false)
    const [showEditCommentModal, setShowEditCommentModal] = useState(false)

    const showProductAlert = () => {
        Swal.fire({
            text: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            confirmButtonText: 'مشاهده کردم'
        })
    }

    const showCommentReplyAlert = () => {
        Swal.fire({
            text: 'پاسخ شما برای دیدگاه مورد نظر با موفقیت ثبت شد',
            icon: 'success',
            confirmButtonText: "متوجه شدم!"
        })

        setShowCommentReplyModal(false)
    }

    const showEditCommentAlert = () => {
        Swal.fire({
            text: 'دیدگاه مورد نظر با موفقیت ویرایش شد',
            icon: 'success',
            confirmButtonText: "متوجه شدم!"
        })

        setShowEditCommentModal(false)
    }

    const showRemoveCommentAlert = () => {
        Swal.fire({
            text: 'آیا از حذف دیدگاه مورد نظر مطمئن هستی؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        }).then(res => {
            if (res.isConfirmed) {
                Swal.fire({
                    text: 'دیدگاه مورد نظر با موفقیت حذف شد',
                    icon: 'success',
                    confirmButtonText: 'متوجه شدم!',
                })
            }
        })
    }

    return (
        <>
            <TitlePage title='مدیریت دیدگاه ها' />
            <section className='comments-container'>
                <AdminPanelTableTitle
                    title='دیدگاه ها'
                    isList={true}
                >
                    <DataTable
                        headerItemCount={6}
                        headerItemTitle={['کاربر', "کالا", 'دیدگاه', 'پاسخ', "ویرایش", 'حذف']}
                        sectionsTableWidth={['w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14', 'w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14', 'w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14']}
                    >
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-green-500'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                                هادی حیدری آذر
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}> پاسخ </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}> ویرایش </button>
                            </td>
                            <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-green-500'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                                فاطمه سلیمی
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}> پاسخ </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}> ویرایش </button>
                            </td>
                            <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                                پوریا عزیزی
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}> پاسخ </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}> ویرایش </button>
                            </td>
                            <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-green-500'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                                قدیر یلمه
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}> پاسخ </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}> ویرایش </button>
                            </td>
                            <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}> حذف </button>
                            </td>
                        </tr>
                    </DataTable>
                </AdminPanelTableTitle>

                <Modal
                    showModalState={showCommentModal}
                    setShowModalState={setShowCommentModal}
                    title='متن دیدگاه'
                >
                    <div className='space-y-4'>
                        <div className='min-h-max max-h-60 overflow-y-auto'>
                            <p>
                                سلام
                                <br />
                                ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                            </p>
                        </div>
                        <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowCommentModal(false)}> مشاهده کردم </button>
                    </div>
                </Modal>
                <Modal
                    showModalState={showCommentReplyModal}
                    setShowModalState={setShowCommentReplyModal}
                    title='پاسخ به دیدگاه'
                >
                    <div className='space-y-2'>
                        <div>
                            <textarea className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none' rows={6} placeholder='متن پاسخ خود را وارد کنید...'></textarea>
                        </div>
                        <div className='flex gap-x-2 child:w-full child:text-white child:p-1 child:rounded child:transition-colors'>
                            <button className='bg-green-500 hover:bg-green-600' onClick={showCommentReplyAlert}> ارسال پاسخ </button>
                            <button className='bg-rose-500 hover:bg-rose-600' onClick={() => setShowCommentReplyModal(false)}> لغو </button>
                        </div>
                    </div>
                </Modal>
                <Modal
                    showModalState={showEditCommentModal}
                    setShowModalState={setShowEditCommentModal}
                    title='ویرایش دیدگاه'
                >
                    <form onSubmit={event => event.preventDefault()} className='grid items-center grid-cols-1 gap-4'>
                        <div className='space-y-1'>
                            <label htmlFor='comment-new-title' className='font-morabba-medium'> متن دیدگاه جدید </label>
                            <textarea id='comment-new-title' placeholder='متن دیدگاه جدید را وارد کنید...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none" rows={6}></textarea>
                        </div>
                        <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
                            <button className='bg-green-500 hover:bg-green-600' onClick={showEditCommentAlert}> تغییر اطلاعات </button>
                            <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditCommentModal(false)}> لغو </button>
                        </div>
                    </form>
                </Modal>
            </section>
        </>
    )
}