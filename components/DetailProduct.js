import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import {BuyButton, BackButton} from './Buttons.js'

const ThumbnailWrapper = styled.div`
@media (max-width: 992px) {
width: 50%;
}
margin: 0 auto;
position: relative;
z-index: 999;
border-radius: 10px
box-shadow: 0 0 8px rgba(0,0,0,.3);
`;

const Image = styled.img`
width: 100%;
border-radius: 10px;
box-shadow: 0 0 8px rgba(0,0,0,.15);
`;

const DetailWrapper = styled.div`
  width: 85%;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 11px );
  -webkit-backdrop-filter: blur( 11px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px;
  position: relative;
  font-family: 'roboto', arial, sans-serif;
`;

const CategoryText = styled.p`
  font-family: 'roboto', arial, sans-serif;
  color: #566FFF;
  margin: 0;
  padding: 0;
  text-transforn: uppercase;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1.5px
`;

const ProductName = styled.div`
  font-family: 'roboto', arial, sans-serif;
  color: black;
  font-size: 20px;
  margin: 10px 0;
`;

const Description = styled.p`
  color: #183C86;
  width: 100%;
  height: 100px;
  overflow: scroll;
  
  &::before{
    content: 'Description:';
    display: block;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
`;

const RatingWrapper = styled.div`
  font-family: 'roboto', arial, sans-serif;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 3px;
  margin-right: 3px;
`;

const Price = styled.div`
  font-family: 'poppins', arial, sans-serif;
  font-weight: 800;
  font-size: 25px;
  &::before{
    content: '$';
  }
`;

export function DetailProduct( {
  product
}) {
  const router = useRouter();
  
  return (

    <>
    <Head>
      <title>Product Detail</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
    </Head>
    <ThumbnailWrapper>
      <Image src={product.image} alt="produk" />
    </ThumbnailWrapper>
    <DetailWrapper>
    
      <CategoryText>
        {product.category.toUpperCase()}
      </CategoryText>
      
      <RatingWrapper>
        <Rating name="read-only" value={Math.round(product.rating.rate)} readOnly/>
      </RatingWrapper>
      
      <ProductName>
        {product.title}
      </ProductName>
      
      <Description>
        {product.description}
      </Description>
      
      <Price>
        {product.price}
      </Price>
      
      <BackButton onClick={() => {
        // redirect to root
        router.push("/");
      }}>Back</BackButton>
      <BuyButton>
        BUY!
      </BuyButton>
      
    </DetailWrapper>
    </>
    
  );
}