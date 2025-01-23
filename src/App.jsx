import Navbar from "./component/Navbar/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Coin from "./pages/Coin/Coin"
const App =()=> {
 

  return (
<BrowserRouter>
 
       <div className="text-white win-h-screen bg-gradient-to-r from-[#0b004e] via-[#1d152f] to-[#002834]">
        <Navbar/>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/coin/coinId" element={<Coin/>}/>
</Routes>

       </div>



 
</BrowserRouter>
   
  )
}

export default App


