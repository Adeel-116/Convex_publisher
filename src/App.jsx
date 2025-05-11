import './App.css';
import ContactPage from './Pages/Contact_Page/ContactPage';
import HomePage from './Pages/HomePage/Home';
import Privacy_Policy from './Pages/Privacy_Policy';
import Term_Conditions from './Pages/Term_Conditions';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import GhostWriting from './Pages/services/GhostWriting';
import  {GlobalContext}  from './context/ContextCreate';
import globalData from './context/GlobalData';          
import Editing from './Pages/services/Editing';
import ProofReading from './Pages/services/ProofReading';
import AudioBook from './Pages/services/AudioBook';
import BlogWriting from './Pages/services/BlogWriting';
import WebsiteContentWriting from './Pages/services/WebsiteContentWriting';
import BookCover from './Pages/services/BookCover';
import BookPromotion from './Pages/services/BookPromotion';
import BookFormatting from './Pages/services/BookFormatting';
import Ebook from './Pages/services/Ebook';
import BookVideoTrailer from './Pages/services/BookVideoTrailer';
import AuthorWebsite from './Pages/services/AuthorWebsite';
import ArticleWriting from './Pages/services/ArticleWriting';
import TestimonialPage from './Pages/TestimonialPage/TestimonialPage';
import FAQ from './Pages/FAQ_page/FAQ';

function App() {
  return (
    <GlobalContext.Provider value={globalData}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms-conditions" element={<Term_Conditions />} />
          <Route path="/privacy-policy" element={<Privacy_Policy />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/ghost-book-writing-service" element={<GhostWriting />} />
          <Route path="/editing-service" element={<Editing />} />
          <Route path="/proofreading-service" element={<ProofReading />} />
          <Route path="/audio-book-service" element={<AudioBook />} />
          <Route path="/blog-writing-service" element={<BlogWriting />} />
          <Route path="/website-content-writing" element={<WebsiteContentWriting />} />
          <Route path="/book-cover-design" element={<BookCover />} />
          <Route path="/book-promotion" element={<BookPromotion />} />
          <Route path="/book-formatting" element={<BookFormatting />} />
          <Route path="/ebook-writing-service" element={<Ebook />} />
          <Route path="/book-video-trailer" element={<BookVideoTrailer />} />
          <Route path="/book-author-website" element={<AuthorWebsite />} />
          <Route path="/article-writing-service" element={<ArticleWriting />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/faq" element={<FAQ />} />

        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
