import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"

import Home from './pages/home/Home'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getImgIndex } from "./store/imageSlice"

import logos from "./utils/logos"
import Footer from "./components/footer/Footer"

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const index = Math.floor(Math.random() * logos.length)
    dispatch(getImgIndex(index))
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
