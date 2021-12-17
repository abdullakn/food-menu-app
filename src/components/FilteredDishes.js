import React,{useState} from 'react'

function FilteredDishes(props) {

    const [filteredCategory,setFilteredCategory]=useState([])
    const [active,setActive]=useState('Beef')


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
        console.log(alldishes)

    // no item in filterd dishes

        if (alldishes.length == 0){
            setFilteredCategory(<h5 className="text-center">No Results Found</h5>)
        }else{
            setFilteredCategory(alldishes)
        }
        
    })

    const singleDish=props.singleDish.map((item)=>{
        return (
            <li>
                <img src={item.strMealThumb} alt="" />
                <h5>{item.strMeal}</h5>
            </li>
        )
    })

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
                    {filteredCategory}
                </ul>

                </div>
            </div>
            
        </div>
    )
}

export default FilteredDishes
