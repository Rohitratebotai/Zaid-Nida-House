import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import PageNotFound from "./pages/pagenotfound/PageNotFound"
import Home from "./pages/home/Home"
import Navbar from "./components/commonComponents/navbar/Navbar"
import Footer from "./components/commonComponents/footer/Footer"
import ContactUs from "./pages/contactus/ContactUs"
import Homepage_PropertyDetails from "./components/homepage_components/homepage_Propertydetails/Homepage_PropertyDetails"
import About from "./pages/about/About"
import ScrollToTop from "./ScrollTop"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={'/contact'} element={<ContactUs />} />
          <Route path={'/property_details/:id'} element={<Homepage_PropertyDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App