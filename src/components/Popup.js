import React,{useState,useContext} from 'react'
import {AllMenuContext} from './context'


import '../App.scss'

function Popup(props) {
    const [popupDish,setPopupDish]=useState()
    console.log("special in popup",props.specialMenu)


    const allMenu=useContext(AllMenuContext)
  

    const closePopup=()=>{
        props.setShowPopup(false)

    }


    const clickedDish=allMenu.filter((item)=>{    
        console.log(item)    
        return item.strMeal==props.clickedMenu
    }).map((item)=>{
        return (
           <div className="popup-content-inner">
               <div className="popup-header">
                   <img src={item.strMealThumb} alt="" />
                   <h5 className="popup-header-category">{item.strCategory}</h5>
               </div>
               {<h2>{item.strMeal}</h2> }
               <p>{item.strInstructions}</p>
               <ul className="dish-ingredients flex" style={{color:"black"}}>
                   <li >{item.strIngredient1}</li>
                   <li >{item.strIngredient2}</li>
                   <li >{item.strIngredient3}</li>
                   <li >{item.strIngredient4}</li>
               </ul>
               <button onClick={()=>{props.addToCartHandler(item.strMealThumb,item.strMeal)}}>Order Now</button>
                <h5 onClick={closePopup} className="popup-close">Close</h5>
           </div>
        )
    })
    // setPopupDish(clickedDish)
    console.log("clicked",clickedDish)

    return (
        <div className="popup">
            <div className="popup-content">
                
                <h2>{clickedDish}</h2>
               
            </div>
    
            
        </div>
    )
}

export default Popup
