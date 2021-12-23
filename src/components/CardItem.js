import React from 'react'
import '../App.scss'


function CardItem(props) {


    const showPopupHandler=(clickedMenu)=>{
        props.setShowPopup(true)
        props.setClickedMenu(clickedMenu)
        
    }


    return (
        
             <li>
                 <a href="javaScript:;" onClick={()=>{showPopupHandler(props.item.strMeal)}}>
                    <img src={props.item.strMealThumb} className="br-10" alt="" />
                    <h5>{props.item.strMeal}</h5>

                    </a>
               </li>       
    )
}

export default CardItem
