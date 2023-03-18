import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SingleProperty.css'

function SingleProperty({p}) {
  const navigate = useNavigate();
  return (
    <div className='singelprop'>
    <div className='singleprop_img_container '>
      <img src={Array.isArray(p.image) ? p.image[0] : p.image}></img>
    </div>
    <div className='singleprop_info'>
      <p>{p.category}</p>
      <h3 className='a'>{`${p.price} | ${p.size}`}</h3>
      <p className='b'>{`${p.address?.area}, ${p.address?.city}`}</p>
      <p className='c'>{`Population: ${p.population}`}</p>
      <button className='singleprop_button' onClick={() => navigate(`/property/${p._id}`)}>Buy Now</button>
    </div>
    </div>
  )
}

export default SingleProperty