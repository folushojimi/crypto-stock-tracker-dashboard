import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 mt-14'>
{/* hero section */}
<div className='text-center w-[600px] font-outfit'>
<h1 className='font-bold text-5xl mb-7'>Largest <br /> Crypto Marketplace</h1>
<p className='text-sm mx-28'>Welcome to the world's largest cryptocurrency
     marketplace. Sign up to explore more about cryptos.</p>
</div>

{/* The search form */}
<div>
<form className='bg-white p-1 rounded-md'>
    <input type="text" placeholder='Search Crypto' className='w-72 text-black focus:outline-none ml-2'/>
    <button className='bg-purple-500 text-white px-4 py-1 ml-2 rounded-md'>Search</button>
</form>
</div>

{/* crypto table */}
<div className='bg-gradient-to-r from-[rgba(84,3,255,0.15), rgba(105,2,153,0.15)] max-w-[800px] mx-auto rounded-md'>

{/*table layout*/}
<div className='grid grid-cols-custom items-center border-b-2 border-white px-6 py-2'>
<p>#</p>
<p >Coins</p>
<p>Price</p>
<p className='text-center'>24HChange</p>
<p className='text-right'>MarketCap</p>
 
</div>

</div>

    </div>

  )
}

export default Home