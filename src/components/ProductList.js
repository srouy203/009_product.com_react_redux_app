import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../redux/action/ProductAction';
import ProductComponent from './ProductComponent';

const ProductList = () => {
    const product = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchingData = async () => {
        const respone = await axios
            .get('https://fakestoreapi.com/products')
            .catch(err=>{
                console.log(err.massage);
            })
            dispatch(setData(respone.data))
    }
    

    useEffect(()=>{
        fetchingData();
    },[])

    console.log(product);


  return (
    <div className="container">
        <div className='productList row'>
            <ProductComponent/>
        </div>
    </div>
    
  )
}

export default ProductList
