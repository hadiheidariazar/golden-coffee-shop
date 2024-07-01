import React, { useEffect } from 'react'

export default function Modal({ showModalState, setShowModalState, title, children, moldaWidth }) {

    useEffect(() => {
        showModalState ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
    }, [showModalState])

    return (
        <div className={`fixed flex justify-center items-center inset-0 min-h-screen z-50 ${showModalState ? "visible opacity-100" : "invisible opacity-0"}`}>
            <div className={`overlay h-full flex justify-center items-center transition-all z-20 ${showModalState ? "overlay-open" : "invisible opacity-0"}`} onClick={() => setShowModalState(false)}>
            </div>
            <div className={`modal w-[96%] ${moldaWidth ? moldaWidth : "xs:w-[450px]"} mx-auto p-3 fixed bg-white dark:bg-zinc-700 z-30 transition-all ${showModalState ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className='flex justify-between items-center gap-x-2 pb-2 border-b-[1px] border-b-gray-300 dark:border-b-white/20'>
                    <h2 className='font-morabba-medium text-xl dark:text-white'> {title}</h2>
                    <div onClick={() => setShowModalState(false)}>
                        <svg className="w-5 h-5 text-zinc-600 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='modal-body py-3 dark:text-white'>
                    {children}
                </div>
            </div>
        </div>
    )
}