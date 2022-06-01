import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode, faDumpsterFire, faHandSpock, faOm, faKitchenSet, faGhost, faBrain  } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Adam's new site</title>
        <meta name="description" content="Adam's new Next.js site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>

        {/* <h1 className="pl-5 pt-20 text-4xl text-semibold">Home</h1> */}
        

        <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
            style={{
              backgroundImage:
                "url('/images/blurry-gradient.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Adam Hunter
                  </h1>
                  <h2 className="mt-4 text-lg text-white">
                    full-stack developer
                  </h2>
                  <img
                      className="w-60"
                      src="/images/adamlaptop.png"
                      alt=""
                    />
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

        <div className="pb-20 bg-gradient-to-r from-black via-indigo-900 to-black -mt-24 h-screen">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white/80 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">

                        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faLaptopCode} />

                    </div>
                    <h6 className="text-xl font-semibold">Sicker than your average</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Can code pretty good
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">
                      
                      <FontAwesomeIcon style={{fontSize:"25px"}} icon={faHandSpock}></FontAwesomeIcon>

                    </div>
                    <h6 className="text-xl font-semibold">Straight up nerd shit</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Captain's Log, Supplemental
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">
                      
                      <FontAwesomeIcon style={{fontSize:"25px"}} icon={faDumpsterFire}></FontAwesomeIcon>

                    </div>
                    <h6 className="text-xl font-semibold">Calm under pressure</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    I'm a little lower
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">

                      <FontAwesomeIcon style={{fontSize:"25px"}} icon={faDumpsterFire}></FontAwesomeIcon>

                    </div>
                    <h6 className="text-xl font-semibold">Things are fine</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Be humble
                    </p>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
            
        </div>
      </main>

      {/* <footer className={styles.footer}>
        Made with ♥️ in NYC
      </footer> */}
    </div>
  )
}
