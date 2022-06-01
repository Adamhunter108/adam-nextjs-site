import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, HomeIcon } from '@heroicons/react/outline'
import Link from 'next/link'
// import FlyOut from "../components/FlyOut";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney, faBook, faEllipsisVertical, faAddressCard  } from "@fortawesome/free-solid-svg-icons"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="fixed bg-black/70 backdrop-blur-lg w-screen z-40">
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">

                {/* NAVBAR IMAGES */}
                {/* <div className="flex-shrink-0">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="images/wu.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-32 w-auto"
                    src="images/apple-wu-color.png"
                    alt="Workflow"
                  />
                </div> */}

                {/* MAIN NAV LINKS */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                    {/* use a tag still bc of html bc of seo/accessability  */}
                    <Link href="/">
                        <button
                        type="button"
                        className="text-gray-300 hover:bg-gray-700/70 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        <a>Home</a>
                        </button>
                    </Link>

                    <Link href="/about">
                        <button
                        type="button"
                        className="text-gray-300 hover:bg-gray-700/70 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <a>About</a>
                        </button>
                    </Link>

                    <Link href="/blog">
                        <button
                        type="button"
                        className="text-gray-300 hover:bg-gray-700/70 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <a>Blog</a>
                        </button>
                    </Link>

                  </div>
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                {/* <FlyOut /> */}
              </div>

              <div className="-mr-2 flex sm:hidden">

                {/* MOBILE MENU BUTTON */}  
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    // <FontAwesomeIcon style={{fontSize:"25px"}} icon={faEllipsisVertical} />
                  )}
                </Disclosure.Button>

              </div>
            </div>
          </div>

            {/* MOBILE MENU  */}
          <div className="">
          <Transition
            // as={Fragment}
            enter="duration-300 ease-in"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">

                {/* MOBILE LINKS */}
              <Link href="/">
                    <div className="flex flex-row">
                    {/* <HomeIcon className="h-6 w-6 text-white" aria-hidden="true" />  */}
                    <Disclosure.Button
                    type="button"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 justify-center rounded-md text-base font-medium"
                    >
                        <FontAwesomeIcon className="text-emerald-500" style={{fontSize:"25px"}} icon={faHouseChimney} /> <a>Home</a>
                    </Disclosure.Button>
                    </div>
                </Link>

                <Link href="/about">
                    <Disclosure.Button
                    type="button"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        <FontAwesomeIcon className="text-emerald-500" style={{fontSize:"25px"}} icon={faAddressCard} /> <a>About</a>
                    </Disclosure.Button>
                </Link>

                <Link href="/blog">
                    <Disclosure.Button
                    type="button"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        <FontAwesomeIcon className="text-emerald-500" style={{fontSize:"25px"}} icon={faBook} /> <a>Blog</a>
                    </Disclosure.Button>
                </Link>

            </div>

            <div className="pt-4 pb-3 border-t border-white/70">

              <div className="pr-1">
                {/* <FlyOut /> */}
              </div>
            </div>
          </Disclosure.Panel>
          </Transition>
          </div>
        </div>
      )}
    </Disclosure>
  )
}
