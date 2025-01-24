import React, { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

const {setCurrency}=useContext(CoinContext)

// function to change the currency, it makes request to the api for change on all it data
const currencyHandler =(event)=>{
switch (event.target.value){ 
  case "usd" : {
    setCurrency({name: "usd", symbol: "$"})
  break;
  }
  case "eur" : {
    setCurrency({name: "eur", symbol: " €"})
  break;
  }
  case "ngn" : {
    setCurrency({name: "ngn", symbol: " ₦"})
  break;
  }
  default : {
    setCurrency({name: "usd", symbol: "$"})
  break;
  }


}

}

  return (
    <div className='flex  md:justify-between  items-center border-b-[1px] border-solid border-white md:px-20 font-outfit bg-emerald-500 md:bg-red-600'>
        <Link to={'/'}><img className='h-20' src="/images/logo.png" alt="logo" />
        </Link>
        <ul className='flex items-center gap-4 mr-4'>
            <Link to={'/'}>Home</Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>

        <div className='flex gap-2'>

            <select onChange={currencyHandler} className='text-white bg-transparent px-2 py-1 border-2 border-white border-solid rounded-md'>
                <option value="usd" className='bg-[#09005c]'>USD</option>
                <option value="eur" className='bg-[#09005c]'>EUR</option>
                <option value="ngn" className='bg-[#09005c]'>NGN</option>
            </select>

         </div>
    </div>
  )
}

export default Navbar
