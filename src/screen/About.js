import React from 'react'
import { Routes, Route,useNavigate } from 'react-router-dom'
import Offer from './Offer'
import bootstrap from 'bootstrap'

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>About</h1>
      <button onClick={()=>navigate('/sign-up')} className="btn btn-primary">Sign Up</button>
      <button onClick={()=>navigate('offers')} className="btn btn-danger">Add offer</button>
    { 
      <Routes>
        <Route path='offers' element={<Offer/>}/>
      </Routes>
    }


    </div>

  )
}

export default About
