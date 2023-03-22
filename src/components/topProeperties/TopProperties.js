import React from "react";
import styled from "./topProperty.module.css";
import { useNavigate } from 'react-router-dom'

function TopProperties() {
  const navigate = useNavigate()
  return (
    <div className={styled.topproperty}>
      <h1>Top States</h1>
      <div className={styled.topproperty_wrapper} >
        <div className={styled.topproperty_single}   onClick={() => navigate("/propertyies/all", {state: {stateFilter: "mumbai"}})}>
          <img src="https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?s=612x612&w=0&k=20&c=xT9TK7oYkP6TP62lHqP0H-9mfz9cWva4OcYEnt06cjc=" />
          <p>Mumbai</p>
        </div>
        <div className={styled.topproperty_single}  onClick={() => navigate("/propertyies/all", {state: {stateFilter: "delhi"}})}>
          <img src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" />
          <p>Delhi</p>
        </div>
        <div className={styled.topproperty_single}  onClick={() => navigate("/propertyies/all", {state: {stateFilter: "kolkata"}})}>
          <img src="https://cdn.britannica.com/91/110191-050-7BCFD56B/Victoria-Memorial-Hall-Kolkata-India.jpg" />
          <p>Kolkata</p>
        </div>
        <div className={styled.topproperty_single}  onClick={() => navigate("/propertyies/all", {state: {stateFilter: "hydrabad"}})}>
          <img src="https://images.news18.com/ibnlive/uploads/2022/06/sports-63.png" />
          <p>Hydrabad</p>
        </div>
        <div className={styled.topproperty_single}  onClick={() => navigate("/propertyies/all", {state: {stateFilter: "pune"}})}>
          <img src="https://www.fabhotels.com/blog/wp-content/uploads/2022/07/600X400_4-min-1280x720.jpg" />
          <p>Pune</p>
        </div>
      </div>
      <div className={styled.maps}>
        <div className="map">
          <iframe
            width="100%"
            height="500px"
            src="https://maps.google.com/maps?&maptype=satellite&q=+19.0760° N, 72.8777° E+&hl=en&z=10&amp;output=embed"
          />
        </div>
        <div className={styled.map}>
          <iframe
            width="100%"
            height="500px"
            src="https://maps.google.com/maps?q=+28.7041° N, 77.1025° E+&hl=en&z=10&amp;output=embed"
          />
        </div>
        <div className={styled.map}>
          <iframe
            width="100%"
            height="500px"
            src="https://maps.google.com/maps?q=+17.3850° N, 78.4867° E+&hl=en&z=10&amp;output=embed"
          />
        </div>
        <div className={styled.map}>
          <iframe
            width="100%"
            height="500px"
            src="https://maps.google.com/maps?q=+12.9716° N, 77.5946° E+&hl=en&z=10&amp;output=embed"
          />
        </div>
        <div className={styled.map}>
          <iframe
            width="100%"
            height="500px"
            src="https://maps.google.com/maps?q=+18.5204° N, 73.8567° E+&hl=en&z=10&amp;output=embed"
          />
        </div>
      </div>
    </div>
  );
}

export default TopProperties;
