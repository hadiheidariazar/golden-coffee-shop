import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function OrderConfirm() {
  return (
    <>
      <TitlePage title="ثبت سفارش" />
      <Header />
      <section className='order mt-28 md:mt-44 mb-16 md:mb-28'>
        <div className="container">
          <div className="order-products dark:text-white">
            <h1 className='text-4xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> ثبت سفارش </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 gap-x-5 lg:gap-x-10 mt-10 md:mt-14'>
              <div className='orders-infos order-1 md:order-2'>
                <div className="bg-white dark:bg-zinc-700 p-4 rounded-md">
                  <form onSubmit={event => event.preventDefault()}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-3 sm:gap-y-6'>
                      <div>
                        <label htmlFor="userfirstname"> نام </label>
                        <input type="text" id='userfirstname' className="bg-blue-200/40 outline-none appearance-none focus:outline-none w-full p-2 mt-1 rounded placeholder:text-gray-500 dark:placeholder:text-gray-300 text-sm lg:text-base border" placeholder='نام گیرنده سفارش...' />
                      </div>
                      <div>
                        <label htmlFor="userlastname"> نام خانوادگی </label>
                        <input type="text" id='userlastname' className="bg-blue-200/40 outline-none appearance-none focus:outline-none w-full p-2 mt-1 rounded placeholder:text-gray-500 dark:placeholder:text-gray-300 text-sm lg:text-base border" placeholder='نام خانوادگی گیرنده سفارش...' />
                      </div>
                      <div>
                        <label htmlFor="user-state"> استان</label>
                        <input type="text" id='user-state' className="bg-blue-200/40 outline-none appearance-none focus:outline-none w-full p-2 mt-1 rounded placeholder:text-gray-500 dark:placeholder:text-gray-300 text-sm lg:text-base border" placeholder='استان گیرنده سفارش...' />
                      </div>
                      <div>
                        <label htmlFor="user-city"> شهر</label>
                        <input type="text" id='user-city' className="bg-blue-200/40 outline-none appearance-none focus:outline-none w-full p-2 mt-1 rounded placeholder:text-gray-500 dark:placeholder:text-gray-300 text-sm lg:text-base border" placeholder='شهر گیرنده سفارش...' />
                      </div>
                    </div>
                    <div className='grid grid-cols-1 gap-y-3 sm:gap-y-6 mt-3 sm:mt-6'>
                      <div>
                        <label htmlFor="user-address"> آدرس</label>
                        <input type="text" id='user-address' className="bg-blue-200/40 outline-none appearance-none focus:outline-none w-full p-2 mt-1 rounded placeholder:text-gray-500 dark:placeholder:text-gray-300 text-sm lg:text-base border" placeholder='آدرس گیرنده سفارش...' />
                      </div>
                      <div>
                        <label htmlFor="user-code-post"> کد پستی</label>
                        <input type="number" id='user-code-post' className="bg-blue-200/40 outline-none appearance-none focus:outline-none w-full p-2 mt-1 rounded placeholder:text-gray-500 dark:placeholder:text-gray-300 text-sm lg:text-base border" placeholder='کد پستی گیرنده سفارش...' />
                      </div>
                      <div>
                        <span className='text-xs xs:text-sm'>
                          مجموع پرداخت:
                        </span>
                        <span className='ms-1'>
                          200,000,000
                          <span className='text-xs tracking-tightest'> تومان </span>
                        </span>
                      </div>
                      <button className='w-full btn-orange p-2 rounded'> ثبت سفارش </button>
                    </div>
                  </form>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}