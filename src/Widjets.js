import React from 'react';
import './Widjets.css';
import Sponsored from './Sponsored.js';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { IconButton } from '@mui/material';
import ContactRow  from "./ContactRow"

const Widjets = () => {
  return (
    <div className='widjets'>

        <div className='sponsored'>
            <h3>Sponsored</h3>
            <Sponsored image="https://www.lcca.org.uk/media/574173/brand.jpg" title="Gucci" discription="Gucci.com"/>
             <Sponsored image="https://www.lcca.org.uk/media/574173/brand.jpg" title="Gucci" discription="Gucci.com"/>
        </div>
        <br></br>
        <hr></hr>
        <div className='contacts'>
            <div className='contact_top'>
                <h3>Contacts</h3>
                <div className='contact_icons'>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                </div>
            </div>
            <div className='contact_container'>
                    <ContactRow imgSrc="images/imran.jpg" name="AQIB"/>
                    <ContactRow imgSrc="https://lollywoodcity.com/wp-content/uploads/2022/04/imranashrafawan_277888449_291424923151339_5845325698322169296_n-819x1024.jpg" name="USMAN"/>
                    <ContactRow imgSrc="https://pbs.twimg.com/profile_images/1593530026120577026/Gsz_yUyL_400x400.jpg" name="رانا احسان خاں"/>
                    <ContactRow imgSrc="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/09/24/Pictures/hindustan-khoobsurat-promotion-september-bollywood-exclusive-interview_d410fb84-8226-11e6-a0d9-e435f3f63e15.JPG" name="HAMZA"/>
                    <ContactRow imgSrc="https://www.parhlo.com/wp-content/uploads/2019/04/business-recorder-370x297.jpg.webp" name="HAFIZ"/>
                    <ContactRow imgSrc="images/imran.jpg" name="NOUMAN"/>
                    <ContactRow imgSrc="https://lollywoodcity.com/wp-content/uploads/2022/04/imranashrafawan_277888449_291424923151339_5845325698322169296_n-819x1024.jpg" name="USMAN"/>
                    <ContactRow imgSrc="https://pbs.twimg.com/profile_images/1593530026120577026/Gsz_yUyL_400x400.jpg" name="رانا احسان خاں"/>
                    <ContactRow imgSrc="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/09/24/Pictures/hindustan-khoobsurat-promotion-september-bollywood-exclusive-interview_d410fb84-8226-11e6-a0d9-e435f3f63e15.JPG" name="HAMZA"/>
                    <ContactRow imgSrc="https://www.parhlo.com/wp-content/uploads/2019/04/business-recorder-370x297.jpg.webp" name="HAFIZ"/>
                    <ContactRow imgSrc="images/imran.jpg" name="NOUMAN"/>
                    <ContactRow imgSrc="https://lollywoodcity.com/wp-content/uploads/2022/04/imranashrafawan_277888449_291424923151339_5845325698322169296_n-819x1024.jpg" name="USMAN"/>
                    <ContactRow imgSrc="https://pbs.twimg.com/profile_images/1593530026120577026/Gsz_yUyL_400x400.jpg" name="رانا احسان خاں"/>
                    <ContactRow imgSrc="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/09/24/Pictures/hindustan-khoobsurat-promotion-september-bollywood-exclusive-interview_d410fb84-8226-11e6-a0d9-e435f3f63e15.JPG" name="HAMZA"/>
                    <ContactRow imgSrc="https://www.parhlo.com/wp-content/uploads/2019/04/business-recorder-370x297.jpg.webp" name="HAFIZ"/>
                    <ContactRow imgSrc="images/imran.jpg" name="NOUMAN"/>
                </div>
                <br></br>
                <hr></hr>
                <div className='group_conservation'>
                    <h3>Group conversations</h3>
                    <div className='group_conservation_inner'>
                    <IconButton>
                    <AddIcon/>
                </IconButton>
                <h3>Create New Group</h3>

                    </div>

                </div>


        </div>

    </div>
  )
}

export default Widjets