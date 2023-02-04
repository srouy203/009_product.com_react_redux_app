import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectData } from '../redux/action/ProductAction';
import './ProductDetail.css';
const ProductDetail = () => {
  const { productID } = useParams();
  const [data, setData] = useState([])
  const product = useSelector(state => state.allProducts.products);
  const dispatch =useDispatch();

  const fetchingData = async (id) => {
    const respone = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch(err=>{
        console.log(err.massage);
      })
    // dispatch(selectData(respone.data));
    setData(respone.data)
  }

  useEffect(()=>{
    if(productID && productID !== ""){
      fetchingData(productID);
    }
    
  },[])
  
  console.log(data)
  const {title, image, price, category, description} = data;

  return (
    <div className='container'>
      {
        data.length === 0 ? (<div>Loading...</div>) : (
          <div className="productdetial row">
            <div className="col-xl-4 product-img">
                <img src={image} alt="" />
            </div>
            <div className="col-xl-8 product-desc">
                <h2 className='title'>{title}</h2>
                <div className='price'>$ {price}</div>
                <div className='category'>{category}</div>
                <div className="description">{description}</div>
                <button className='addToBag btn btn-dark'>Add to bag</button>
            </div>
          </div>

        )
        
      }
    </div>
  )
}

export default ProductDetail
