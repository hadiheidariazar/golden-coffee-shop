import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import DataTable from '../../../Components/DataTable/DataTable'
import Swal from 'sweetalert2'
import Modal from '../../../Components/Modal/Modal'

export default function Tickets() {

  const [showTicketDescriptionModal, setShowTicketDescriptionModal] = useState(false)
  const [showTicketReplyModal, setShowTicketReplyModal] = useState(false)
  const [showTicketReplyTextModal, setShowTicketReplyTextModal] = useState(false)

  const showTicketReplyAlert = () => {
    Swal.fire({
      text: 'پاسخ شما برای تیکت مورد نظر با موفقیت ثبت شد',
      icon: 'success',
      confirmButtonText: 'متوجه شدم!'
    })

    setShowTicketReplyModal(false)
  }

  const showRemoveTicketAlert = () => {
    Swal.fire({
      text: 'آیا از حذف تیکت مورد نظر مطمئن هستی؟',
      icon: 'question',
      confirmButtonText: 'بله',
      showCancelButton: true,
      cancelButtonText: 'خیر'
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: 'تیکت مورد نظر با موفقیت حذف شد',
          icon: 'success',
          confirmButtonText: 'متوجه شدم!',
        })
      }
    })
  }

  const showRemoveTicketReplyAlert = () => {
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

  const showTicketTopicAlert = () => {
    Swal.fire({
      text: 'متن تستی بدون معنی برای موضوع تیکت',
      confirmButtonText: 'مشاهده کردم'
    })
  }

  return (
    <>
      <TitlePage title='مدیریت تیکت ها' />
      <section className='tickets-container'>
        <AdminPanelTableTitle
          title='تیکت ها'
          isList={true}
        >
          <DataTable
            headerItemCount={6}
            headerItemTitle={['کاربر', "شماره تماس", 'موضوع', 'متن', "پاسخ", 'حذف']}
            sectionsTableWidth={['w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72', 'w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36', 'w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16', 'w-10 sm:w-10 md:w-14 ipad:w-7 lg:w-14 xl:w-16', 'w-7 sm:w-9 md:w-16 ipad:w-9 lg:w-14 xl:w-14', 'w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14']}
          >
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>1</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                هادی حیدری آذر
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}> مشاهده </button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}> مشاهده </button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}> پاسخ </button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}> حذف </button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-green-500'>2</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                محسن گلستانی
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}> مشاهده </button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}> مشاهده </button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}> پاسخ </button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}> حذف </button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>3</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                سارا حسینی
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}> مشاهده </button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}> مشاهده </button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}> پاسخ </button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}> حذف </button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-green-500'>4</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                الناز شاکری
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}> مشاهده </button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}> مشاهده </button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}> پاسخ </button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}> حذف </button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>5</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                قدیر یلمه
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}> مشاهده </button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}> مشاهده </button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}> پاسخ </button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}> حذف </button>
              </td>
            </tr>
          </DataTable>
        </AdminPanelTableTitle>

        <Modal
          showModalState={showTicketDescriptionModal}
          setShowModalState={setShowTicketDescriptionModal}
          title='متن تیکت'
        >
          <div className='space-y-4'>
            <div className='min-h-max max-h-60 overflow-y-auto'>
              <p>
                سلام
                <br />
                ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
              </p>
            </div>
            <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(false)}> مشاهده کردم </button>
          </div>
        </Modal>
        <Modal
          showModalState={showTicketReplyModal}
          setShowModalState={setShowTicketReplyModal}
          title='پاسخ به تیکت'
        >
          <div className='space-y-2'>
            <div>
              <textarea className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none' rows={6} placeholder='متن پاسخ خود را وارد کنید...'></textarea>
            </div>
            <div className='flex gap-x-2 child:w-full child:text-white child:p-1 child:rounded child:transition-colors'>
              <button className='bg-green-500 hover:bg-green-600' onClick={showTicketReplyAlert}> ارسال پاسخ </button>
              <button className='bg-rose-500 hover:bg-rose-600' onClick={() => setShowTicketReplyModal(false)}> لغو </button>
            </div>
          </div>
        </Modal>
      </section>
      <section className='ticket-replies-container mt-8'>
        <AdminPanelTableTitle
          title='پاسخ ها'
          isList={true}
        >
          <DataTable
            headerItemCount={5}
            headerItemTitle={['کاربر', 'موضوع', 'متن', "پاسخ", 'حذف']}
            sectionsTableWidth={['w-36 sm:w-64 md:w-80 lg:w-80 xl:w-80', 'w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16', 'w-10 sm:w-10 md:w-14 ipad:w-7 lg:w-14 xl:w-16', 'w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16', 'w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14']}
          >
            <tr>
              <td className='w-12 md:w-14 text-xs'>1</td>
              <td className='line-clamp-2 w-36 sm:w-64 md:w-80 lg:w-80 xl:w-80'>
                هادی حیدری آذر
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}> مشاهده </button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}> مشاهده </button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyTextModal(true)}> مشاهده </button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketReplyAlert}> حذف </button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs'>2</td>
              <td className='line-clamp-2 w-36 sm:w-64 md:w-80 lg:w-80 xl:w-80'>
                هادی حیدری آذر
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}> مشاهده </button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}> مشاهده </button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyTextModal(true)}> مشاهده </button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketReplyAlert}> حذف </button>
              </td>
            </tr>
          </DataTable>
        </AdminPanelTableTitle>

        <Modal
          showModalState={showTicketReplyTextModal}
          setShowModalState={setShowTicketReplyTextModal}
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
            <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowTicketReplyTextModal(false)}> مشاهده کردم </button>
          </div>
        </Modal>
      </section>
    </>
  )
}