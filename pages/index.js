import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '../components/Nav.js';
import { ProductCard } from '../components/ProductCard.js';


export default function Home(){
  return (
  
  <>
  
  <Head>
    <title>Instagram 2.0</title>
    <link rel="stylesheet" src="../styles/globals.css"/>
  </Head>
  <img style={{
    position: 'absolute',
    right: '0',
    top: '300px',
  }} className="particle" alt="gatau" src="/hero-full.png" width="400" height="400"/>
  <Nav>
    <p>Tokepekita</p>
  </Nav>
  
  <ProductCard/>
  
  </>
  
  );
}