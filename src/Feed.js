import React from 'react'
import StoryReel from './StoryReel';
import "./Feed.css"
import MessageSender from "./MessageSender";
import Post from './Post.js';
const Feed = () => {
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        <Post profilePic="https://pbs.twimg.com/media/E-Msv39XIAAXkbJ.jpg"
        message="Hy"
        timestamp="TImestapm"
        username="Parizad"
        image="https://pbs.twimg.com/media/E-Msv39XIAAXkbJ.jpg"/>
         <Post profilePic="https://pbs.twimg.com/media/E-Msv39XIAAXkbJ.jpg"
        message="Everyone is full of greed."
        timestamp="TImestapm"
        username="Parizad"
        />

    </div>
  )
}

export default Feed