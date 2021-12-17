import React from 'react'

function FilteredDishes(props) {

    const allcategory=props.category.map((item)=>{
        return(
            <li>{item.strCategory}</li>
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
            </div>
            
        </div>
    )
}

export default FilteredDishes
