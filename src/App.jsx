import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './assets/Components/HomePage/HomePage'
import Wishlist from './assets/Components/WishList/Wishlist'
import ShexsiKabinet from './assets/Components/ShexsiKabinet/ShexsiKabinet'
import Basket from './assets/Components/Basket/Basket'
import Kampaniyalar from './assets/Components/Kampaniyalar/Kampaniyalar'
import Sual from './assets/Components/Sual/Sual'
import Sikayet from './assets/Components/Sikayet/Sikayet'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<HomePage/>} />
     <Route exact path='/wishList' element={<Wishlist/>} />
     <Route exact path='/basket' element={<Basket/>}/>
     <Route exact path='/girish' element={<ShexsiKabinet/>}/>
     <Route exact path='/kampaniyalar' element={<Kampaniyalar/>}/>
     <Route exact path='/shikayet&ve&teklifler' element={<Sikayet/>}/>
     <Route exact path='/sual&cavab' element={<Sual/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )

}

export default App
