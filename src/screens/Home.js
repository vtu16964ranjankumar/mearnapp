import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
// import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div> <Navbar /> </div>
      <div> <Card /> </div>
      
      <div>Body</div>
      <div> <Footer /> </div>
    </div>
  )
}

export default Home
