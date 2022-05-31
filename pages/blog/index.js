import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/Head'
import Link from 'next/link'
// import SideBar from '../components/SideBar'
import NavBar from '../../components/NavBar'

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


    // holy shit, this standard react method only works on the client side like a CRA app, meaning SEO is out the window... fuck...
    // https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
    // getServerSideProps() will be async function defined below main function
    // then the props from getServerSideProps() are passed as arg into main function
    // ok so no useState or useEffect... but that method is probably still good for testing

    const posts = props.posts

    console.log(posts)

  return (
    <div>
        <Head>
            <title>Adam Hunter</title>
            <meta name="description" content="This is probably going to be the new blog for Adam Hunter.  The blog is mostly about coding and programming technologies using both Python and JavaScript with a heavy emphasis on React.  This blog is a Next.js app powered by Strapi CMS, hosted on Heroku and uses a PostgreSQL database." />
            <link rel="icon" href="/favicon.ico" />
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

            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-black h-1/3 sm:h-2/3" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-indigo-900 sm:text-4xl">From the blog</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        writings and musings
                        </p>
                    </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">


                    {posts.slice(0).reverse().map((post) => (

                    <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        {/* <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src="/images/adammindblown.png" alt="" />
                        </div> */}
                        
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={post.attributes.Header.data.attributes.url} alt="" />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1 cursor-pointer">
                                <Link href={`/blog/${post.id}`}>
                                <a href={post.href} className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900">{post.attributes.Title}</p>
                                <p className="mt-3 text-base text-gray-500">{post.attributes.Description}</p>
                                </a>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center">
                                
                                {/* ADAM PROFILE PIC */}
                                {/* <div className="flex-shrink-0">
                                    <span className="sr-only">Adam</span>
                                    <img className="h-10 w-10 rounded-full" src="/images/adamhi.png" alt="" />
                                </div> */}
                                <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                    Adam
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    ))}
                </div>
                </div>
            </div>


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
    // const API_URL = "https://adam-blog-backend-strapi.herokuapp.com/api/blogs"
    const API_URL = "https://adam-blog-backend-strapi.herokuapp.com/api/blogs?populate=*"
    const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN
    const response = await axios.get(API_URL, {
        headers: {
        'Authorization': `bearer ${API_TOKEN}`
        }
    })
    
    return {
        props: {
            posts: response.data.data
        },
    }
}

