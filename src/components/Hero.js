import {useState} from "react";
import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";


const Hero = () => {
  const [search, setsearch] = useState("")
  const [states, setstates] = useState("")

  const navigate = useNavigate()
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
            <span><Link to="propertyies/residential">Residential</Link></span>
            <span><Link to="propertyies/Commercial">Commercial</Link></span>
            <span><Link to="propertyies/pgco">PG\Co-Living</Link></span>
            <span><Link to="propertyies/plots">Plots</Link></span>  
          </div>
          <div className="searchBottom">
            <select defaultValue={"all"} onChange={e => setstates(e.target.value)}>
              <option value="all">All</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Kolkata</option>
              <option>Hyderabad</option>
              <option>Delhi</option>

            </select> 
            <div></div>
            <input placeholder="Search" value={search} onChange={e => setsearch(e.target.value)}></input>
            <button onClick={() => navigate(`/propertyies/all`,{state:{stateFilter: states, search}})}>Search</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
