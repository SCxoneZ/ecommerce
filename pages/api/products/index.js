import axios from "axios";
import data from '../../../data/product.json';

export default async function handler(req, res) {

  if (req.method !== "GET") {
    res.status(405).json({
      code: 405,
      status: "error",
      result: "Method not allowed"
    });
  }


  res.status(200).json({
    code: 200,
    status: "OK",
    result: data
  });

}