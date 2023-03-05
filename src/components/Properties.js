import React, {useEffect, useState} from 'react'
import SingleProperty from './SingleProperty'
import dataa from '../dummyProp.js'
import axios from 'axios'

function Properties({cat, limit, search}) {
  const [properties, setProperties] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const filter = {}

      if(search) filter.search = search;
      if(cat) filter.cat = cat;
      if(limit) filter.limit = limit;

      const {data} = await axios.post("http://localhost:4000/property", {filter})
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
        return <SingleProperty p={p} key={p._id}/>
      })}
      </div>
    </div>
  )
}

export default Properties