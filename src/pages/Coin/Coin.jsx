import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
 
const Coin = () => {
const {coinId}=useParams()
const [  coinData, setCoinData]=useState() 
const {currency}=useContext(CoinContext)

const fetchCoinData = async ()=>{
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  fetch(`https://api.coingecko.com/api/v3/coins/${coinId} `, options)
    .then(res => res.json())
    .then(res => setCoinData(res))
    .catch(err => console.error(err));
}

useEffect(()=>{
  fetchCoinData();   
},[currency])
 
console.log(coinData)

  return (
    <div>
    <h1 className='text-white font-bold'>Coin : { }</h1>
    </div>
  )
}

export default Coin
