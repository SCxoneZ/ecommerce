import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import data from '../data/product.json';
import styles from '../styles/Home.module.css'
import { Nav } from '../components/Nav.js';
import { ProductCard, Card } from '../components/ProductCard.js';


export default function Home(){
  return (
  
  <>
  
  <Head>
    <title>Instagram 2.0</title>
  </Head>
  <div className={styles.particle}>
    <Image className={styles.particle} alt="gatau" src="/hero-full.png" width="600" height="600"/>
  </div>
  <Nav>
    <p>Tokepekita</p>
  </Nav>
  
  <ProductCard dataProduct={data}/>
  
  </>
  
  );
}


/*export function getStaticProps(){
  return {
    props: {
      productData: data
    }
  };
}*/