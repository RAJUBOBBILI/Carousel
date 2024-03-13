import React from 'react'
import './Product.css'


const Products = (props) => {

    return (
        <div>
            <div className='card'>
                <img className="product--image" src={props.url} alt="product image" />
                <p className='offer'><span>{props.offer}</span> Limited time deal</p>
                <h2>{props.name}</h2>
                <p className="price">{props.price}<span className='orprice'> {props.orprice}</span></p>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default Products