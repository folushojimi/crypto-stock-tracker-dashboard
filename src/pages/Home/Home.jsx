import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
{/* hero section */}
<div className='text-center w-[600px]'>
<h1>Largest <br /> Crypto Marketplace</h1>
<p>Welcome to the world's largest cryptocurrency
     marketplace. Sign up to explore more about cryptos.</p>
</div>

{/* The search form */}
<form>
    <input type="text" placeholder='Search Crypto' />
    <button>Search</button>
</form>

    </div>
  )
}

export default Home