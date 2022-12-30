import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src='images/logo.png' alt='pak'/>
            <div className='header_input'>
                <SearchIcon/>
                <input type="text" placeholder='Search Facebook' />
            </div>
        </div>
        <div className='header_middle'>
            <div className='header_options header_options--active'>
                <HomeIcon fontSize="large"/>
            </div>
            <div className='header_options'>
                <FlagIcon fontSize="large"/>
            </div>
            <div className='header_options'>
                <SubscriptionsIcon fontSize="large"/>
            </div>
            <div className='header_options'>
                <StorefrontIcon fontSize="large"/>
            </div>
            <div className='header_options'>
                <SupervisedUserCircleIcon fontSize="large"/>
            </div>
        </div>
        <div className='header_right'>
            <div className='header_info'>
                <Avatar/>
                <h4>Developer</h4>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>

        </div>


    </div>
  )
}

export default Header;