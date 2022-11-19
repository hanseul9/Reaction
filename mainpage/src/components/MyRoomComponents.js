import React,{Component}from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styles from './MyRoomComponents.module.css';

class MyRoomComponents extends Component {
    static defaultProps = {
        usrename: "profile",
        email: "email",
        etc: "etc"
    }
    render() {
        return (
        <body className ={styles.SITE_CONTAINER}>
            <div className ="MAIN">
                <div className = {styles.TOP_CONTAINER}>
                    <h1 className={styles.H1_STYLE_LOGIN}><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">Login</NavLink></h1>
                    <h1 className={styles.H1_STYLE_MENU_MAP}><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/map">Map</NavLink></h1>
                    <h1 className={styles.H1_STYLE_MENU_SIDEBAR}><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/sidebar">Side Bar</NavLink></h1>
                    <div className={styles.TOP_BUTTON_CONTAINER}>
                        <NavLink to="/"><img className={styles.TOP_BUTTON_IMG} alt="homebutton" src="images/homebutton.gif" fetchpriority="high"/></NavLink>
                    </div>
                </div>
                <div className={styles.MAIN_CONTAINER}>
                    <div className={styles.PROFILE}>
                    <img className={styles.PROFILE_IMG} alt="profileImg" src="images/profile.png" fetchpriority="high"/>
                    <h1 className={styles.PROFILE_USERNAME}>{this.props.username}</h1>
                    <div className={styles.PROFILE_EDIT}><h1 className={styles.PROFILE_EDIT_WORD}>edit profile</h1></div>
                    </div>

                    <div className={styles.MENU_SELECT}>Profile</div>
                    <div className={styles.MENU_1}>My Review</div>
                    <div className={styles.MENU_2}>Setting</div>
                    <div className={styles.MENU_3}>Notification</div>
                    <div className={styles.PROFILE_MAIN}>
                        <h1 className={styles.PROFILE_MAIN_PROFILE}>profile</h1>
                        <h1 className={styles.PROFILE_MAIN_USERNAME}>username : {this.props.username}<br></br>
                        email: { this.props.email}</h1>
                        <hr></hr>
                        <h1 className={styles.PROFILE_MAIN_ETC}>etc</h1>
                        <h1 className={styles.PROFILE_MAIN_ETC_WORD}>: {this.props.etc}</h1>
                    </div>
                </div>
                <div className={styles.BOTTOM_CONTAINER}>
                    <img className={styles.BOTTOM_BUTTON_IMG} alt='bottombutton' src="images/bottombutton.gif" fetchpriority="high"/>
                    <span className={styles.BOTTOM_SPAN}>©2022 Team Re:action Production</span>
                </div>
            </div>
        </body>
            
                );
            }           
}

export default MyRoomComponents;