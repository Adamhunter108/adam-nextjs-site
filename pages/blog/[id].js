import React from 'react'
import { useRouter } from "next/router"
import axios from 'axios'
import MarkdownIt from 'markdown-it'
// import SideBar from '../../components/SideBar'
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

    console.log(post.Header.data.attributes.url)

    return(
        <div>

            <Head>
                <title>{post.Title}</title>
                <meta name="description" content={post.Description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <SideBar /> */}

            <main>

                {/* <h1 className="pl-3 pt-5 text-3xl">Yo, this is post {routerID}</h1> */}

                <img className="h-48 w-full object-cover" src={post.Header.data.attributes.url} alt="header" />

                <p className="pl-3 pt-5 text-xl">{post.Title}</p>
                {/* <p className="pl-3 pt-5 text-l">{post.Body}</p> */}

                <div className="pl-3 pt-5 text-l">
                    <section dangerouslySetInnerHTML={{ __html: BodyHtml }}></section>
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