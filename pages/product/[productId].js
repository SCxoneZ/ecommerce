import { useRouter } from 'next/router';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url'


export default function DefailProduct({data}){
  return (
    <>
    <ul>
      <li>Title: {data.title}</li>
    </ul>
    </>
  );
}

export async function getServerSideProps(context){
  const { origin } = absoluteUrl(context.req)
  const result = await axios.get(`${origin}/api/products/${context.params.productId}`);
  const data = result.data.result[0];
  return {
    props: {
      data
    }
  };
}

