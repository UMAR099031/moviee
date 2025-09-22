import React from 'react'
import './HomeCard.css'



const imgURL = "https://image.tmdb.org/t/p/original"
const  HomeCard = (props) => {
    const {title,poster_path} = props.movie

  return (
    <div className='form-wrapper'>
    <div className='div-2'>
    <div className='card'>
        <img width={250} height={375} src={imgURL + poster_path} alt="" />
        <h5>{title}</h5>
    </div>

    </div>

    </div>

  )
}

export default  HomeCard