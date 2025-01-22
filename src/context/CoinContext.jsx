 import {createContext, useState} from "react"


//  the create context hook
 export const CoinContext = createContext()

 const CoinContextProvider =(props)=>{


// states to store the API DATA 

//data that will come from the api will come in form of an array
const [allCoin, setAllCoin]=useState([]);

//state hold demo itself to receice currency as a from the api
const [currency, setCurrency] =useState({
    name:"usd",
    Symbol:"$"
})

//any value here can be use in any component as long as it passed
const contextValue ={
}

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
 }

 export default CoinContextProvider