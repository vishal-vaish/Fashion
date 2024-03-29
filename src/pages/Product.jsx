import "./Product.css";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import fetchFromApi from "../utils/fetchFromApi.js";
import ProductView from "../component/product/ProductView.jsx";


const Product = () => {
 const [productData, setProductData]= useState([]);
 const { productId } = useParams();

 useEffect(() => {
   const getData = async () => {
     let data = await fetchFromApi(`products/${productId}`);
     setProductData(data);
   }
   getData();
 }, [productId]);

  return(
    <main className="product-view_main container">
      <ProductView productData={productData}/>
    </main>
  )
}

export default Product;