import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { Nav } from '../components/Nav.js';
import { Profile } from '../components/Profile.js';

export default function Home(){
  return (
  
  <>
  
  <Head>
    <title>Instagram 2.0</title>
    <link rel="stylesheet" src="../styles/globals.css"/>
  </Head>
  <Nav>
  <Link href="test.js">Test</Link>
  <Link href="test.js">Test 2</Link>
  </Nav>
  <Profile/>
  
  </>
  
  );
}