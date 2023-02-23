import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1571168538867-ad36fe110cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Real estate background"
      />
      <div className="hero-content">
        <h1 className="hero-title">Find Your Dream Home</h1>
        <p className="hero-description">Search through our .</p>
        <div className="searchContainer"> 
          <div className="searchTop"> 
            <span>recidental</span>
            <span>Commercile</span>
            <span>PG\Co-Living</span>
            <span>Plots</span>  
          </div>
          <div className="searchBottom">
            <select>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Kolkata</option>
              <option>Hyderabad</option>
              <option>Delhi</option>

            </select> 
            <div></div>
            <input placeholder="Search"></input>
            <button>Search</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
