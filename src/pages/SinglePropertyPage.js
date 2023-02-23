import axios from 'axios'
import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from "../components/NavBar.js"


function SinglePropertyPage() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  useEffect(() => {
    (async () => {
      try{
        const {data} = await axios.get(`http://localhost:4000/property/${id}`)
        console.log(data)
      }catch(err){
        console.log(err)
      }
    })()
  },[])

  
  return (
    <>
    SinglePropertyPage</>
  )
}

export default SinglePropertyPage