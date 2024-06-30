import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import DataTable from '../../../Components/DataTable/DataTable'
import Swal from 'sweetalert2'
import Modal from '../../../Components/Modal/Modal'

export default function Messages() {

    const [showMessageModal, setShowMessageModal] = useState(false)
    const [showMessageReplyModal, setShowMessageReplyModal] = useState(false)
    const [showMessageReplyTextModal, setShowMessageReplyTextModal] = useState(false)

    const showRemoveMessageAlert = () => {
        Swal.fire({
            text: 'آیا از حذف پیام مورد نظر مطمئن هستی؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        }).then(res => {
            if (res.isConfirmed) {
                Swal.fire({
                    text: 'پیام مورد نظر با موفقیت حذف شد',
                    icon: 'success',
                    confirmButtonText: 'متوجه شدم!',
                })
            }
        })
    }

    const showRemoveMessageReplyAlert = () => {
        Swal.fire({
            text: 'آیا از حذف پاسخ مورد نظر مطمئن هستی؟',
            icon: 'question',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: 'خیر'
        }).then(res => {
            if (res.isConfirmed) {
                Swal.fire({
                    text: 'پاسخ مورد نظر با موفقیت حذف شد',
                    icon: 'success',
                    confirmButtonText: 'متوجه شدم!',
                })
            }
        })
    }

    const showMessageReplyAlert = () => {
        Swal.fire({
            text: 'پاسخ شما به پیام مورد نظر با موفقیت ثبت شد',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!',
        })

        setShowMessageReplyModal(false)
    }

    return (
        <>
            <TitlePage title='مدیریت پیام ها' />
            <section className='messages-container'>
                <AdminPanelTableTitle
                    title='پیام ها'
                    isList={true}
                >
                    <DataTable
                        headerItemCount={5}
                        headerItemTitle={['نام', 'شماره تماس', 'پیام', 'پاسخ', 'حذف']}
                        sectionsTableWidth={['w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96', 'w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36', 'w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14', 'w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14', 'w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-10 xl:w-12']}
                    >
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96'>
                                هادی حیدری آذر
                            </td>
                            <td className='line-clamp-2 w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36'>
                                09123456789
                            </td>
                            <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyModal(true)}> پاسخ </button>
                            </td>
                            <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-10 xl:w-12'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-green-500'>2</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96'>
                                قدر یلمه
                            </td>
                            <td className='line-clamp-2 w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36'>
                                09123456789
                            </td>
                            <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyModal(true)}> پاسخ </button>
                            </td>
                            <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-10 xl:w-12'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>2</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96'>
                                محمد امین سعیدی راد
                            </td>
                            <td className='line-clamp-2 w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36'>
                                09123456789
                            </td>
                            <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyModal(true)}> پاسخ </button>
                            </td>
                            <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-10 xl:w-12'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageAlert}> حذف </button>
                            </td>
                        </tr>
                    </DataTable>
                </AdminPanelTableTitle>

                <Modal
                    showModalState={showMessageModal}
                    setShowModalState={setShowMessageModal}
                    title='متن پیام'
                >
                    <div className='space-y-4'>
                        <div className='min-h-max max-h-60 overflow-y-auto'>
                            <p>
                                سلام
                                <br />
                                ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                            </p>
                        </div>
                        <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowMessageModal(false)}> مشاهده کردم </button>
                    </div>
                </Modal>
                <Modal
                    showModalState={showMessageReplyModal}
                    setShowModalState={setShowMessageReplyModal}
                    title='پاسخ به پیام'
                >
                    <div className='space-y-2'>
                        <div>
                            <textarea className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none' rows={6} placeholder='متن پاسخ خود را وارد کنید...'></textarea>
                        </div>
                        <div className='flex gap-x-2 child:w-full child:text-white child:p-1 child:rounded child:transition-colors'>
                            <button className='bg-green-500 hover:bg-green-600' onClick={showMessageReplyAlert}> ارسال پاسخ </button>
                            <button className='bg-rose-500 hover:bg-rose-600' onClick={() => setShowMessageReplyModal(false)}> لغو </button>
                        </div>
                    </div>
                </Modal>
            </section>
            <section className='message-replies-container mt-8'>
                <AdminPanelTableTitle
                    title='پاسخ ها'
                    isList={true}
                >
                    <DataTable
                        headerItemCount={4}
                        headerItemTitle={['نام', 'پیام', 'پاسخ', 'حذف']}
                        sectionsTableWidth={['w-52 sm:w-72 md:w-80 ipad:w-80 xl:w-[450px]', 'w-10 sm:w-12 lg:w-16 xl:w-20', 'w-10 sm:w-12 lg:w-16 xl:w-20', 'w-9 sm:w-12 lg:w-16 xl:w-20']}
                    >
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white'>1</td>
                            <td className='line-clamp-2 w-52 sm:w-72 md:w-80 ipad:w-80 xl:w-[450px]'>
                                هادی حیدری آذر
                            </td>
                            <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyTextModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-9 sm:w-12 lg:w-16 xl:w-20'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageReplyAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white'>2</td>
                            <td className='line-clamp-2 w-52 sm:w-72 md:w-80 ipad:w-80 xl:w-[450px]'>
                                هادی حیدری آذر
                            </td>
                            <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyTextModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-9 sm:w-12 lg:w-16 xl:w-20'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageReplyAlert}> حذف </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white'>3</td>
                            <td className='line-clamp-2 w-52 sm:w-72 md:w-80 ipad:w-80 xl:w-[450px]'>
                                هادی حیدری آذر
                            </td>
                            <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyTextModal(true)}> مشاهده </button>
                            </td>
                            <td className='w-9 sm:w-12 lg:w-16 xl:w-20'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageReplyAlert}> حذف </button>
                            </td>
                        </tr>
                    </DataTable>
                </AdminPanelTableTitle>

                <Modal
                    showModalState={showMessageReplyTextModal}
                    setShowModalState={setShowMessageReplyTextModal}
                    title='متن پاسخ'
                >
                    <div className='space-y-4'>
                        <div className='min-h-max max-h-60 overflow-y-auto'>
                            <p>
                                سلام
                                <br />
                                ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                            </p>
                        </div>
                        <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowMessageReplyTextModal(false)}> مشاهده کردم </button>
                    </div>
                </Modal>
            </section>
        </>
    )
}