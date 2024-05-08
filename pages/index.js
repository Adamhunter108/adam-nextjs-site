import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import { motion } from "framer-motion";
import TypeAnimation from "react-type-animation";
import { CornerNav } from "../components/CornerNav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adam Hunter</title>
        <meta
          name="description"
          content="Adam Hunter is a full stack developer software engineer specializing in python and javascript with an emphasis on react.  This is his next.js portfolio and blog."
        />
        <link rel="icon" href="/adamlaptop.ico" />
      </Head>

      {/* <NavBar /> */}
      <CornerNav />

      <main>
        <div className="relative pt-32 pb-56 lg:pb-64 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
            style={{
              backgroundImage: "url('/images/stacked-waves-haikei.svg')",
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
                  <motion.div
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
                          delay: 0.1,
                          type: "tween",
                          duration: 2,
                        },
                      },
                    }}
                  >
                    <h1 className="tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-200 to-teal-200 text-5xl">
                      Adam Hunter
                    </h1>
                  </motion.div>

                  <div className="flex justify-center">
                    <Image
                      src="/images/adamlaptop.png"
                      width={220}
                      height={220}
                      alt="adam laptop"
                      blurDataURL="/images/adamlaptop.png"
                      placeholder="blur"
                    />
                  </div>

                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.5,
                        opacity: 1,
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0,
                          type: "tween",
                          duration: 1,
                        },
                      },
                    }}
                  >
                    <div className="font-code text-2xl text-gray-300">
                      <TypeAnimation
                        cursor={true}
                        sequence={[
                          // 'front-end developer',
                          // 3000,
                          // 'back-end developer',
                          // 3000,
                          "full-stack developer",
                          // 3000,
                        ]}
                        wrapper="h2"
                        repeat={1}
                      />
                    </div>
                  </motion.div>

                  <motion.div
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
                          delay: 0.2,
                          type: "tween",
                          duration: 2.5,
                        },
                      },
                    }}
                  >
                    <p className="pt-10 text-3xl md:text-5xl lg:text-5xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-teal-100 to-teal-400 sm:text-4xl">
                      where creativity converges with engineering
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          ></div>
        </div>

        <div className="pb-2 bg-gradient-to-b from-black via-indigo-900 to-cyan-900 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                  <div className="space-y-5 sm:space-y-4">
                    <motion.div
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
                            delay: 2.25,
                            type: "tween",
                            duration: 1,
                          },
                        },
                      }}
                    >
                      <p className="relative lg:-mt-16 text-4xl tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-teal-400 sm:text-4xl">
                        Hi, I&apos;m Adam, a developer from New York City. I
                        love using cutting edge technologies to bring ideas to
                        life.
                      </p>
                      <div className="pt-5">
                        <Image
                          className="object-cover w-44 lg:w-82 bg-white/10 shadow-lg rounded-full"
                          src="/images/adamhi.png"
                          width={175}
                          height={175}
                          alt="adam hi"
                          blurDataURL="/images/adamhi.png"
                          placeholder="blur"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto pb-10 px-5 md:px-12 lg:px-44">
            <Subscribe />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
