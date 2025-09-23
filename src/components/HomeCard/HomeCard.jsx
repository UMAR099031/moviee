import React from 'react'
import './HomeCard.css'
import { useNavigate } from 'react-router-dom'
import { imgURL } from '../../components/constants/index'

const HomeCard = (props) => {
  const { title, poster_path, id } = props.movie
  const navigate = useNavigate()
  
  const goDetailPage = () => navigate(`/ticket/${id}`)

  return (
    <div className='form-wrapper'>
      <div className='div-2'>
        <div className='card' onClick={goDetailPage} style={{ cursor: "pointer" }}>
          <img width={250} height={375} src={imgURL + poster_path} alt={title} />
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
