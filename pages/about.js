import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGitHub  } from "@fortawesome/free-solid-svg-icons"

  export default function Example() {
    return (
      <div className="bg-gradient-to-b from-black via-indigo-900 to-cyan-900 h-screen">
          <NavBar />
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl pt-10 md:pt-20 lg:pt-20 text-white font-extrabold tracking-tight sm:text-2xl">About</h2>
              <p className="text-xl text-gray-500">
              Adam is a full-stack developer specializing Python and JavaScript.  Adam is a full-stack developer specializing Python and JavaScript. 
              </p>
            </div>
            <div className="lg:col-span-2 lg:pt-20">
              <ul
                role="list"
                className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
              >
                  <li className="sm:py-8">
                    <div className="space-y-4 lg:pl-32 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      {/* <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img className="object-cover bg-white/10 shadow-lg rounded-full" src="/images/adamhi.png" alt="profile pic" />
                      </div> */}
                      <img className="object-cover w-44 lg:w-96 bg-white/10 shadow-lg rounded-full" src="/images/adamhi.png" alt="profile pic" />
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-2xl text-white leading-6 font-medium space-y-1">
                            <h3>Adam Hunter</h3>
                          </div>
                          <div>
                            <p className="text-gray-500 text-lg">Full-stack Developer</p>
                          </div>
                          <ul role="list" className="flex space-x-5">
                            <li>
                                <Link href="https://github.com/Adamhunter108/">
                                    <a target="_blank" className="text-gray-100 hover:text-gray-500">
                                        <span className="sr-only">GitHub</span>
                                        <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                    </a>
                              </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/adamhhecht/">
                                    <a target="_blank" className="text-gray-100 hover:text-gray-500">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:adamhunter928@gmail.com?subject= &body=Let's work on something cool together!">
                                    <a target="_blank" className="text-gray-100 hover:text-gray-500">
                                        <span className="sr-only">Email</span>
                                        <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
                                    </a>
                                </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
              </ul>
              {/* <img className="object-cover bg-white/10 shadow-lg rounded-full" src="/images/adamhi.png" alt="profile pic" /> */}
            </div>
          </div>
        </div>
        
      </div>
    )
  }