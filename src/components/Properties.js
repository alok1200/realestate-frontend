import React, {useEffect, useState} from 'react'
import SingleProperty from './SingleProperty'
import dataa from '../dummyProp.js'
import axios from 'axios'

function Properties() {
  const [properties, setProperties] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("http://localhost:4000/property")
      setProperties(data)
      console.log(data)
    }

    fetchData()
  }, [])
  
  return (
    <div >
      <h3 style={{textAlign: "center", fontSize: "1.5rem", marginTop: "1rem"}}>New Properties</h3>
      <div style={{display: "flex", justifyContent:"center", flexWrap: "wrap",gap:"10px"}}>

      {properties?.map(p => {
        return <SingleProperty p={p}/>
      })}
      </div>
    </div>
  )
}

export default Properties