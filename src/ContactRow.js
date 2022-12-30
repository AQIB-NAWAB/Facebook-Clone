import { Avatar } from '@mui/material'
import React from 'react';
import "./ContactRow.css"

const ContactRow = ({imgSrc,name}) => {
  return (
    <div className='contact_row'>
        <Avatar src={imgSrc}/>
        <p>{name}</p>

    </div>
  )
}

export default ContactRow