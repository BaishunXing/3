import React from 'react'
import Icon from "../Images/Icon.svg";
import Dashboard from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Settings from "../Images/settings.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';

const Sidebar = () => {
    const location = useLocation();
    const [closeMenu, setCloseMenu] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClose = () => {
        setCloseMenu(!closeMenu);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className={ closeMenu == false ? 'sidebar' : 'sidebar active' }>
            <div className={ closeMenu == false ? 'logoContainer' : 'logoContainer active' }>
                <h2 className='logoText'>Income</h2>
            </div>
            <div className={ closeMenu === false ? "burgerContainer" : "burgerContainer active" }>
                <div className="burgerTrigger" onClick={() => { handleClose(); }}></div>
                <div className="burgerMenu"></div>
            </div>
            <div className={ closeMenu == false ? 'contentsContainer' : 'contentsContainer active' }>
                <ul>
                    <li className={ location.pathname === "/dashboard" ? "contentItem active" : "contentItem" }>
                        <img src={Dashboard} alt="Dashboard" className='contentIcon'/>
                        <a href='/dashboard'>Dashboard</a>
                    </li>
                    <li className={ location.pathname === "/analytics" ? "contentItem active" : "contentItem" }>
                        <img src={Transactions} alt="Transactions" className='contentIcon'/>    
                        <a href='/analytics'>Analytics</a>
                    </li>
                    <li className={ location.pathname === "/settings" ? "contentItem active" : "contentItem" }>
                        <img src={Settings} alt="Settings" className='contentIcon'/>
                        <a href='/settings'>Settings</a>
                    </li>
                    <li className="contentItem" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        <a>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar