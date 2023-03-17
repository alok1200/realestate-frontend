import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/NavBar'
import Properties from '../../components/Properties'
import Footer from "../../components/footer/Footer"



function PropertiesPage() {
  const location = useLocation()

  const states = location.state?.stateFilter;
  const search = location.state?.search;
  
  const cat = location.pathname.split("/")[2];


  return (
    <>
        <Navbar/>
        <Properties cat={cat !== "all" && cat} search={search} states={states !== "all" && states}/>
        <Footer/>
    </>
  )
}

export default PropertiesPage