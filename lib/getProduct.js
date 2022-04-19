import axios from 'axios';

export default function getProduct(limit) {
  let result;
  fetch(`http://localhost:3000/api/products?limit=5`)
  .then(res => res.json())
  .then(data => {
    console.log(data.result);
    result = data.result;
  });
  return result;
}