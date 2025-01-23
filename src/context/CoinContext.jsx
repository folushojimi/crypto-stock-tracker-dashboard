 import {createContext, useEffect, useState} from "react"


//  the create context hook
 export const CoinContext = createContext()

 const CoinContextProvider =(props)=>{


// STATES to store the API DATA 

//data that will come from the api will come in form of an array
const [allCoin, setAllCoin]=useState([]);
//state hold demo itself to receice currency as a from the api/ data received will be set 
const [currency, setCurrency] =useState({
    name:"usd",
    symbol:"$"
})

console.log(allCoin)
console.log(currency)


//FUNCTION TO FETCH THE DATA FROM THE API(an async function)
const fetchAllCoin = async ()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': '	CG-xukUWCGABB77bQVuRbdn6Pm6'
        }
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoin(res))
        .catch(err => console.error(err));
}

//whenever the currency is updated it will again run the function
useEffect(()=>{
    fetchAllCoin();
}, [currency])


//values from here can be use in any of our component as long as it passed
const contextValue ={
allCoin, currency, setCurrency
}

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
 }

 export default CoinContextProvider