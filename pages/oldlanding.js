import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Adam's new site</title>
        <meta name="description" content="Adam's new Next.js site" />
        <link rel="icon" href="/adamlaptop.ico" />
      </Head>

      <NavBar />

      <main>

        <div className="relative pt-32 pb-36 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
            style={{
              backgroundImage:
                "url('/images/stacked-waves-haikei.svg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-70 bg-black"
            ></span>
          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  
                  <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                      scale: .5,
                      opacity: 0
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: .1,
                        type: 'tween',
                        duration: 2
                      }
                    }
                  }}>
                    <h1 className="tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-200 to-teal-200 text-5xl">
                      Adam Hunter
                    </h1>
                  </motion.div>

                  {/* some other cool stuff you can do like play with scale and rotation */}
                  {/* <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                      scale: .5,
                      opacity: 0
                    },
                    visible: {
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0],
                      opacity: 1,
                      transition: {
                        delay: .4
                      }
                    }
                  }}>
                    <h1 className="text-white font-semibold text-5xl">
                      Adam Hunter
                    </h1>
                  </motion.div> */}


                    <Image
                      className="h-48 w-full object-cover"
                      src="/images/adamlaptop.png"
                      width={220}
                      height={220}
                      alt="adam laptop"
                    />


                  <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                      scale: .5,
                      opacity: 0
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: .2,
                        type: 'tween',
                        duration: 2
                      }
                    }
                  }}>
                  <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-t from-indigo-200 to-teal-200">
                    full-stack developer
                  </h2>
                  </motion.div>

                  {/* <p className="pt-5 text-9xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-teal-100 to-teal-400 sm:text-4xl">
                   where creativity converges with engineering
                  </p> */}
                  {/* <img className="object-cover w-44 lg:w-82 bg-white/10 shadow-lg rounded-full" src="/images/adamhi.png" alt="profile pic" /> */}

                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
          </div>
        </div>

        <div className="pb-20 bg-gradient-to-b from-black via-indigo-900 to-cyan-900 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">


            <motion.div className="pt-6 w-full md:w-4/12 px-4 text-center"  initial="hidden" animate="visible" variants={{
                    hidden: {
                      scale: .5,
                      opacity: 0
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: .6,
                        type: 'tween',
                        duration: 1
                      }
                    }
                  }}>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white/80 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">

                        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faLaptopCode} />

                    </div>
                    <h6 className="text-xl font-semibold">What should</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      this box say?!
                    </p>
                  </div>
                </div>
              </motion.div>
              


              <motion.div className="lg:pt-14 w-full md:w-4/12 px-4 text-center" initial="hidden" animate="visible" variants={{
                    hidden: {
                      scale: .5,
                      opacity: 0
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: .7,
                        type: 'tween',
                        duration: 1
                      }
                    }
                  }}>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">
                      
                      {/* REACT SVG */}
                      <svg className="w-20 h-20" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>

                    </div>
                    <h6 className="text-xl font-semibold">Frontend</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Where creativity
                    </p>
                  </div>
                </div>
              </motion.div>
              

              <motion.div className="lg:pt-24 pt-6 w-full md:w-4/12 px-4 text-center" initial="hidden" animate="visible" variants={{
                    hidden: {
                      scale: .5,
                      opacity: 0
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: .8,
                        type: 'tween',
                        duration: 1
                      }
                    }
                  }}>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">

                      {/* PYTHON SVG */}
                      <svg className="w-20 h-20" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>

                    </div>
                    <h6 className="text-xl font-semibold">Backend</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    converges with engineering.
                    </p>
                  </div>
                </div>
              </motion.div>


              <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                  <div className="space-y-5 sm:space-y-4">
                    {/* <h2 className="text-3xl pt-10 md:pt-20 lg:pt-20 text-white font-extrabold tracking-tight sm:text-2xl">About</h2> */}
                    <p className="text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-teal-400 sm:text-4xl">
                    Hi, I'm Adam, a developer from New York City. I love using cutting edge technologies to bring ideas to life.
                    </p>
                    <img className="object-cover w-44 lg:w-82 bg-white/10 shadow-lg rounded-full" src="/images/adamhi.png" alt="profile pic" />
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

                         
                            {/* <img className="object-cover w-44 lg:w-96 bg-white/10 shadow-lg rounded-full" src="/images/adamhi.png" alt="profile pic" /> */}
                            
                            <div className="sm:col-span-2">
                              <div className="space-y-4">
                                <div className="text-2xl text-white leading-6 font-medium space-y-1">
                                  {/* <h3>Adam Hunter</h3> */}
                                </div>
                                <div>
                                  {/* <p className="text-gray-500 text-lg">Full-stack Developer</p> */}
                                </div>
                                <ul role="list" className="flex space-x-5">
                                  <li>
                                      {/* <Link href="https://github.com/Adamhunter108/">
                                          <a target="_blank" className="text-gray-100 hover:text-gray-500">
                                              <span className="sr-only">GitHub</span>
                                              <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                          </a>
                                    </Link> */}
                                  </li>
                                  <li>
                                      {/* <Link href="https://www.linkedin.com/in/adamhhecht/">
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
                                      </Link> */}
                                  </li>
                                  <li>
                                      {/* <Link href="mailto:adamhunter928@gmail.com?subject= &body=Let's work on something cool together!">
                                          <a target="_blank" className="text-gray-100 hover:text-gray-500">
                                              <span className="sr-only">Email</span>
                                              <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
                                          </a>
                                      </Link> */}
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
          </div>
            
        </div>

        
      </main>

        <Footer />

    </div>
  )
}
