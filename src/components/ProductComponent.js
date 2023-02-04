import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './ProductComponent.css'
const ProductComponent = () => {
    const product = useSelector(state=>state.allProducts.products)

    
  return (
    <>
        {
            product.map(products => {
                const {id, title, price, image} = products;
                return(
                    <div className="col-xl-3 productItem" key={id}>
                        <Link to={`/productdetail/${id}`}>
                            <img src={image} alt="" />
                            <div className="productTitle">
                                <p>{title}</p>
                            </div>
                            <div className="productPrice">
                                <p>Price: ${price}</p>
                            </div>
                            
                        </Link>
                    </div>
                )
            })
        }
    </>
  )
}

export default ProductComponent
