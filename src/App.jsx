import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './assets/Components/HomePage/HomePage'
import Wishlist from './assets/Components/WishList/Wishlist'
import ShexsiKabinet from './assets/Components/ShexsiKabinet/ShexsiKabinet'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<HomePage/>} />
     <Route exact path='/wishList' element={<Wishlist/>} />
     <Route exact path='/girish' element={<ShexsiKabinet/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )

}

export default App
