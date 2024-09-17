import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Collections from "../Components/Collections/Collections"
import Footer from '../Components/FooterBottom/Footers'
import Banner from '../Components/Banner/Banner'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Collections/>
        <Footer/>
    </div>
  )
}

export default Home