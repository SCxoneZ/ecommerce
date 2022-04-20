import '../styles/globals.css'
import { Nav } from '../components/Nav.js';
import styles from '../styles/Home.module.css'
import BgEffect from '../components/BgEffect.js'
import Image from 'next/image';


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Nav/>
    <div className={styles.particle}>
      <Image alt="gatau" src="/hero-full.png" width="600" height="600"/>
    </div>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
