import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="data:image/jpeg;base64,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" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avtar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">  
               <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2.543</p>
               </div> 

               <div className="sidebar__stat">
                <p>Who viewed post</p>
                <p className="sidebar__statNumber">2.448</p>
               </div> 
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwearengineering')}
                {recentItem('design')}
                {recentItem('developer')}

            </div>
            
            

        </div>
    )
}

export default Sidebar;
