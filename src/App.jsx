import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './assets/pages/About';
import Home from './assets/pages/Home';
import Contact from './assets/pages/Contact';
import Register from './assets/pages/Register';
import Login from './assets/pages/Login';
import NotFound from './assets/pages/NotFound';
import Cart from './assets/pages/Cart';
import Detail from './assets/pages/Detail';
import { SearchProvider } from './components/context/searchContext';

function App() {


  return (
   <>
   <SearchProvider>
   <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </SearchProvider>
   </>
  )
}

export default App
