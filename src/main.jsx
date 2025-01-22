import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CoinContextProvider from './context/CoinContext.jsx'

createRoot(document.getElementById('root')).render(

    <CoinContextProvider>
    <App />
    </CoinContextProvider>

)
