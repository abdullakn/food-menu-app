import React from 'react'
import '../App.scss'

function AddToCart(props) {

    


    const addToCartItems=props.addToCart.map((item)=>{

        return(
            <div>
            
                <img src={item.img} alt="" />
                 <h6>{item.title}</h6>
            </div>

        )
    })
    
    return (
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-item">
                <h6>Your Cart</h6>
            
               {addToCartItems}
            </div>
        </div>
    )
}

export default AddToCart
