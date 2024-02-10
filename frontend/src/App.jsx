import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import ProductServices from './pages/ProductsServices'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import BookMeeting from './pages/BookMeeting'
import Feedback from './components/FeedBack'
import Footer from './components/Footer'

function App() {
  

  return (
    <div>
        <Header/>
        <div style={{height:"5rem"}}></div>
        <Home/>
        <AboutUs/>
        <ProductServices/>
        <BookMeeting/>
        <Feedback/>
        <ContactUs/>
        <Footer/>
    </div>
    
  )
}

export default App
