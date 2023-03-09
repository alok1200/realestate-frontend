import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import style from  "./ImageGallery.module.css"

function ImageGallery({isOpen, set, image}) {
  return (
    isOpen ? <div className={style.container} onClick={() => set(false)}>
        <FontAwesomeIcon icon={faXmark} onClick={() => set(false)}/>
        <div className={style.wrapper} onClick={e => e.stopPropagation()}>
            <div className={style.imagesWrapper}>
                {image.map((i, index) => {
                    return <div className={style.imageWrapper}><img alt={`property ${index}`} className={style.img} src={i}/></div>
                })}
            </div>
        </div>
    </div> : null
  )
}

export default ImageGallery