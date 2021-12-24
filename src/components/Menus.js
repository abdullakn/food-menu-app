import React from 'react'
import '../App.scss'
import SpecialDish from './SpecialDish';
import Hero from './Hero';
import FilteredDishes from './FilteredDishes';

import { AllMenus } from './context';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Header from './Header';

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

            {/* <Router> */}
            <Header/>
             <Hero/>

            <AllMenus>

               <SpecialDish />
               <FilteredDishes/>

            </AllMenus>


            {/* </Router> */}
            
            
        </div>
    )
}

export default Menus
