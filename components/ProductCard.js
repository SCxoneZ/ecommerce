import { useEffect } from "react";
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const CardsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const Card = styled.div`

  width: 90%;
  height: 400px;
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
  margin: 20px auto;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &:hover{
    transform: scale(1.05);
  }
  
`;

export const CategoryText = styled.div`
  font-family: 'Poppins';
  position: absolute;
  right: 0;
  right: 10px;
  font-size: 15px;
`;

export const ProductTitle = styled.div`
  font-family: 'Poppins';
  margin-top: 30px;
  font-size: 17.5px;
  font-weight: bold;
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-bottom: 1.5px solid black;
  /*border-radius: 5px 5px 2.5px 2.5px;*/
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

export const ProductPrice = styled.div`
  
  font-family: 'Poppins';
  font-size: 17.5px;
  font-weight: bold;
  margin-top: 10px;
  &::before{
    content: '$';
  }
`;

export const DescriptionText = styled.p`
  font-family: 'Poppins';
  font-size: 15px;
`;

export function ProductCard({dataProduct}){
  
  const maxTitleLength = 28;
  const maxDescriptionLength = 50;
  
  return (
  
  <CardsWrapper>
    {dataProduct.map(product => {
      return (
      <Link href={`product/${product.id}`} key={product.id} passhref>
        <Card>
          <ThumbnailWrapper>
            <Image src={product.image} width="150" height="180" alt={product.title}/>
          </ThumbnailWrapper>
          <DetailsWrapper>
          
          <CategoryText>
            {product.category}
          </CategoryText>
          
          <ProductTitle>
            {product.title.length > maxTitleLength ? product.title.substring(0, maxTitleLength)+"..." : product.title}
          </ProductTitle>
          
          <ProductPrice>
          {product.price}
          </ProductPrice>
          
          <DescriptionText>
            {product.description.length > maxDescriptionLength ? product.description.substring(0, maxDescriptionLength)+"..." : product.description}
          </DescriptionText>
          
          </DetailsWrapper>
        </Card>
      </Link>
      );
    })}
  </CardsWrapper>
  
  );
}
