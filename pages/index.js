import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import data from '../data/product.json';
import styles from '../styles/Home.module.css'
import axios from "axios";
import { Nav } from '../components/Nav.js';
import { ProductCard, Card } from '../components/ProductCard.js';
import { useState } from 'react';
import getProduct from '../lib/getProduct.js';

export default function Home({products}){
const [ limit, setLimit ] = useState(5);

console.log("ini products", products);
/*fetch(`http://localhost:3000/api/products?limit=5`)
.then(res => res.json())
.then(data => {
  console.log(data);
})*/
//console.log(products);
//console.log(products.then(res => res));
/*products.then(data => {
  console.log(data);
});*/

  return (
  
  <>
  
  <Head>
    <title>Instagram 2.0</title>
  </Head>
  <div className={styles.particle}>
    <Image alt="gatau" src="/hero-full.png" width="600" height="600"/>
  </div>
  <Nav>
    <p>Tokepekita</p>
  </Nav>
  
  <ProductCard dataProduct={products}/>
  
  </>
  
  );
}

async function getStaticProps(){
  const response = await axios.get(`/api/products`);
  
  return {
    props: {
      products: response.result
    }
  };
}