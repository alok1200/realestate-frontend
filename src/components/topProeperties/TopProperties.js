import React from 'react'
import "./topProperty.css"

function TopProperties() {
  return (
    <div className='topproperty'>
      <h1>Top States</h1>
      <div className='topproperty_wrapper'>
        <div className='topproperty_single'>
          <img src="https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?s=612x612&w=0&k=20&c=xT9TK7oYkP6TP62lHqP0H-9mfz9cWva4OcYEnt06cjc=" />
          <p>Mumbai</p>
        </div>
        <div className='topproperty_single'>
          <img src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" />
          <p>Delhi</p>
        </div>
        <div className='topproperty_single'>
          <img src="https://cdn.britannica.com/91/110191-050-7BCFD56B/Victoria-Memorial-Hall-Kolkata-India.jpg" />
          <p>Kolkata</p>
        </div>
        <div className='topproperty_single'>
          <img src="https://images.news18.com/ibnlive/uploads/2022/06/sports-63.png" />
          <p>Hydrabad</p>
        </div>

      </div>
    </div>
  )
}

export default TopProperties