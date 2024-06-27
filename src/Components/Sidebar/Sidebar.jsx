import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Sidebar({ setShow }) {

    const homePage = useRef()

    const isActiveMenu = (event) => {
        if (setShow) {
            setShow(false)
        }

        if (event.target.textContent === 'پیشخوان') {
            homePage.current.classList.add('bg-orange-400')
            homePage.current.classList.add('text-white')
        } else {
            homePage.current.classList.remove('bg-orange-400')
            homePage.current.classList.remove('text-white')
        }
    }

    useEffect(() => {
        if (location.pathname === '/my-account' || location.pathname === '/my-account/') {
            homePage.current.classList.add('bg-orange-400')
            homePage.current.classList.add('text-white')
        } else {
            homePage.current.classList.remove('bg-orange-400')
            homePage.current.classList.remove('text-white')
        }
    }, [])

    const showAlert = () => {
        Swal.fire({
            text: 'شما با موفقیت از حساب کاربری خود خارج شدید',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!'
        })
    }

    return (
        <ul className="space-y-2 ipad:space-y-5 pb-3">
            <li onClick={(event) => isActiveMenu(event)}>
                <NavLink to='/my-account' className={(link) => (link.isActive ? "flex items-center bg-orange-400 hover:bg-orange-400 hover:text-white text-white p-3 rounded text-base transition-colors" : "flex items-center p-3 rounded hover:bg-orange-400 hover:text-white transition-colors text-base")} ref={homePage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>

                    پیشخوان
                </NavLink>
            </li>
            <li onClick={(event) => isActiveMenu(event)}>
                <NavLink to='orders' className={(link) => (link.isActive ? "flex items-center bg-orange-400 text-white p-3 rounded text-base" : "flex items-center p-3 rounded hover:bg-orange-400 hover:text-white transition-colors text-base")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                    </svg>


                    سفارش ها
                </NavLink>
            </li>
            <li onClick={(event) => isActiveMenu(event)}>
                <NavLink to='tickets' className={(link) => (link.isActive ? "flex items-center bg-orange-400 text-white p-3 rounded text-base" : "flex items-center p-3 rounded hover:bg-orange-400 hover:text-white transition-colors text-base")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                        <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                    </svg>


                    تیکت ها
                </NavLink>
            </li>
            <li onClick={(event) => isActiveMenu(event)}>
                <NavLink to='details' className={(link) => (link.isActive ? "flex items-center bg-orange-400 text-white p-3 rounded text-base" : "flex items-center p-3 rounded hover:bg-orange-400 hover:text-white transition-colors text-base")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>


                    جزئیات حساب
                </NavLink>
            </li>
            <li>
                <a href='/admin-panel' className="flex items-center p-3 rounded hover:bg-orange-400 hover:text-white transition-colors text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>

                    پنل مدیریت
                </a>
            </li>
            <li>
                <button className="flex items-center p-3 w-full rounded hover:bg-orange-400 hover:text-white transition-colors text-base" onClick={showAlert}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" className="w-4 h-4 ml-1.5" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"></path></svg>

                    خروج
                </button>
            </li>
        </ul>
    )
}