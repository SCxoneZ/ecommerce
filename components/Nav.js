import Link from 'next/link';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  width: 100%;
  height: 50px;
  color: #4f67ff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  top: 0;
  border-bottom: 1px solid black;
  margin-bottom: 50px;
`;

const Title = styled.p`
  letter-spacing: 5px;
  color: #6c88f3;
  font-weight: bold;
  cursor: pointer;
`;
export function Nav(){
  return (
  
  <NavWrapper>
    <Link href="/" passhref>
      <Title>Tokopedia</Title>
    </Link>
  </NavWrapper>
  
  );
}