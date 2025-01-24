import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import LineChart from '../../component/LineChart'
 
const Coin = () => {
const {coinId}=useParams()
const [ coinData, setCoinData]=useState() 
const [ historicalData, setHistoricalData]=useState() 
const {currency}=useContext(CoinContext)

const fetchHistoricalData = async ()=>{
  const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options)
  .then(res => res.json())
  .then(res => setHistoricalData(res))
  .catch(err => console.error(err));
}
 

//fetchind data by id
const fetchCoinData = async ()=>{
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  fetch(`https://api.coingecko.com/api/v3/coins/${coinId} `, options)
    .then(res => res.json())
    .then(res => setCoinData(res))
    .catch(err => console.error(err));
}

useEffect(()=>{
  fetchCoinData();
  fetchHistoricalData();  

},[currency])
 
console.log(coinData)



 

//only if coinData and historical data is available it will load this page
  if(coinData&&historicalData){
  return (
    <div>

      <div>
        <img src={coinData.image.large} alt="" />
        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()}) </b></p>
      </div>

      {/*the coinChart */}
      <div>
        <LineChart historicalData={historicalData}/>
      </div>
      
    </div>
  )
}else{
  return(
    <div className='h-screen flex flex-col justify-center items-center'>
    <div><i class="fa-solid fa-spinner fa-5x animate-spin"></i></div>
    </div>
  )
}
  
}

export default Coin
