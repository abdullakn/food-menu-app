import React from 'react'
import '../App.scss'


function CardItem(props) {
    return (
        
             <li>
                    <img src={props.item.strMealThumb} className="br-10" alt="" />
                    <h5>{props.item.strMeal}</h5>
               </li>       
    )
}

export default CardItem
