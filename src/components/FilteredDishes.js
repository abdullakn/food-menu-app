import React,{useState} from 'react'
import CardItem from './CardItem'
import Pagination from './Pagination'

function FilteredDishes(props) {

    const [filteredCategory,setFilteredCategory]=useState([])
    const [active,setActive]=useState('Beef')
    const [startIndex,setStartIndex]=useState(0)
    const [endIndex,setEndIndex]=useState(4)


    const selectDishCategory=((category)=>{
        setActive(category)
        props.setSingleDish([])

        const alldishes=props.menu.filter((item)=>{
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
    const singleDish=props.singleDish.map((item,key)=>{
        if(key<4){
            return (
           
                <CardItem item={item}/>
            )

        }
   
    })

    //display all category as a button
    const allcategory=props.category.map((item)=>{
        return(
            <li className={item.strCategory===active?"active":""} onClick={()=>{selectDishCategory(item.strCategory)}}>{item.strCategory}</li>
        )
    })

    return (
        <div className="filtred-dishes">
            <div className="container">
                <div className="text-center">
                    <h2>choose your dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vero.</p>
                </div>
                <div className="filterd-dishes">
                    <ul>

                      {allcategory} 

                    </ul>
                </div>
                <div className="filtered-dishes-results">
                <ul className="flex flex-wrap gap-30">
                    {singleDish}
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
