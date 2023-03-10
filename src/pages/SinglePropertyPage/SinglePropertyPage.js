import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from "../../components/NavBar.js"
import style from "./SinglePropertyPage.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPeopleRobbery, faHome, faHandHoldingDollar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import ImageGallery from '../../components/Image gallary/ImageGallery.js'

function SinglePropertyPage() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const [property, setProperty] = useState()
  const [isImagesOpen, setIsImagesOpen] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/property/${id}`)
        setProperty(data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [id])

  console.log(property)


  return (
    <>
      <NavBar />
      {property ?
        <div className={style.container}>
          <div className={style.topSection}>
            <div className={style.left}>
              <FontAwesomeIcon icon={faHome} />
              {property.category}
            </div>
            <div className={style.middle}>
              <p style={{ fontSize: "1.3rem", fontWeight: 600 }}>{property.title}</p>
              <p>{`${property.address.area}, ${property.address.city}, india`}</p>
            </div>
            <div className={style.right}>
              <button className={style.btn}>Contect Owner</button>
            </div>

          </div>

          <div className={style.wrapper}>
            <div className={style.imagesContainer}>
              <div className={style.leftImage} >
                <img alt="property" className={`${style.img} ${style.fullImg}`} src={property.image[0]}></img>
                <img alt="property" className={style.img} src={property.image[0]}></img>
              </div>
              <div className={style.rightImage}>
                <img alt="property" className={style.img} src={property.image[1]}></img>
                <div style={{ backgroundImage: `url(${property.image[2]})` }} className={`${style.img} ${style.last}`} src={property.image[2]} onClick={() => setIsImagesOpen(true)}>
                  <div className={style.overl}>
                    <p>{`+${property.image.length - 2}`}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.infoContainer}>
              <div className={style.infoWrapper}>

                <div className={style.leftInfo}>
                  <div className={style.singleInfo}>
                    <FontAwesomeIcon icon={faBed} />
                    <div>
                      <p>Size</p>
                      <span>{property.size}</span>
                    </div>
                  </div>

                  <div className={style.singleInfo}>
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                    <div>
                      <p>price</p>
                      <span>{property.price}</span>
                    </div>
                  </div>
                </div>

                <div className={style.rightInfo}>
                  <div className={style.singleInfo}>
                    <FontAwesomeIcon icon={faPeopleRobbery} />
                    <div>
                      <p>Crime Rate</p>
                      <span>{property.crimeRate}</span>
                    </div>
                  </div>
                  <div className={style.singleInfo}>
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    <div>
                      <p>Population</p>
                      <span>{property.population}</span>
                    </div>
                  </div>
                </div>

              </div>
              <button className={style.btn}>Get owner details</button>
            </div>
          </div>
        </div>
        : null}
      <ImageGallery isOpen={isImagesOpen} set={setIsImagesOpen} image={property?.image} />

      <iframe
        width="100%"
        height="500px"
        src="https://maps.google.com/maps?q=+19.228196+,+72.858660+&hl=en&z=20&amp;output=embed"
      />
      

    </>
  )
}

export default SinglePropertyPage