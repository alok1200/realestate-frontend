import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/NavBar'
import Properties from '../../components/Properties'


function PropertiesPage() {
  const location = useLocation()

  const query = new URLSearchParams(location.search);
  const search = query.get("s");

  const cat = location.pathname.split("/")[2];


  return (
    <>
        <Navbar/>
        <Properties cat={(cat !== "all") ? cat : null} search={search}/>
    </>
  )
}

export default PropertiesPage