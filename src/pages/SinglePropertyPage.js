import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from "../components/NavBar.js"
import style from "./SinglePropertyPage.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed , faPeopleRobbery, faHome} from '@fortawesome/free-solid-svg-icons'

function SinglePropertyPage() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/property/${id}`)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])


  return (
    <>
      <NavBar/>
      <div className={style.container}>
        <div className={style.topSection}>
          <div className={style.left}>
            <FontAwesomeIcon icon={faHome}/>
            Rent
          </div>
          <div className={style.middle}>
            <p style={{fontSize: "1.3rem", fontWeight: 600}}>1 BHK Flat For Rent In Rajaji Nagar</p>
            <p>Standalone building, Dr Rajkumar Rd near Orion Mall</p>
          </div>
          <div className={style.right}>
            <button>Contect Owner</button>
          </div>
        
        </div>

        <div className={style.wrapper}>
          <div className={style.imagesContainer}>
            <div className={style.leftImage}>
              <img className={style.img} src='https://images.nobroker.in/images/ff8081816ce31ed2016ce7b8f38447a2/ff8081816ce31ed2016ce7b8f38447a2_4185_469390_large.jpg'></img>
            </div>
            <div className={style.rightImage}>
              <img className={style.img} src='https://images.nobroker.in/images/ff8081816ce31ed2016ce7b8f38447a2/ff8081816ce31ed2016ce7b8f38447a2_60362_828529_large.jpg'></img>
              <img className={style.img} src='https://images.nobroker.in/images/ff8081816ce31ed2016ce7b8f38447a2/ff8081816ce31ed2016ce7b8f38447a2_4698_320949_large.jpg'></img>
            </div>
          </div>

          <div className={style.infoContainer}>
            <div className={style.infoWrapper}>

              <div className={style.leftInfo}>
                <div className={style.singleInfo}>
                <FontAwesomeIcon icon={faBed}/>
                  <div>
                    <p>Size</p>
                    <span>1200</span>
                  </div>
                </div>

                <div className={style.singleInfo}>
                  <FontAwesomeIcon icon={faPeopleRobbery}/>
                  <div>
                    <p>price</p>
                    <span>3 cr</span>
                  </div>
                </div>
              </div>
              
              <div className={style.rightInfo}>
                <div className={style.singleInfo}>
                <FontAwesomeIcon icon={faPeopleRobbery}/>
                <div>
                  <p>Crime Rate</p>
                  <span>0.5%</span>
                </div>
                </div>
                <div className={style.singleInfo}>
                <FontAwesomeIcon icon={faPeopleRobbery}/>
                <div>
                  <p>Population</p>
                  <span>1600</span>
                </div>
                </div>
              </div>

            </div>
            <button>Get owner details</button>
          </div>
        </div>
        </div>
      </>
      )
}

      export default SinglePropertyPage