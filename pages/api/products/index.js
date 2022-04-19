import data from '../../../data/product.json';

export default async function handler(req, res) {

  if (req.method !== "GET") {
    res.status(405).json({
      code: 405,
      status: "error",
      result: "Method not allowed"
    });
  }
  
  if(req.query.limit){
    if (req.query.limit <= data.length) {
    let limitedData = [];
    
    for(let i = 0; i < req.query.limit; i++){
      limitedData.push(data[i]);
    }
    
    res.status(200).json({
      code: 200,
      status: "OK",
      result: limitedData
    });
  }else{
    res.status(404).json({
      code: 404,
      status: "erorr",
      result: "Maximum limit has been reached"
    });
  }
  }else{
    res.status(200).json({
      code: 200,
      status: "OK",
      result: data
    });
  }



}