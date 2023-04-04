import styled from './AddProperty.module.css';
import React, { useState } from 'react'

function AddProperty() {
    const [formData, setFormData] = useState()
    const [add, setAdd] = useState()
    const [cord, setCord] = useState()

    const handleDataChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(p => ({...p, [name]: value}))
    }
    const handleadd = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log({name,value})
        setAdd(p => ({...p, [name]: value}))
    }
    const handlecord = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCord(p => ({...p, [name]: value}))
    }

    const handeSubmit = (e) => {
        e.preventDefault();
        const finaldata = {...formData, address: {...add, cord: {...cord}}}
        console.log(finaldata)
    }
  return (
    <div className={styled.container}>
        <div className={styled.wrapper}>
            <h1>Add properties</h1>
            <form className={styled.form} onSubmit={handeSubmit}>
                <div className={styled.inputWrapper}>
                    <lable for="title">Title</lable>
                    <input name="title" type="text" placeholder='Enter title' required onChange={handleDataChange}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="description">description</lable>
                    <input id="description" name="description" type="text" placeholder='Enter description' required onChange={handleDataChange}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="image">image</lable>
                    <lable for="image"></lable>
                    <input id="image" name="image" type="text" placeholder='Enter image' required onChange={handleDataChange}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="size">size</lable>
                    <input id="size" name="size" type="text" placeholder='Enter size' required onChange={handleDataChange}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="population">population</lable>
                    <input id="population" name="population" type="text" placeholder='Enter population' required onChange={handleDataChange}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="crimeRate">crimeRate</lable>
                    <input id="crimeRate" name="crimeRate" type="text" placeholder='Enter crimeRate' required onChange={handleDataChange}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="category">category</lable>
                    <input id="category" name="category" type="text" placeholder='Enter category' required onChange={handleDataChange}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="price">price</lable>
                    <input id="price" name="price" type="text" placeholder='Enter price' required onChange={handleDataChange}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="city">city</lable>
                    <input id="city" name="city" type="text" placeholder='Enter city' required onChange={handleadd}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="area">area</lable>
                    <input id="area" name="area" type="text" placeholder='Enter area' required onChange={handleadd}/>
                </div>
                <div  className={styled.inputWrapper}>
                    <lable for="latitude">latitude</lable>
                    <input id="latitude" name="latitude" type="text" placeholder='Enter latitude' required onChange={handlecord}/>
                </div>
                <div className={styled.inputWrapper}>
                    <lable for="longitude">longitude</lable>
                    <input id="longitude" name="longitude" type="text" placeholder='Enter longitude' required onChange={handlecord}/>
                </div>
                <div className={styled.inputWrapper}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddProperty