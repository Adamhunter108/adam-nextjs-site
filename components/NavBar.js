// import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, HomeIcon } from "@heroicons/react/outline";
import Link from "next/link";
// import WeatherFlyOut from './WeatherFlyOut'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBook,
  faEllipsisVertical,
  faPaperPlane,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.asPath;
  // console.log(currentRoute)

  return (
    <Disclosure
      as="nav"
      className="fixed bg-black/70 backdrop-blur-lg w-screen z-40"
    >
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                {/* MAIN NAV LINKS */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <div
                        className={`${
                          currentRoute === "/"
                            ? "text-indigo-400 underline decoration-indigo-500"
                            : "text-gray-300"
                        } hover:bg-gray-700/50 hover:text-indigo-400 hover:underline decoration-indigo-500 block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        Home
                      </div>
                    </Link>

                    <Link href="/blog">
                      <div
                        className={`${
                          currentRoute === "/blog"
                            ? "text-indigo-400 underline decoration-indigo-500"
                            : "text-gray-300"
                        } hover:bg-gray-700/70 hover:text-indigo-400 hover:underline decoration-indigo-500 block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        Blog
                      </div>
                    </Link>

                    <Link href="/projects">
                      <div
                        className={`${
                          currentRoute === "/projects"
                            ? "text-indigo-400 underline decoration-indigo-500"
                            : "text-gray-300"
                        } hover:bg-gray-700/70 hover:text-indigo-400 hover:underline decoration-indigo-500 block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        Projects
                      </div>
                    </Link>

                    <Link href="/contact">
                      <div
                        className={`${
                          currentRoute === "/contact"
                            ? "text-indigo-400 underline decoration-indigo-500"
                            : "text-gray-300"
                        } hover:bg-gray-700/70 hover:text-indigo-400 hover:underline decoration-indigo-500 block px-3 py-2 rounded-md text-base font-medium`}
                      >
                        Contact
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="hidden sm:ml-6 sm:block">
                <WeatherFlyOut />
              </div> */}

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
                    <div
                      className={`${
                        currentRoute === "/"
                          ? "text-indigo-400"
                          : "text-gray-300"
                      } flex flex-row space-x-2 hover:bg-gray-700 hover:text-indigo-400 px-3 py-2 justify-center rounded-md text-base font-medium`}
                    >
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faHouseChimney}
                      />{" "}
                      <a>Home</a>
                    </div>
                  </Link>

                  <Link href="/blog">
                    <div
                      className={`${
                        currentRoute === "/blog"
                          ? "text-indigo-400"
                          : "text-gray-300"
                      } flex flex-row space-x-2 hover:bg-gray-700 hover:text-indigo-400 px-3 py-2 justify-center rounded-md text-base font-medium`}
                    >
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faBook}
                      />{" "}
                      <a>Blog</a>
                    </div>
                  </Link>

                  <Link href="/projects">
                    <div
                      className={`${
                        currentRoute === "/projects"
                          ? "text-indigo-400"
                          : "text-gray-300"
                      } flex flex-row space-x-2 hover:bg-gray-700 hover:text-indigo-400 px-3 py-2 justify-center rounded-md text-base font-medium`}
                    >
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faLaptopCode}
                      />{" "}
                      <a>Projects</a>
                    </div>
                  </Link>

                  <Link href="/contact">
                    <div
                      className={`${
                        currentRoute === "/contact"
                          ? "text-indigo-400"
                          : "text-gray-300"
                      } flex flex-row space-x-2 hover:bg-gray-700 hover:text-indigo-400 px-3 py-2 justify-center rounded-md text-base font-medium`}
                    >
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faPaperPlane}
                      />{" "}
                      <a>Contact</a>
                    </div>
                  </Link>
                </div>

                <div className="pt-4 pb-3 border-t border-white/70">
                  {/* <div className="pl-3">
                  <WeatherFlyOut />
                </div> */}
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
