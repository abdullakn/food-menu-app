import React from 'react'
import '../App.scss'
import CardItem from './CardItem'

function SpecialDish(prop) {

    const specialMenuCount=8

    const specialMenu=prop.menu.map((item,index)=>{
        if (index<specialMenuCount){
        return(       
            <CardItem item={item}/>
                       
                )
                }
             })
    return (
        <section className="special-dishes">
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
