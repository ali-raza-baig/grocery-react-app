import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import LoginPage from "./Pages/LoginPage"
import ProductPage from "./Pages/ProductPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
