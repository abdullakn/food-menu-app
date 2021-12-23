import React,{useState,useContext} from 'react'
import '../App.scss'
import CardItem from './CardItem'
import Popup from './Popup'
import {AllMenuContext} from './context'
import AddToCart from './AddToCart'

function SpecialDish(prop) {

    const [showPopup,setShowPopup]=useState(false)
    const [clickedMenu,setClickedMenu]=useState()

    const specialMenuCount=8


    //context consumes

    const allMenu=useContext(AllMenuContext)
    


    

    const specialMenu=allMenu.map((item,index)=>{
        if (index<specialMenuCount){
        return(       
            <CardItem setShowPopup={setShowPopup} setClickedMenu={setClickedMenu} item={item}/>
                       
                )
                }
             })
    return (
        <section className="special-dishes">
            <AddToCart/>
            {showPopup? <Popup clickedMenu={clickedMenu} setShowPopup={setShowPopup}/>:""}
           
            <div className="container">
                <div className="special-dishes-content text-center">
                    <h2>Our Special Dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, minima.</p>
                </div>
                <div className="special-dishes-list">
                    <ul className="flex flex-wrap gap-30">
                    {specialMenu}
                    </ul>
                   

                </div>
            </div>
        </section>
    )
}

export default SpecialDish
