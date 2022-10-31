import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faHouse, faXmark, faBars, faBarsStaggered, faBook, faLaptopCode, faPaperPlane } from "@fortawesome/free-solid-svg-icons"


export default function SideBar() {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                className="flex text-4xl text-gray-400 items-center cursor-pointer fixed right-10 top-6 z-50"
                onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon className="text-indigo-500 hover:text-white" style={{fontSize:"35px"}} icon={faXmark} /> 
                </button>
            ) : (
                // <svg
                // onClick={() => setShowSidebar(!showSidebar)}
                // className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
                // fill="#4F46E5"
                // viewBox="0 0 100 80"
                // width="30"
                // height="30"
                // >
                // <rect width="100" height="10"></rect>
                // <rect y="30" width="100" height="10"></rect>
                // <rect y="60" width="100" height="10"></rect>
                // </svg>
                <button onClick={() => setShowSidebar(!showSidebar)} className="fixed z-30 flex items-center cursor-pointer right-4 lg:right-20 top-6">
                    <FontAwesomeIcon className="text-indigo-500 hover:text-white" style={{fontSize:"35px"}} icon={faBarsStaggered} />
                </button>
            )}

            <div
                // className={`top-0 right-0 w-auto bg-indigo-600 p-10 pl-2 text-white fixed h-full z-40  ease-in-out duration-300 ${
                // showSidebar ? "translate-x-0 " : "translate-x-full"
                // }`}
                className={`top-0 right-0 w-full sm:w-full md:w-1/2 lg:w-1/3 bg-black/40 backdrop-blur-lg p-10 pl-2 text-white fixed h-full z-40  ease-in-out duration-300 ${
                    showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <h3 className="mt-10 pb-5 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-cyan-400 flex justify-center">
                    Adam Hunter
                </h3>

                
                <Link href="/">
                    <div className="w-40">
                        <button
                            type="button"
                            className="text-gray-300 hover:bg-gray-700/40 hover:text-indigo-500 block px-3 py-4 rounded-md text-base font-medium"
                        >
                            <FontAwesomeIcon style={{fontSize:"25px"}} icon={faHouse} /> Home
                        </button>
                    </div>
                </Link>

                <div className="border-t border-white/40" />

                <div className="border-t border-white/40" />

                <Link href="/projects">
                    <button
                        type="button"
                        className="text-gray-300 hover:bg-gray-700/40 hover:text-indigo-500 block px-3 py-4 rounded-md text-base font-medium"
                    >
                        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faLaptopCode} /> Projects
                    </button>
                </Link>

                <div className="border-t border-white/40" />

                <Link href="/blog">
                    <button
                        type="button"
                        className="text-gray-300 hover:bg-gray-700/40 hover:text-indigo-500 block px-3 py-4 rounded-md text-base font-medium"
                    >
                        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faBook} /> Blog
                    </button>
                </Link>

                <div className="border-t border-white/40" />

                <Link href="/contact">
                    <button
                        type="button"
                        className="text-gray-300 hover:bg-gray-700/40 hover:text-indigo-500 block px-3 py-4 rounded-md text-base font-medium"
                    >
                        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faPaperPlane} /> Contact
                    </button>
                </Link>

                <div className="border-t border-white/40" />

                <div className="absolute bottom-4 w-full flex justify-center">
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-lime-400 to-teal-400">Made with <FontAwesomeIcon className="text-red-600" style={{fontSize:"15px"}} icon={faHeart} /> in NYC</p>
                </div>

            </div>
            
        </>
    )
    }
