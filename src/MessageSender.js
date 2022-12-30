import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Post from './Post';

const MessageSender = () => {
    const[input,setInput]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const btn=document.getElementById("btn")
    const handelSubmit=(e)=>{
        e.preventDefault();
        setImageUrl("")
        setInput("");
        return(
            <>
            <Post message={input}/>
            </>
        )
    }
  return (
  <>
    <div className='messageSender'>
        <div className='messageSender_top'>
             <Avatar/>
             <form>
                <input type="text" placeholder="What's on your mind"value={input} onChange={(e)=>setInput(e.target.value)} />
                <input placeholder='image URL (Optional)' value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
                <button onClick={handelSubmit} id="btn" type="submit">Hidden Submit</button>
             </form>
        </div>
        <div className='messageSender_bottom'>
            <div className='messageSender_option'>
                <VideocamIcon style={{color:"red"}}/>
                <h4>Live Video</h4>
            </div>
            <div className='messageSender_option'>
                <AddToPhotosIcon style={{color:"green"}}/>
                <h4>Photo/Video</h4>
            </div>
            <div className='messageSender_option'>
                <InsertEmoticonIcon style={{color:"orangered"}}/>
                <h4>Feeling /Activity</h4>
            </div>

        </div>

    </div>
    {input==""||imageUrl==""?null:<Post message={input} image={imageUrl}/>}

  </>

  
  )
}

export default MessageSender