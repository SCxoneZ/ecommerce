import styled from 'styled-components';

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export function ProductCard(){
  return (
  
  <CardsWrapper>
    <p>Hello 1</p>
    <p>Hello 2</p>
    <p>Hello 3</p>
  </CardsWrapper>
  
  );
}