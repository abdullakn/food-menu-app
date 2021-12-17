import React from 'react'
import{useState,useEffect} from 'react';
import '../App.scss'
import SpecialDish from './SpecialDish';
import Hero from './Hero';
import FilteredDishes from './FilteredDishes';


function Menus() {
    const[menu,setMenu]=useState([])
    const[category,setCategory]=useState([])

    async function getAllMenus(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response=await fetch(API_URL)
        console.log(response)
        let data=await response.json()
        setMenu(data.meals)
        console.log("spec",data.meals) 
    }
    async function getCategory(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
        let response=await fetch(API_URL)
        console.log(response)
        let data=await response.json()
        setCategory(data.categories)
        console.log("category",category)
    }
    useEffect(()=>{
        getAllMenus()
        getCategory()
        
        
      },[])

    //   let menuImages=menu.map((item)=>{
    //       return(       
    //           <img src={item.strMealThumb} alt="" />
    //       )
    //   })
    //   console.log("dddd",menuImages)
    return (
        <div className="menu">
            
            <Hero/>
            <SpecialDish menu={menu}/>
            <FilteredDishes/>
            
            
        </div>
    )
}

export default Menus
