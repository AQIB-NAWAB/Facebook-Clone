import React from 'react';
import './Sponsored.css'

const Sponsored = ({image,title,discription}) => {
  return (
    <div className='sponsored_container'>
        <div className='image_sponsored'>
            <img src={image} alt="brand"/>
        </div>
        <div className='info_sponsored'>
            <h4>{title}</h4>
            <p>{discription}</p>

        </div>

    </div>
  )
}

export default Sponsored