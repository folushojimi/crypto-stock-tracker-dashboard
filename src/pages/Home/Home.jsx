import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'
import {Link} from 'react-router-dom'

const Home = () => {

const{allCoin, currency}=useContext(CoinContext);
const [displayCoin, setDisplayCoin]=useState([]);
const [input, setInput]=useState('');

const inputHandler = (event)=>{
  setInput(event.target.value)
}

const searchHandler = async (event)=>{
  event.preventDefault();
 const coins = await allCoin.filter((item)=>{
   return item.name.toLowerCase().includes(input.toLowerCase())
  })
  setDisplayCoin(coins)
}

//putting all coin in displayCoin with the help of useeffect
useEffect(()=>{
  setDisplayCoin(allCoin);
},[allCoin])

  return (

    <div className='flex flex-col justify-center items-center gap-5 mt-14'>
{/* hero section */}
<div className='text-center w-[600px] font-outfit'>
<h1 className='font-bold text-5xl mb-7'>Largest <br /> Crypto Marketplace</h1>
<p className='text-sm mx-28'>
  Welcome to the world's largest cryptocurrency
  marketplace. Sign up to explore more about cryptos.</p>
</div>

{/* The search form */}
<div>
<form   onSubmit={searchHandler} className='bg-white p-1 rounded-md'>
    <input
    className='w-72 text-black focus:outline-none ml-2'
    type="text"
    placeholder='Search Crypto'
    list='coinlist'
    value={input}
    onChange={inputHandler}
    required
      />


<datalist id='coinlist'>
  {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
</datalist>


    <button type='submit' className='bg-purple-500 text-white px-4 py-1 ml-2 rounded-md'>Search</button>
</form>
</div>

{/* crypto table */}
<div className='bg-gradient-to-r from-[rgba(84,3,255,0.15), rgba(105,2,153,0.15)] max-w-[800px] mx-auto rounded-md mb-3'>

{/*table layout*/}
<div className='grid grid-cols-custom items-center border-b-2 border-white px-6 py-2'>
<p>#</p>
<p >Coins</p>
<p>Price</p>
<p className='text-center'>24HChange</p>
<p className='text-right'>MarketCap</p>
</div>
 {
  displayCoin.slice(0,10).map((item, index)=>(
    <Link to={`/coin/${item.id}`} className='grid grid-cols-custom items-center border-b-2 border-white px-6 py-2 last:border-none' key={index} >
       <p>{item.market_cap_rank}</p>

       <div className='flex justify-start items-center gap-4 mr-8'>
        <img src={item.image} alt="" className='h-10' />
        <p>{item.name + " - " + item.symbol}</p>
       </div>

        <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
        <p className={item.price_change_percentage_24h>0?' text-green-500 text-center':'text-red-600 text-center'}>
          {Math.floor(item.price_change_percentage_24h*100)/100}
        </p>
        <p className='text-right'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
    </Link>
  ))
 }
</div>
</div>

  )
}

export default Home