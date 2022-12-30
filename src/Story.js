import { Avatar } from '@mui/material';
import React from 'react';
import './Story.css'

const Story = ({image,profileSrc,title}) => {
  return (
    <div className='story' style={{backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`}}>
        <Avatar className='story_avatar' src={profileSrc}/>
        <h4>{title}</h4>
    </div>
  )
}

export default Story;