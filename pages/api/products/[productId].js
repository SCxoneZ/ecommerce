import data from "../../../data/product.json";

export default async function handler(req, res){
  
  const { productId } = req.query;
  
  if(req.method !== "GET"){
    return res.status(405).json({
      code: 405,
      status: "error",
      result: "Method not Allowed"
    });
  }
  
  const filteredProduct = data.filter(product => product.id == productId);
  
  if(filteredProduct.length > 0){
    return res.status(200).json({
      code: 200,
      status: "OK",
      result: filteredProduct
    });
  }else{
    return res.status(200).json({
      code: 404,
      status: "error",
      result: "Product Not Found"
    });
  }
  
  
}