import React from 'react'

function Pagination(props) {

    

    let numberOfPages=[]
    const pageCount=Math.ceil(props.filteredDish.length/4)
    for ( let i=1;i<=pageCount;i++){
        numberOfPages.push(i)
    }

    let pages=numberOfPages.map((item)=>{
        return(
            <li onClick={()=>{handlePagination(item)}}>{item}</li>
        )
    })

    console.log("filtered",props.filteredDish.length)

    const handlePagination=(page)=>{
        const startindex=(page-1)*4
        const endIndex=(page*4)
        console.log(startindex,endIndex)
        props.setStartIndex(startindex)
        props.setEndIndex(endIndex)
        console.log(props.startIndex)
    }

    return (
        <section>
       <ul className="pagination flex">
           {pages}

       </ul>
       </section>
    )
}

export default Pagination
