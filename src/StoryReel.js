import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel = () => {
  return (
    <div className='storyReel'>
        <Story profileSrc="images/imran.jpg" title="Imran Khan" image="images/story.jpg"/>
        <Story profileSrc="images/imran.jpg" title="Imran Khan" image="images/story.jpg"/>
        <Story profileSrc="images/imran.jpg" title="Imran Khan" image="images/story.jpg"/>
        <Story profileSrc="images/imran.jpg" title="Imran Khan" image="images/story.jpg"/>
        <Story profileSrc="images/imran.jpg" title="Imran Khan" image="images/story.jpg"/>
    </div>
  )
}

export default StoryReel