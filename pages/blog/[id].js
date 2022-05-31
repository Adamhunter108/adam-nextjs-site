import React from 'react'
import { useRouter } from "next/router"
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import SideBar from '../../components/SideBar'
import Head from 'next/head'


export default function PostPage(props) {
    const router = useRouter()

    // const routerID = router.query.id

    const post = props.post

    // const md = new MarkdownIt()
    // to allow html tags in markdown source
    const md = new MarkdownIt({
        html: true,
    })
    const BodyHtml = md.render(post.Body)

    // console.log(post.Header.data.attributes.url)

    return(
        <div className="bg-gradient-to-t from-indigo-900 via-black to-indigo-900">

            <Head>
                <title>{post.Title}</title>
                <meta name="description" content={post.Description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SideBar />

            <header>

                <div className="relative py-32 lg:py-72 flex content-center items-center justify-center">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-auto lg:bg-cover bg-fixed"
                        style={{
                        backgroundImage:
                            `url(${post.Header.data.attributes.url})`,
                        }}
                    >
                        <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-70 bg-black"
                        ></span>
                    </div>
                </div>

            </header>

            <main className="">

                <h1 className="pl-3 pt-8 text-gray-100 text-bold text-5xl text-center">{post.Title}</h1>

                <h2 className="pl-3 pt-5 pb-5 text-gray-100 text-2xl text-center">{post.Description}</h2>

                {/* <div className="mx-16 lg:mx-48 pt-5 text-md text-gray-100">
                    <section dangerouslySetInnerHTML={{ __html: BodyHtml }}></section>
                </div> */}

                <div className="flex flex-col rounded-xl shadow-lg overflow-hidden">
                    <div className="flex-1 bg-black/60 backdrop-blur-md p-6 px-10 flex flex-col justify-between">

                        <div className="mx-2 lg:mx-48 pt-5 text-md text-gray-200">
                            <section dangerouslySetInnerHTML={{ __html: BodyHtml }}></section>
                        </div>

                        <div className="mt-6 flex items-center">
                                
                        {/* ADAM PROFILE PIC */}
                        <div className="flex-shrink-0 pl-40">
                            <span className="sr-only">Adam</span>
                            <img className="h-20 w-20 rounded-full" src="/images/adamhi.png" alt="" />
                        </div>
                        <div className="ml-3">
                        <p className="text-sm font-medium text-gray-200">
                            Adam
                        </p>
                        </div>
                    </div>

                    </div>

                    

                </div>

            </main>

        </div>
    )
}


// static site generation (or serverside) needs to get data before page loads
export async function getStaticProps({params}) {
    const API_URL = `https://adam-blog-backend-strapi.herokuapp.com/api/blogs/${params.id}?populate=*`
    const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN
    const response = await axios.get(API_URL, {
        headers: {
        'Authorization': `bearer ${API_TOKEN}`
        }
    })
    
    return {
        props: {
            post: response.data.data.attributes
        },
    }
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export async function getStaticPaths() {
    const API_URL = "https://adam-blog-backend-strapi.herokuapp.com/api/blogs"
    const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN
    const response = await axios.get(API_URL, {
        headers: {
        'Authorization': `bearer ${API_TOKEN}`
        }
    })

    const paths = response.data.data.map((post) => {
        return {params: {id: post.id.toString()}}
    })
    
    return {
      paths,
      fallback: false
    };
  }