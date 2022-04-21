import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
//import data from '../data/product.json';
import styles from '../styles/Home.module.css'
import axios from "axios";
import { ProductCard, Card } from '../components/ProductCard.js';
import { useState } from 'react';
import products from '../data/product.json';
import { ShowMore } from '../components/Buttons.js';
import absoluteUrl from 'next-absolute-url'


export default function Home({ data }){
const maxData = data.length;
const everyIterable = 8;
const [ limit, setLimit ] = useState(everyIterable);
const [ iterable, setIterable ] = useState(1);
let limitedProducts = [];

// limiting data
for(let i = 0; i < limit; i++){
  limitedProducts.push(data[i]);
}

return (
  
  <>
  
  <Head>
    <title>Toko Abal Abal</title>
  </Head>
  
  <ProductCard dataProduct={limitedProducts}/>
  <ShowMore onClick={(e) => {
    if(limit < maxData && (maxData-limit) > everyIterable ){
      setLimit(limit+everyIterable);
      setIterable(iterable+1);
    }else if(limit == maxData){
      e.target.innerHTML = 'Product Sudah Habis';
      e.target.style.backgroundColor = 'red';
    }else{
      setLimit(limit + (maxData-limit));
    }
  }}>Show More</ShowMore>
  
  </>
  
  );
}

export async function getStaticProps(context){
  const result = await axios.get(`http://localhost:3000/api/products/`);
  const data = result.data.result;
  return {
    props: {
      data
    }
  };
}