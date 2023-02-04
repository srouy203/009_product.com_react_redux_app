import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './screen/Home'
import About from './screen/About'
import More from './screen/More'
import SignUp from './screen/SignUp'
import ProductDetail from './screen/ProductDetail'

function App() {
  const [noMore] = useState(false)

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about/*' element={<About/>}/>
          <Route path='/more' element={<More/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/productdetail/:productID' element={<ProductDetail/>}/>

          <Route path='*' element={(
            <>
              <h1>Page is not found</h1>
              <Link to='/redirect'>Back to home page</Link>
            </>
          )}/>

          {/* Navigate component */}
          <Route path='/redirect' element={<Navigate to='/'/>}/>
          {/* use Condition */}
          <Route path='/test' element={noMore ? <Navigate to='/more'/> : <h1>No More</h1>}/>
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
