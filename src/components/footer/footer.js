import React from "react";
import styled from "./footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className={styled.footer}>
        <img src={logo} className={styled.logo}></img>
        <div className={styled.footer_itms}>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Properties</p>
        </div>
        <div className={styled.footer_itms}>
         <h3>Famous City</h3>
         <p>Mumbai</p>
         <p>Hydrabad</p>
         <p>Delhi</p>
         <p>Kolkata</p>
         <p>puna</p>
        </div>
        <div className={styled.footer_itms}>
          <h3>Pricing</h3>
          <p>Overview</p>
          <p>less pricing</p>
          <p>Premium Houses</p>
          <p>Best place</p>
        </div>
        <div className={styled.socials}>
          <h3>Social</h3>
          <p>facebook</p>
          <p>twitter</p>
          <p>instagram</p>
          <p>linkedin</p>

        </div>
      </div>
      <div className={styled.copyright}>© COPY RIGHT RESERVED BY DURGA REAL ESTATE</div>
    </>
  );
};

export default Footer;
