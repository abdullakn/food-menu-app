import React,{useState} from 'react'

function FilteredDishes(props) {

    const [filteredCategory,setFilteredCategory]=useState([])


    const selectDishCategory=((category)=>{
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
        console.log(alldishes)
        if (!alldishes.length){
            setFilteredCategory(<h5>No Results Found</h5>)
        }else{
            setFilteredCategory(alldishes)
        }
        
    })

    const allcategory=props.category.map((item)=>{
        return(
            <li onClick={()=>{selectDishCategory(item.strCategory)}}>{item.strCategory}</li>
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
                    {filteredCategory}
                </ul>

                </div>
            </div>
            
        </div>
    )
}

export default FilteredDishes
