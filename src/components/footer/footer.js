import React from "react";
import footer from './footer.css'

export const footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send file">
            <div className="text">
              <h1>Do you want any help</h1>
              <p>ther is something</p>
              <button className="btn5">contact as Today</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="Container">
          <div className="box">
            <div className="logo">
              <img src="ter is some thing" alt="logo" />
              <h2>taking some contant</h2>
              <p>ther has some contant</p>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <input type="text" placeholder="Email adderess" name="id=" />
        <button>click to anather information</button>
      </div>
      {footer.map((val) => (
        <div className="box">
          <h3>{Values.text}</h3>
          <ul>
            {values.text.map((item) =>(
              <li>{user.list}</li>
            ))
            }
          </ul>
        </div>
      ))}
      <div className="ligal">
        <span>

        </span>
      </div>
    </>
  );
};
