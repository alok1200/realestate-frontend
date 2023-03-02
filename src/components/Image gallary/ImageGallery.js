import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import style from  "./ImageGallery.module.css"

function ImageGallery({isOpen, set, image}) {
  return (
    isOpen ? <div className={style.container}>
        <FontAwesomeIcon icon={faXmark} onClick={() => set(false)}/>
        <div className={style.wrapper}>
            <div className={style.imagesWrapper}>
                {image.map(i => {
                    return <div className={style.imageWrapper}><img className={style.img} src={i}/></div>
                })}
            </div>
        </div>
    </div> : null
  )
}

export default ImageGallery