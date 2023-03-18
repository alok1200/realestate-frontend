import React from 'react'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import Properties from '../../components/Properties'
import TopProperties from '../../components/topProeperties/TopProperties'
import Footer from "../../components/footer/Footer"


function Home() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Properties limit={4} showMore={true}/>
    <TopProperties/>
    <Footer/>
    </>
  )
}

export default Home