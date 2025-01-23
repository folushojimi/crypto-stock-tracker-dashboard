import React from 'react'
import { useParams } from 'react-router-dom'
 
const Coin = () => {

const {coinId}=useParams()
  return (
    <div>
    <h1 className='text-white font-bold'>Coin</h1>
    </div>
  )
}

export default Coin
