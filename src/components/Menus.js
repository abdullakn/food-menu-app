import React from 'react'
import{useState,useEffect} from 'react';
import '../App.scss'
import SpecialDish from './SpecialDish';
import Hero from './Hero';
import FilteredDishes from './FilteredDishes';


function Menus() {
    const[menu,setMenu]=useState([])
    const[category,setCategory]=useState([])
    const [singleDish,setSingleDish]=useState([])
    const[loader,setLoader]=useState(true)

    async function getAllMenus(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response=await fetch(API_URL)
        console.log(response)
        let data=await response.json()
        setMenu(data.meals)
        console.log("spec",data.meals) 
        setLoader(false)
    }
    async function getCategory(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
        let response=await fetch(API_URL)
        console.log(response)
        let data=await response.json()
        setCategory(data.categories)
        console.log("category",category)
        setLoader(false)
    }

    async function getSingleDish(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response=await fetch(API_URL)
        console.log(response)
        let data=await response.json()
        setSingleDish(data.meals)
        console.log("single",data)
        
        setLoader(false)
    }
    useEffect(()=>{
        getAllMenus()
        getCategory()
        getSingleDish()
        
        
        
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
           {!loader?<SpecialDish menu={menu}/>:<div className="loader" style={{color:'white'}}>Loading</div>} 
           {!loader?<FilteredDishes category={category}
            menu={menu}
            singleDish={singleDish}
            setSingleDish={setSingleDish}/>:null}
            
            
            
        </div>
    )
}

export default Menus
