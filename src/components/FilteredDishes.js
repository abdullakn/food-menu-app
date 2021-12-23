import React,{useState,useContext,useEffect} from 'react'
import CardItem from './CardItem'
import Pagination from './Pagination'
import {AllMenuContext} from './context'
import Popup from './Popup'

function FilteredDishes(props) {

    const[category,setCategory]=useState([])
    const [singleDish,setSingleDish]=useState([])
    

    async function getCategory(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
        let response=await fetch(API_URL)
        console.log(response)
        let data=await response.json()
        setCategory(data.categories)
        console.log("category",category)
    
    }

    async function getSingleDish(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response=await fetch(API_URL)
        console.log(response)
        let data=await response.json()
        setSingleDish(data.meals)
        console.log("single",data)
        
       
    }

      
    useEffect(()=>{      
        getCategory()
        getSingleDish()   
      },[])

    const [filteredCategory,setFilteredCategory]=useState([])
    const [active,setActive]=useState('Beef')
    const [startIndex,setStartIndex]=useState(0)
    const [endIndex,setEndIndex]=useState(4)

    //context api
    const allMenus=useContext(AllMenuContext)

    //selected category dish mapping
    const selectDishCategory=((category)=>{

        //make active dish and make empty array of default dish
        setActive(category)
        setSingleDish([])

        const alldishes=allMenus.filter((item)=>{
            return item.strCategory===category
        }).map((item)=>{
            return (
                <li>
                    <img src={item.strMealThumb} alt="" />
                    <h5>{item.strMeal}</h5>
                </li>
            )
        })
        // const paginationDishes=alldishes.slice[1,4]

    // no item in filterd dishes

    console.log("allldishes",alldishes)
        
        if (alldishes.length == 0){
            setFilteredCategory(<h5 className="text-center">No Resultss Found</h5>)
            
        }else{
            setFilteredCategory(alldishes)
            console.log("set",filteredCategory)  
        }
        
    })


    //display default single dish
    const defaultDish=singleDish.map((item,key)=>{
        if(key<4){
            return (
           
                <CardItem item={item}/>
            )

        }
   
    })

    //display all category as a button
    const allcategory=category.map((item)=>{
        return(
            <li className={item.strCategory===active?"active":""} onClick={()=>{selectDishCategory(item.strCategory)}}>{item.strCategory}</li>
        )
    })

    return (
        <div className="filtred-dishes">
            {/* <Popup/> */}
            <div className="container">
                <div className="text-center">
                    <h2>choose your dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vero.</p>
                </div>
                <div className="filterd-dishes">
                    <ul>

                 {/* display all category button  */}
                      {allcategory} 

                    </ul>
                </div>
                <div className="filtered-dishes-results">
                <ul className="flex flex-wrap gap-30">
                    {defaultDish}
                    {filteredCategory.slice(startIndex,endIndex)}
                    {/* {filteredCategory.length == 0?filteredCategory.slice(startIndex,endIndex):<h1>No Result</h1>} */}
                </ul>

                </div>
                <Pagination filteredDish={filteredCategory} startIndex={startIndex} setStartIndex={setStartIndex} setEndIndex={setEndIndex} />
            </div>
            
        </div>
    )
}

export default FilteredDishes
