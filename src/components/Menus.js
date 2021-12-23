import React from 'react'
import{useState,useEffect} from 'react';
import '../App.scss'
import SpecialDish from './SpecialDish';
import Hero from './Hero';
import FilteredDishes from './FilteredDishes';

import { AllMenus } from './context';


// export const AllMenuContext=React.createContext()


function Menus() {
    
  

    //   let menuImages=menu.map((item)=>{
    //       return(       
    //           <img src={item.strMealThumb} alt="" />
    //       )
    //   })
    //   console.log("dddd",menuImages)
    return (
        <div className="menu">
           <Hero/>

            <AllMenus>

               <SpecialDish />
               <FilteredDishes/>

            </AllMenus>
            
            
        </div>
    )
}

export default Menus
