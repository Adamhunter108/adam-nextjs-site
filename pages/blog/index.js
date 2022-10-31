// import React, { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import SideBar from '../components/SideBar'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { motion } from "framer-motion"

export default function Blog(props) {

    // const API_URL = "https://adam-blog-backend-strapi.herokuapp.com/api/blogs"
    // // throw on ?populate=*' if things get weird

    // const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN
    

    // useEffect(() => {
    //     getBlogData()
    // }, [])

    // const [blogData, setBlogData] = useState([])
    // // this is for calling individual blog posts; for example /api/blogs/1

    // // this will be to try and pull all posts in at once
    // const [posts, setPosts] = useState([])

    // const getBlogData = async () => {
    //     const response = await axios.get(API_URL, {
    //         headers: {
    //         'Authorization': `bearer ${API_TOKEN}`
    //         }
    //     })
    //     .then(function (response) {
    //     // console.log(response)
    //     // console.log(response.data)
    //     console.log(response.data.data)
    //     setPosts(response.data.data)

    //     console.log(response.data.data.attributes)
    //     setBlogData(response.data.data.attributes)
    //     })
    //     .catch(function (error) {
    //         console.log('🚨 API error')
    //     })
    // }


    // this standard react method only works on the client side like a CRA app, meaning SEO is out the window...
    // https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
    // getServerSideProps() will be async function defined below main function
    // then the props from getServerSideProps() are passed as arg into main function

    const posts = props.posts

    console.log(posts)

  return (
    <div>
        <Head>
            <title>Adam Hunter Blog</title>
            <meta name="description" content="This is probably going to be the new blog for Adam Hunter.  The blog is mostly about coding and programming technologies using both Python and JavaScript with a heavy emphasis on React.  This blog is a Next.js app powered by Strapi CMS, hosted on Heroku and uses a PostgreSQL database." />
            <link rel="icon" href="/adampensive.ico" />
        </Head>

        {/* <SideBar /> */}
        <NavBar />
        {/* <div className="pl-3 pt-20"> */}
            {/* <h1 className="text-4xl">{blogData.Title}</h1>
            <h2 className="text-3xl">{blogData.Description}</h2>
            <p>{blogData.Body}</p> */}

            {/* this works 😎 */}
            {/* {posts.map((post) => (
                <div key={post.id} className="">
                    <h1 className='text-2xl'>{post.attributes.Title}</h1>
                    <h2 className='text-xl'>{post.attributes.Description}</h2>
                </div>
                ))} */}

            <div className="relative bg-gradient-to-t from-cyan-900 via-indigo-900 to-black pt-20 pb-20 px-4 sm:px-6 lg:pt-15 lg:pb-28 lg:px-8">
                {/* <div className="absolute inset-0">
                    <div className="bg-gradient-to-t from-cyan-900 via-indigo-900 to-black h-1/3 sm:h-2/3" />
                </div> */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-600 to-teal-400 sm:text-4xl">blog</h1>
                        <h2 className="mt-3 max-w-2xl mx-auto text-xl text-transparent bg-clip-text bg-gradient-to-t from-indigo-200 to-teal-200 sm:mt-4">
                        writings and musings
                        </h2>
                    </div>

                
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">


                    {posts.slice(0).reverse().map((post) => (


                    <motion.div key={post.id} className="flex flex-col rounded-xl shadow-lg overflow-hidden" initial="hidden" animate="visible" variants={{
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
                            duration: 1
                        }
                        }
                    }}>
                    {/* <div key={post.id} className="flex flex-col rounded-xl shadow-lg overflow-hidden"> */}
                        {/* <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src="/images/adammindblown.png" alt="" />
                        </div> */}
                        
                        <div className="flex-shrink-0 cursor-pointer">
                            {/* <img className="h-48 w-full object-cover" src={post.attributes.Header.data.attributes.url} alt="" /> */}
                            {/* <img className="h-48 w-full object-cover" src={post.attributes.Header.data.attributes.formats.small.url} alt="" /> */}
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link href={`/blog/${post.id}`} legacyBehavior>
                                    <a>
                                        <Image
                                            className="h-48 w-full object-cover"
                                            src={post.attributes.Header.data.attributes.url}
                                            width={600}
                                            height={300}
                                            // layout="fill"
                                            blurDataURL={post.attributes.Header.data.attributes.url}
                                            placeholder="blur"
                                            alt="blog post header"
                                        />
                                    </a>
                                </Link>
                            </motion.div>
                        </div>
                        <div className="flex-1 bg-white backdrop-blur-lg p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="cursor-pointer">
                                    <Link href={`/blog/${post.id}`} legacyBehavior>
                                        <a>
                                            <motion.div whileHover={{ scale: 1.05 }}>
                                                <p className="text-xl font-semibold text-gray-900 hover:text-cyan-400">{post.attributes.Title}</p>
                                            </motion.div>
                                        </a>
                                    </Link>
                                </div>
                                <p className="mt-3 text-base text-gray-500">{post.attributes.Description}</p>
                            </div>
                            <div className="mt-6 flex items-center">
                                
                                {/* ADAM PROFILE PIC */}
                                <div className="flex-shrink-0">
                                    <span className="sr-only">Adam</span>
                                    <Image
                                        className="h-20 w-20 rounded-full"
                                        src="/images/adampensive.png"
                                        width={75}
                                        height={75}
                                        alt="adam pensive"
                                    />
                                </div>
                                <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                    Adam
                                </p>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                    </motion.div>

                    ))}
                </div>
                
                </div>
            </div>

        <Footer />
    </div>
  )
}

// be sure to add props as arg in main function
// export async function getServerSideProps() {
//     const API_URL = "https://adam-blog-backend-strapi.herokuapp.com/api/blogs"
//     const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN
//     const response = await axios.get(API_URL, {
//         headers: {
//         'Authorization': `bearer ${API_TOKEN}`
//         }
//     })
    
//     return {
//         props: {
//             posts: response.data.data
//         },
//     }
// }

// this does the same thing but will render and cache this page at build time instead of at browser request for faster load time
export async function getStaticProps() {
    const API_URL = "https://adam-blog-railway-strapi.up.railway.app/api/blogs?populate=*"
    const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN_RAILWAY
    const response = await axios.get(API_URL, {
        headers: {
        'Authorization': `bearer ${API_TOKEN}`
        }
    })
    
    return {
        props: {
            posts: response.data.data
        },

        revalidate: 60,
    }
}

