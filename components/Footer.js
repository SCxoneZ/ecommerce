import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.div`
letter-spacing: 5px;
color: #6c88f3;
font-weight: bold;
cursor: pointer;
margin-bottom: 5px;
`;

const Fixed = styled.div`
width: 100%;
height: 100px;

background:
rgba( 255, 255, 255, 0.25 );
box-shadow:
0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter:
blur( 6.5px );
-webkit-backdrop-filter:
blur( 6.5px );
border-radius:
10px;
border:
1px solid rgba( 255, 255, 255, 0.18 );

margin-top: auto;
z-index: 999;
position: fixed;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


const Footer = styled.div`
width: 100%;
height: 100px;

background:
rgba( 255, 255, 255, 0.25 );
box-shadow:
0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter:
blur( 6.5px );
-webkit-backdrop-filter:
blur( 6.5px );
border-radius:
10px;
border:
1px solid rgba( 255, 255, 255, 0.18 );

z-index: 999;
margin-top: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


const FooterText = styled.div`
font-weight: bold;
font-size: 15px;
`;


export function DefaultFooter() {
  const emotes = ["♥️", "💙", "💯","👍", "🍑"];
  return (

    <Footer>
      <Link href="/">
      <Title>XONESTORE</Title>
      </Link>
      <FooterText>Made by Stevennius Chandra💙</FooterText>
    </Footer>

  );
}

export function FixedFooter() {
  return (

    <Fixed>
      <Link href="/">
      <Title>XONESTORE</Title>
      </Link>
      <FooterText>Made by Stevennius Chandra♥️</FooterText>
    </Fixed>

  );
}
