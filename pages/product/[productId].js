import {
  useRouter
} from 'next/router';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url'
import {
  DetailProduct
} from '../../components/DetailProduct';

export default function DefailProduct( {
  data
}) {
  return (
    <>
    <DetailProduct product={data} /> < />
  );
}


  export async function getServerSideProps(context) {
    const result = await axios.get(`http://localhost:3000/api/products/${context.params.productId}`);
    const data = result.data.result[0];
    return {
      props: {
        data
      }
    };
  }