import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// prevent Font Awesome from adding the CSS automatically since it's being imported above
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
