import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adam's new site</title>
        <meta name="description" content="Adam's new Next.js site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>

        <h1 className="pl-5 pt-20 text-4xl text-semibold">Home</h1>

      </main>

      {/* <footer className={styles.footer}>
        Made with ♥️ in NYC
      </footer> */}
    </div>
  )
}
