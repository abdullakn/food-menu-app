import React,{useState,useEffect} from 'react'



//Create context
export const AllMenuContext=React.createContext()



export const AllMenus=(props)=>{

    const[menu,setMenu]=useState([])
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


    useEffect(()=>{
        getAllMenus()
        
        
        
        
      },[])


    return(
        <AllMenuContext.Provider value={menu}>
            {!loader? props.children : <div className="loader" style={{color:'white'}}>Loading</div>} 
            
        </AllMenuContext.Provider>
        
    )

}




