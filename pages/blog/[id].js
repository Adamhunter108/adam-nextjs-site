import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import MarkdownIt from "markdown-it";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function PostPage(props) {
  const post = props.post;
  const router = useRouter();
  const currentID = Number(router.query.id);
  const nextPostID = currentID - 1;
  const prevPostID = currentID + 1;
  const totalPostCount = props.totalCount;

  // to allow html tags in markdown source
  const md = new MarkdownIt({
    html: true,
  });
  const BodyHtml = md.render(post.Body);

  return (
    <div className="bg-gradient-to-t from-indigo-900 via-black to-indigo-900">
      <Head>
        <title>{post.Title}</title>
        <meta name="description" content={post.Description} />
        <link rel="icon" href="/adampensive.ico" />
      </Head>

      <SideBar />

      <header>
        <div className="relative py-32 lg:py-72 flex content-center items-center justify-center">
          <div
            className="absolute top-0 w-full h-full bg-center bg-auto lg:bg-cover bg-fixed"
            style={{
              backgroundImage: `url(${post.Header.data.attributes.url})`,
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
        <div className="pt-2 lg:pt-5 pl-2 lg:pl-6">
          <Link href="/blog" legacyBehavior>
            <a>
              <button className="lg:fixed lg:z-50 relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <FontAwesomeIcon
                    style={{ fontSize: "25px" }}
                    icon={faBackward}
                  />{" "}
                  <span className="pl-2">Back</span>
                </span>
              </button>
            </a>
          </Link>
        </div>

        <h1 className="pl-3 pt-8 text-gray-100 text-bold text-5xl text-center">
          {post.Title}
        </h1>

        <h2 className="pl-3 pt-5 pb-5 text-gray-100 text-2xl text-center">
          {post.Description}
        </h2>

        {/* 
      /////////////////////////////////////////////////////////////
      previous and next blog post buttons
      /////////////////////////////////////////////////////////////
      */}
        <div className="flex justify-evenly mb-4">
          {currentID !== totalPostCount && (
            <Link href={`/blog/${prevPostID}`} legacyBehavior>
              <a>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <FontAwesomeIcon
                      style={{ fontSize: "25px" }}
                      icon={faArrowLeftLong}
                    />{" "}
                    <span className="pl-2">Prev</span>
                  </span>
                </button>
              </a>
            </Link>
          )}

          {currentID !== 1 && (
            <Link href={`/blog/${nextPostID}`} legacyBehavior>
              <a>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <span className="pr-2">Next</span>
                    <FontAwesomeIcon
                      style={{ fontSize: "25px" }}
                      icon={faArrowRightLong}
                    />{" "}
                  </span>
                </button>
              </a>
            </Link>
          )}
        </div>

        <div className="flex flex-col rounded-xl shadow-lg overflow-hidden">
          <div className="flex-1 bg-black/60 backdrop-blur-md p-6 px-10 flex flex-col justify-between">
            <div className="mx-2 lg:mx-48 pt-5 text-md text-gray-200">
              <section dangerouslySetInnerHTML={{ __html: BodyHtml }}></section>
            </div>

            <div className="mt-6 flex items-center">
              {/* ADAM PROFILE PIC */}
              <div className="flex-shrink-0 pl-40">
                <span className="sr-only">Adam</span>
                <Image
                  className="h-20 w-20 rounded-full"
                  src="/images/adamhi.png"
                  width={75}
                  height={75}
                  alt="adam hi"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-200">Adam</p>
              </div>
            </div>

            <div className="lg:hidden pt-2 pb-5 lg:pl-5">
              <Link href="/blog" legacyBehavior>
                <a>
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faBackward}
                      />{" "}
                      <span className="pl-2">Back</span>
                    </span>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 
      /////////////////////////////////////////////////////////////
      previous and next blog post buttons
      /////////////////////////////////////////////////////////////
      */}
      <div className="flex justify-evenly mt-5 mb-4">
        {currentID !== totalPostCount && (
          <Link href={`/blog/${prevPostID}`} legacyBehavior>
            <a>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <FontAwesomeIcon
                    style={{ fontSize: "25px" }}
                    icon={faArrowLeftLong}
                  />{" "}
                  <span className="pl-2">Prev</span>
                </span>
              </button>
            </a>
          </Link>
        )}

        {currentID !== 1 && (
          <Link href={`/blog/${nextPostID}`} legacyBehavior>
            <a>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <span className="pr-2">Next</span>
                  <FontAwesomeIcon
                    style={{ fontSize: "25px" }}
                    icon={faArrowRightLong}
                  />{" "}
                </span>
              </button>
            </a>
          </Link>
        )}
      </div>

      <Footer />
    </div>
  );
}

// static site generation (or serverside) needs to get data before page loads
export async function getStaticProps({ params }) {
  const API_URL = `https://strapi-production-b724.up.railway.app/api/blogs/${params.id}?populate=*`;
  const ALL_POSTS_URL =
    "https://strapi-production-b724.up.railway.app/api/blogs?populate=*";
  const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN_RAILWAY;

  const postResponse = await axios.get(API_URL, {
    headers: {
      Authorization: `bearer ${API_TOKEN}`,
    },
  });

  const allPostsResponse = await axios.get(ALL_POSTS_URL, {
    headers: {
      Authorization: `bearer ${API_TOKEN}`,
    },
  });

  const totalCount = allPostsResponse.data.data.length;

  return {
    props: {
      post: postResponse.data.data.attributes,
      totalCount: totalCount,
    },

    revalidate: 60,
  };
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export async function getStaticPaths() {
  const API_URL = "https://strapi-production-b724.up.railway.app/api/blogs";
  const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN_RAILWAY;
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `bearer ${API_TOKEN}`,
    },
  });

  const paths = response.data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
