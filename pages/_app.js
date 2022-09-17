import Script from 'next/script';
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// prevent Font Awesome from adding the CSS automatically since it's being imported above
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script 
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="my-script"
        strategy='lazyOnload'
      >
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`
        }
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
