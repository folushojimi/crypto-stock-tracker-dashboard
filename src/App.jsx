import Navbar from "./component/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Coin from "./pages/Coin/Coin"
import Footer from "./component/Footer"
import Stock from "./pages/Stocks/Stock"
import {Routes,Route } from "react-router-dom"
import StocksMain from "./pages/Stocks/StocksMain"


const App =()=> {

  return (

   <div className="text-white  min-h-screen bg-cover bg-center bg-gradient-to-r from-[#003c5b] via-[#006f8e] to-[#0099b8] overflow-x-hidden">
 <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/coin/:coinId" element={<Coin/>}/>
  <Route path="/stockhome" element={<StocksMain/>}/>
  <Route path="/stock/stockId" element={<Stock/>}/>
</Routes>
<Footer/>
</div>

   
  )
}

export default App


