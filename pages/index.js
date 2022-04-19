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
import products from '../data/product.json';
import Button from '@mui/material/Button';

const ShowMore = styled.button`
  display: block;
  margin: 20px auto;
  border: none;
  autline: none;
  width: 150px;
  height: 40px;
  background-color: #2e85ff;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 0px 0px 26px 0px rgba(0,0,0,0.37);
  transition: .3s;
  position: relative;
  z-index: 1;
  
  &:hover{
    border-radius: 20px;
  }
`;

export default function Home(){
const maxData = data.length;
const [ limit, setLimit ] = useState(5);
let limitedProducts = [];

// limiting data
for(let i = 0; i < limit; i++){
  limitedProducts.push(data[i]);
}

return (
  
  <>
  
  <Head>
    <title>Tokopedia Abal Abal</title>
  </Head>
  <div className={styles.particle}>
    <Image alt="gatau" src="/hero-full.png" width="600" height="600"/>
  </div>
  <Nav/>
  
  <ProductCard dataProduct={limitedProducts}/>
  <ShowMore onClick={(e) => {
    if(limit < maxData){
      setLimit(limit+5);
    }else{
      e.target.innerHTML = 'Product Sudah Habis';
      e.target.style.backgroundColor = 'red';
    }
  }}>Show More</ShowMore>
  
  </>
  
  );
}

