import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import Modal from '../../../Components/Modal/Modal'
import Swal from 'sweetalert2'

export default function AccountDetails() {

    const [showPassword, setShowPassword] = useState(false)
    const [showModalProfileChange, setShowModalProfileChange] = useState(false)
    const [avatarsArray, setAvatarsArray] = useState(['avatar2.png', 'avatar5.png', 'avatar3.png', 'avatar1.jpg', 'avatar7.png', 'avatar4.png', 'avatar8.png', 'avatar6.png', 'avatar15.png', 'avatar11.png', 'avatar13.png', 'avatar12.png', 'avatar10.png', 'avatar14.png', 'avatar9.png'])

    const showAlert = () => {
        Swal.fire({
            text: 'حساب کاربری شما با موفقیت ویرایش شد',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!'
        })
    }

    return (
        <>
            <TitlePage title="جزئیات حساب - پنل کاربری" />
            <section className='my-account-details'>
                <div className="container-2xl">
                    <div className="details bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg">
                        <h3 className='font-morabba-medium pb-2 border-b-[1px] border-b-gray-400/50'> جزئیات حساب </h3>
                        <form onSubmit={(event) => event.preventDefault()} className='mt-4'>
                            <div className='grid sm:grid-cols-2 gap-x-3 gap-y-5'>
                                <div>
                                    <label htmlFor="name"> نام </label>
                                    <input type="text" id='name' className='w-full mt-1 p-2 outline-none focus:outline-none dark:bg-blue-200/60 dark:placeholder:text-zinc-200 border-[1px] border-gray-200 dark:border-gray-300 rounded text-sm placeholder:text-gray-600' placeholder='نام جدید خود را وارد کنید...' />
                                </div>
                                <div>
                                    <label htmlFor="user-name"> نام کاربری </label>
                                    <input type="text" id='user-name' className='w-full mt-1 p-2 outline-none focus:outline-none dark:bg-blue-200/60 dark:placeholder:text-zinc-200 border-[1px] border-gray-200 dark:border-gray-300 rounded text-sm placeholder:text-gray-600' placeholder='نام کاربری جدید خود را وارد کنید...' />
                                </div>
                                <div>
                                    <label htmlFor="user-tel"> شماره تماس </label>
                                    <input type="number" id='user-tel' className='w-full mt-1 p-2 outline-none focus:outline-none dark:bg-blue-200/60 dark:placeholder:text-zinc-200 border-[1px] border-gray-200 dark:border-gray-300 rounded text-sm placeholder:text-gray-600' placeholder='شماره تماس جدید خود را وارد کنید...' />
                                </div>
                                <div>
                                    <label htmlFor="user-email"> ایمیل </label>
                                    <input type="email" id='user-email' className='w-full mt-1 p-2 outline-none focus:outline-none dark:bg-blue-200/60 dark:placeholder:text-zinc-200 border-[1px] border-gray-200 dark:border-gray-300 rounded text-sm placeholder:text-gray-600' placeholder='ایمیل جدید خود را وارد کنید...' />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="user-password"> رمز عبور </label>
                                    <input type={showPassword ? "text" : "password"} id='user-password' className='w-full mt-1 p-2 pl-9 outline-none focus:outline-none dark:bg-blue-200/60 dark:placeholder:text-zinc-200 border-[1px] border-gray-200 dark:border-gray-300 rounded text-sm placeholder:text-gray-600' placeholder='رمز عبور جدید خود را وارد کنید...' />

                                    <div className='inline'>
                                        <div onClick={() => setShowPassword(!showPassword)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 absolute left-3 top-[60%] cursor-pointer text-gray-800 dark:text-gray-100">
                                                {
                                                    showPassword ? (
                                                        <>
                                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                                        </>
                                                    )
                                                }
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <label className='sm:mt-5'> پروفایل </label>
                                    <div className='relative flex justify-center items-center'>
                                        <img src="/images/avatars/avatar1.jpg" alt="My Profile Image" className='w-14 h-14 mt-1 rounded-full' />
                                        <span className='absolute text-xs bottom-[15px] cursor-pointer bg-orange-400 hover:bg-orange-500 text-white p-1 rounded transition-colors' onClick={() => setShowModalProfileChange(true)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                            </svg>

                                        </span>
                                    </div>
                                </div>
                                <button className='btn-orange w-max px-2 py-1 rounded' onClick={showAlert}> تغییر اطلاعات </button>
                            </div>
                        </form>
                    </div>
                </div>

                <Modal
                    showModalState={showModalProfileChange}
                    setShowModalState={setShowModalProfileChange}
                    title="پروفایل شما"
                >
                    <div className='avatar-container grid grid-cols-4 xs:grid-cols-6 gap-2 h-[210px] overflow-y-auto'>
                        {
                            avatarsArray.map((avatar, index) => (
                                <img key={index + 1} src={`/images/avatars/${avatar}`} alt={avatar.split('.')[0]} className='rounded-full' />
                            ))
                        }
                    </div>
                </Modal>
            </section>
        </>
    )
}