import { useEffect } from "react";

import styled from 'styled-components';

export const CardsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 100%;
  height: 400px;
  background: rgba( 255, 255, 255, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
  margin: 20px 0;
  box-sizing: border-box;
  padding: 10px;
`;

export function ProductCard({dataProduct}){
  
  
  return (
  
  <CardsWrapper>
    {dataProduct.map(product => {
      return (
        <Card>{product.title}</Card>
      );
    })}
  </CardsWrapper>
  
  );
}
