import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center border-b-[1px] border-solid border-white px-20 font-outfit'>
        <img className='h-20' src="/images/logo.png" alt="logo" />
        <ul className='flex items-center gap-4'>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>

        <div className='flex gap-2'>

            <select className='text-white bg-transparent px-2 py-1 border-2 border-white border-solid rounded-md'>
                <option value="usd" className='bg-[#09005c]'>USD</option>
                <option value="eur" className='bg-[#09005c]'>EUR</option>
                <option value="ngn" className='bg-[#09005c]'>NGN</option>
            </select>

            <button className='bg-white text-black text-center flex items-center justify-center gap-2 px-6 py-1 rounded-full'>Sign up <img className='h-3' src="/images/blackarrow.png" alt="arrow" /></button>
        </div>
    </div>
  )
}

export default Navbar
