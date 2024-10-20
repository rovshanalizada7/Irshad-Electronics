import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './assets/Components/HomePage/HomePage'
import Wishlist from './assets/Components/WishList/Wishlist'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<HomePage/>} />
     <Route exact path='/wishList' element={<Wishlist/>} />
    </Routes>
   </BrowserRouter>
    </>
  )

}

export default App
