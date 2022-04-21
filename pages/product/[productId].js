import {
  useRouter
} from 'next/router';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url'
import {
  DetailProduct
} from '../../components/DetailProduct';
import {
  useEffect
} from 'react';
import styles from '../../styles/Home.module.css';

export default function DefailProduct( {
  data
}) {
  
  const notFound = (data == "Product Not Found");
  
    
  if(notFound){
    return (
      <div className={styles.notFound}>404 | Page Not Found</div>
    );
  }

  return(
    <>
    <DetailProduct product={data} /> < />
  );
}


  export async function getServerSideProps(context) {
    try {
      const result = await axios.get(`http://localhost:3000/api/products/${context.params.productId}`);
      const data = result.data.result[0];
      return {
        props: {
          data
        }
      };
    }catch(e) {
      return {
        props: {
          data: "Product Not Found"
        }
      };
    }
  }