import './App.css'
import BookCallContact from './components/BookCallContact'
import GetAQuoteForm from './components/GetQuoteForm'
import ContactPage from './Pages/HomePage/Contact_Page/ContactPage'
import HomePage from './Pages/HomePage/Home'
import Privacy_Policy from './Pages/HomePage/Privacy_Policy'
import Term_Conditions from './Pages/HomePage/Term_Conditions'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
       <ScrollToTop />
      <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/terms-conditions" element={<Term_Conditions />} />
           <Route path="/privacy-policy" element={<Privacy_Policy />} />
           <Route path="/contact-us" element={<ContactPage />} />
      </Routes>

    </BrowserRouter>
  )
}



export default App
