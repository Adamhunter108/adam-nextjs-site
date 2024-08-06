import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { CornerNav } from "../components/CornerNav";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Descriptions and links to projects that Adam has worked on."
        />
        <link rel="icon" href="/adammindblown.ico" />
      </Head>

      {/* <NavBar /> */}
      <CornerNav />

      <div className="relative bg-gradient-to-t from-cyan-900 via-indigo-900 to-black pt-20 pb-20 px-4 sm:px-6 lg:pt-15 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-600 to-teal-400 sm:text-4xl">
              projects
            </h1>
            <h2 className="mt-3 max-w-2xl mx-auto text-xl text-transparent bg-clip-text bg-gradient-to-t from-indigo-200 to-teal-200 sm:mt-4">
              some cool stuff I&apos;ve built
            </h2>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/* SprigSwap */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/sprigswaphero.png"
                    width={600}
                    height={300}
                    alt="I Ching"
                    blurDataURL="/images/sprigswaphero.png"
                    placeholder="blur"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    SprigSwap
                  </p>
                  <Link href="https://www.sprigswap.com" legacyBehavior>
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        sprigswap.com
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    SprigSwap is an Avani Tech Consultancy MVP that I am
                    currently contributing to as a full-stack engineer.
                    SprigSwap is a mobile-first web-app marketplace tailored for
                    parents and caregivers for buying, selling and giving away
                    second-hand items for kids.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    SprigSwap is a Next.js application written in TypeScript
                    that uses Zustand for state management, Tailwind CSS and
                    Framer Motion for the UI and a suite of Google Cloud
                    products. Firebase is leveraged for real-time database
                    functionalities, authentication and media storage.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    The app features an intuitive and clean UI that offers
                    different experiences on mobile, tablets and large screens.
                    Highlight features include an in-app live chat, seamless
                    infinite scroll on the main posts feed, full account
                    management, public storefront profiles and AI powered
                    search.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* TYPESCRIPT LOGO */}
                  <Image
                    src="/images/typescript-logo.png"
                    width={40}
                    height={30}
                    alt="Tailwind logo"
                  />
                  {/* TAILWIND LOGO */}
                  <Image
                    src="/images/Tailwind_CSS_Logo.png"
                    width={42}
                    height={40}
                    alt="Tailwind logo"
                    className="ml-1"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bedlam */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <video
                    className="h-48 w-full object-cover"
                    preload="auto"
                    autoPlay="true"
                    loop
                    playsInline
                    controls
                  >
                    <source src="/images/bedlam.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Bedlam.gg
                  </p>
                  <Link href="https://www.bedlamgg.com/" legacyBehavior>
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        bedlam.gg
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    Bedlam is an Everyrealm product that I contributed to as a
                    full-stack software engineer. Bedlam is a SaaS platform that
                    serves as a “link in bio” for competitive and casual gamers
                    as well as game and content creators.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    Bedlam uses a modern and diverse tech stack which includes
                    TypeScript, Next.js, Tailwind CSS with DaisyUI, Zustand,
                    Auth0, and Vercel for the frontend. The backend uses a suite
                    of AWS tools such as AWS Lambda, API Gateway, and DynamoDB
                    orchestrated with AWS CDK.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    The platform allows for various third party gaming
                    integrations such as connecting Steam accounts to display
                    real-time in game stats. The platform also offers unlockable
                    rewards in the form of profile customizations.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* TYPESCRIPT LOGO */}
                  <Image
                    src="/images/typescript-logo.png"
                    width={40}
                    height={30}
                    alt="Tailwind logo"
                  />
                  {/* TAILWIND LOGO */}
                  <Image
                    src="/images/Tailwind_CSS_Logo.png"
                    width={42}
                    height={40}
                    alt="Tailwind logo"
                    className="ml-1"
                  />
                </div>
              </div>
            </motion.div>

            {/* PROGRESSIVE WEB APP */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/ichingsm.gif"
                    width={600}
                    height={300}
                    alt="I Ching"
                    blurDataURL="/images/ichingsm.gif"
                    placeholder="blur"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    I Ching: Book of Changes
                  </p>
                  <Link href="https://bookofchanges.app/" legacyBehavior>
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        bookofchanges.app
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    I Ching: Book of Changes is full-stack PWA (Progressive
                    Web-App) for getting I Ching readings, storing and sharing
                    your results.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    The frontend is a Next.js application written in TypeScript,
                    styled with Tailwind CSS and deployed to and hosted on
                    Vercel via Git. The backend leverages Supabase, where a
                    PostgreSQL database stores user data.
                  </p>

                  <p className="mt-2 text-base text-gray-500">
                    The app offers user authentication using both email/password
                    and SSO (Single Sign-On) for Google accounts. The app is
                    fully functional for users without accounts but those who
                    sign in are able to save their readings.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    This app can be installed on any desktop or mobile device
                    via a browser and will work offline. For instructions on how
                    to install a PWA, please see the{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:text-cyan-300"
                      href="https://github.com/Adamhunter108/i-ching-nextjs-supabase#%E2%84%B9%EF%B8%8F-about"
                    >
                      README
                    </a>
                    .
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* TYPESCRIPT LOGO */}
                  <Image
                    src="/images/typescript-logo.png"
                    width={40}
                    height={30}
                    alt="Tailwind logo"
                  />
                  {/* TAILWIND LOGO */}
                  <Image
                    src="/images/Tailwind_CSS_Logo.png"
                    width={42}
                    height={40}
                    alt="Tailwind logo"
                    className="ml-1"
                  />
                </div>

                <div className="mt-6 flex items-center">
                  <motion.a whileHover={{ scale: 1.5 }}>
                    <Link
                      href="https://github.com/Adamhunter108/i-ching-nextjs-supabase"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-indigo-600 hover:text-cyan-300"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                    </Link>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* WEB APP GAME */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/ceelodemo.gif"
                    width={600}
                    height={300}
                    alt="Cee Lo"
                    blurDataURL="/images/ceelodemo.gif"
                    placeholder="blur"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">Cee Lo</p>
                  <Link href="https://ceelo.vercel.app/" legacyBehavior>
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        ceelo.vercel.app
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    Cee Lo is a browser based multiplayer dice game web-app.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    This web-app is built with Next.js 14, TypeScript, and
                    styled with Tailwind CSS. The UI is mobile-first responsive
                    and features custom CSS animations as well as graphics
                    generated with AI.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    The app flow offers two game modes, Free Throw and 2 Player.
                    Free Throw allows for unlimited rolls of three dice to find
                    Cee Lo scores while the 2 Player mode accepts two names and
                    offers an interactive flow that enforces game rules to
                    determine a winner. In 2 Player mode, the web-app keeps
                    track of wins and losses.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    Please see the{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:text-cyan-300"
                      href="https://ceelo.vercel.app/about"
                    >
                      about page
                    </a>{" "}
                    for more on Cee Lo and how to play.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* TYPESCRIPT LOGO */}
                  <Image
                    src="/images/typescript-logo.png"
                    width={40}
                    height={30}
                    alt="Tailwind logo"
                  />
                  {/* TAILWIND LOGO */}
                  <Image
                    src="/images/Tailwind_CSS_Logo.png"
                    width={42}
                    height={40}
                    alt="Tailwind logo"
                    className="ml-1"
                  />
                </div>

                <div className="mt-6 flex items-center">
                  <motion.a whileHover={{ scale: 1.5 }}>
                    <Link
                      href="https://github.com/Adamhunter108/ceelo"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-indigo-600 hover:text-cyan-300"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                    </Link>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* INTERNAL TOOL */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/youtube-scraper-screenshot.jpg"
                    width={600}
                    height={300}
                    // blurDataURL="/images/thirtysix.png"
                    // placeholder="blur"
                    alt="36 chambers"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    YouTube Content Scraper
                  </p>
                  <Link
                    href="https://youtube-scraper-poc-fe.vercel.app/"
                    legacyBehavior
                  >
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        youtube-scraper-poc-fe.vercel.app
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    This is a proof-of-concept internal tool that was developed
                    for a specific music corporation to find and monitor
                    copyrighted content on YouTube.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    This is a full-stack app comprised of a Python Flask{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:text-cyan-300"
                      href="https://github.com/Adamhunter108/youtube_scraper"
                    >
                      backend
                    </a>
                    , which serves as a secure API, that searches the YouTube
                    Data API, can exclude specific channels by title (such as
                    official accounts) from the search and will automatically
                    save the results to a PostgreSQL database. The Flask app is
                    continuously deployed to Heroku via GitHub, while the
                    database, which was provisioned with SQL queries is hosted
                    with Supabase.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    The{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:text-cyan-300"
                      href="https://github.com/Adamhunter108/youtube-scraper-poc-fe"
                    >
                      frontend
                    </a>{" "}
                    is a Next.js 14 application written in TypeScript and styled
                    with Tailwind CSS. This app features serverless API routes
                    that protect sensitive data such as API keys and database
                    URLs by storing them server-side. The UI allows users to
                    browse the YouTube Data API, optionally filter out specific
                    channels, save results and browse and manage the database.
                    It is deployed continuously to Vercel via GitHub.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    <span className="italic">note</span>: the code is public but
                    the deployed UI is live and is password protected to prevent
                    abuse, please email me if you&apos;d like access.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* PYTHON SVG */}
                  <svg
                    className="w-10 h-10 pr-1"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                  </svg>
                  {/* NEXT LOGO */}
                  <Image
                    src="/images/nextlogo2.png"
                    width={49}
                    height={49}
                    alt="Next logo"
                  />
                </div>
                <div className="mt-6 flex items-center">
                  <motion.a whileHover={{ scale: 1.5 }}>
                    <Link
                      href="https://github.com/Adamhunter108/youtube_scraper"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-indigo-600 hover:text-cyan-300"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                    </Link>
                  </motion.a>
                  <motion.a className="pl-3" whileHover={{ scale: 1.5 }}>
                    <Link
                      href="https://github.com/Adamhunter108/youtube-scraper-poc-fe"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-indigo-600 hover:text-cyan-300"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                    </Link>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* SaaS Landing Page */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/saaslandingdemo.gif"
                    width={600}
                    height={300}
                    alt="Saas landing demo"
                    blurDataURL="/images/saaslandingdemo.gif"
                    placeholder="blur"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    SaaS Landing Page
                  </p>
                  <Link
                    href="https://ah-saas-landing-demo.vercel.app/"
                    legacyBehavior
                  >
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        ah-saas-landing-demo.vercel.app
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    A landing page developed for a SaaS (Software as a Service)
                    MVP (Minimum Viable Product) scheduling platform.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    This project is a Next.js application, styled with Tailwind
                    CSS. This application features custom branding and graphics,
                    animations, and an original responsive design.
                  </p>
                  {/* <p className="mt-2 text-base text-gray-500">
                    NEED ANOTHER SENTENCE HERE
                  </p> */}
                </div>
                <div className="pt-2 flex">
                  {/* REACT SVG */}
                  <svg
                    className="w-9 h-9"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                  </svg>
                  {/* TAILWIND LOGO */}
                  <Image
                    src="/images/Tailwind_CSS_Logo.png"
                    width={42}
                    height={40}
                    alt="Tailwind logo"
                  />
                </div>

                {/* <div className="mt-6 flex items-center">
                  <motion.a whileHover={{ scale: 1.5 }}>
                    <Link
                      href="https://github.com/Adamhunter108/i-ching-nextjs-supabase"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-indigo-600 hover:text-cyan-300"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                    </Link>
                  </motion.a>
                </div> */}
              </div>
            </motion.div>

            {/* WEB DEV */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.7,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/theivyscreenshots.png"
                    width={600}
                    height={300}
                    alt="adamhunter.website"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    The Ivy LBNY
                  </p>
                  <Link href="https://www.theivylbny.com/" legacyBehavior>
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        theivylbny.com
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    A marketing and e-commerce website for event and retail
                    space, The Ivy in Long Beach, NY.
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    This project is built with Next.js, styled with Tailwind CSS
                    and features SEO, accessibility and image optimization,
                    Google Analytics, serverless API integration, custom built
                    React components, a fully responsive original design and
                    deploys to production continuously to Vercel via Git.
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    The e-commerce portion of the website is a custom headless
                    Shopify storefront built using the React framework Hydrogen,
                    which is seamlessly integrated through a subdomain.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* REACT SVG */}
                  <svg
                    className="w-9 h-9"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                  </svg>
                  {/* JS SVG */}
                  {/* <svg className="w-9 h-9" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg> */}
                  {/* TAILWIND LOGO */}
                  <Image
                    src="/images/Tailwind_CSS_Logo.png"
                    width={42}
                    height={40}
                    alt="Tailwind logo"
                  />
                </div>

                <div className="mt-6 flex items-center">
                  <motion.a whileHover={{ scale: 1.5 }}>
                    <Link
                      href="https://github.com/Adamhunter108/the-ivy"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-indigo-600 hover:text-cyan-300"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                    </Link>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* WEB DESIGN */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/acc.png"
                    width={600}
                    height={300}
                    alt="A Construction Company image"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Web Design Demo Site
                  </p>
                  <Link
                    href="https://a-construction-company.vercel.app/"
                    legacyBehavior
                  >
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base hover:text-cyan-300 text-indigo-600 cursor-pointer">
                        a-construction-company.vercel.app
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    A marketing website demo developed for a construction
                    company.{" "}
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    Built with Next.js and styled with Tailwind CSS, the site
                    features SEO, accessibility and image optimization, Google
                    Analytics, serverless API integration, custom built React
                    components, animations, a fully responsive original design
                    and is deployed continuously to Vercel via Git. The site
                    also features custom branding and logo creation.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* REACT SVG */}
                  <svg
                    className="w-10 h-10"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                  </svg>

                  {/* NEXT LOGO */}
                  <Image
                    src="/images/nextlogo2.png"
                    width={50}
                    height={49}
                    alt="Next logo"
                  />

                  {/* TAILWIND LOGO */}
                  <Image
                    src="/images/Tailwind_CSS_Logo.png"
                    width={42}
                    height={40}
                    alt="Tailwind logo"
                  />
                </div>

                {/* <div className="mt-6 flex items-center">
                           <motion.a whileHover={{ scale: 1.5 }}>
                           <Link href="https://github.com/Adamhunter108/the-ivy">
                                   <a  target="_blank" className="text-indigo-600 hover:text-cyan-300">
                                       <span className="sr-only">GitHub</span>
                                       <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                   </a>
                           </Link>
                           </motion.a>
                       </div> */}
              </div>
            </motion.div>

            {/* FULL STACK ECOMMERCE */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/thirtysix.png"
                    width={600}
                    height={300}
                    // blurDataURL="/images/thirtysix.png"
                    // placeholder="blur"
                    alt="36 chambers"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Full-stack E-commerce Demo
                  </p>
                  <Link
                    href="https://thirtysixchambers.herokuapp.com/"
                    legacyBehavior
                  >
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        thirtysixchambers.herokuapp.com
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    An e-commerce store that features admin functionality for
                    managing users, products and orders, PayPal integration, and
                    customer reviews.
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    The backend is written in Python and features Django and the
                    Django REST framework to serve a custom built API. The
                    frontend features React with Bootstrap for UI styling and
                    Redux for state management. The live demo is using a
                    PostgreSQL database hosted on AWS. The images are stored in
                    AWS S3 buckets, the project is deployed to Heroku and PayPal
                    is set to developer sandbox for testing.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* PYTHON SVG */}
                  <svg
                    className="w-10 h-10 pr-1"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                  </svg>
                  {/* REACT SVG */}
                  <svg
                    className="w-10 h-10"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                  </svg>
                </div>
                <div className="mt-6 flex items-center">
                  <motion.a whileHover={{ scale: 1.5 }}>
                    <Link
                      href="https://github.com/Adamhunter108/ecommerce"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-indigo-600 hover:text-cyan-300"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                    </Link>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* WordPress DESIGN */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/sigilsdoom.gif"
                    width={600}
                    height={300}
                    alt="36 chambers"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    WordPress Development
                  </p>
                  <Link href="https://sigilsdoom.com/" legacyBehavior>
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        sigilsdoom.com
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    A marketing website for a recording and touring band from
                    New York.
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    The site features WordPress, a custom theme, client admin
                    functionality, SEO, managed hosting and security.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* WORDPRESS SVG */}
                  <svg
                    className="w-8 h-8"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z" />
                  </svg>
                  {/* CSS SVG */}
                  <svg
                    className="w-8 h-8 pl-1"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" />
                  </svg>
                </div>
                <div className="mt-6 flex items-center">
                  {/* <Link href="">
                                <a target="_blank" className="text-indigo-600 hover:text-gray-500">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                </a>
                            </Link> */}
                </div>
              </div>

              {/* API DEV */}
            </motion.div>
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/pexelscode.jpg"
                    width={600}
                    height={300}
                    alt="36 chambers"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    API Development
                  </p>
                  <Link
                    href="https://github.com/Adamhunter108/django-api-login"
                    legacyBehavior
                  >
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        github.com/Adamhunter108/django-api-login
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    A RESTful API for managing user accounts for Django apps
                    featuring JWT (JSON Web Token) authentication, and full CRUD
                    (Create, Read, Update, Delete) functionality.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* PYTHON SVG */}
                  <svg
                    className="w-10 h-10 pr-1"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                  </svg>
                </div>
                <div className="mt-6 flex items-center">
                  <motion.a whileHover={{ scale: 1.5 }}>
                    <Link
                      href="https://github.com/Adamhunter108/django-api-login"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-indigo-600 hover:text-cyan-300"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                    </Link>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* WEB DEV */}
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.7,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    className="h-48 w-full object-cover"
                    src="/images/adammindblown.png"
                    width={600}
                    height={300}
                    alt="adamhunter.website"
                  />
                </motion.div>
              </div>
              <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    Web Development
                  </p>
                  <Link href="/" legacyBehavior>
                    <a target="_blank" className="block mt-2">
                      <p className="mt-3 text-base text-indigo-600 hover:text-cyan-300 cursor-pointer">
                        adamhunter.website
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    <i>This website</i>: A portfolio and blog built with Next.js
                    and styled with Tailwind CSS. The site features incremental
                    static site generation, API consumption from a headless CMS,
                    SEO, accessibility and image optimization, Google Analytics,
                    serverless API integration, dynamic routing, custom built
                    React components, animations, a fully responsive original
                    design and is deployed continuously to Vercel via Git.
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    The headless CMS is a Strapi app that uses a PostgreSQL
                    database, stores images with Cloudinary and is also
                    continuously deployed via Git.
                  </p>
                </div>
                <div className="pt-2 flex">
                  {/* REACT SVG */}
                  <svg
                    className="w-9 h-9"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                  </svg>
                  {/* JS SVG */}
                  {/* <svg
                    className="w-9 h-9"
                    aria-hidden="true"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                  </svg> */}
                  {/* TAILWIND LOGO */}
                  <Image
                    src="/images/Tailwind_CSS_Logo.png"
                    width={42}
                    height={40}
                    alt="Tailwind logo"
                  />
                </div>

                <div className="mt-6 flex items-center">
                  <motion.a whileHover={{ scale: 1.5 }}>
                    <Link
                      href="https://github.com/Adamhunter108/adam-nextjs-site"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-indigo-600 hover:text-cyan-300"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-8 h-8"
                          aria-hidden="true"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                    </Link>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
