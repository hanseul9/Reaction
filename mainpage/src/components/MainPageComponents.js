import React,{Component}from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styles from './MainPageComponents.module.css';
import { useDispatch, useSelector} from "react-redux";
import { set } from '../redux/setId';
import {useId} from "../idprovider";





export default function MainPageComponents() {
//        const exportId = useSelector((state) => state.id)
//        const dispatch = useDispatch();
//const {id, idSetter} = useId();
        return (
        <div className ={styles.SITE_CONTAINER}>
            <div className ={styles.BODY_CONTAINER}>
                <div className = {styles.TOP_CONTAINER}>
                    {/*<h1 className={styles.H1_STYLE_MENU_SIDEBAR}><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/sidebar">Side Bar</NavLink></h1>*/}
                    <div className={styles.TOP_BUTTON_CONTAINER}>
                        <NavLink to="/"><img className={styles.TOP_BUTTON_IMG} alt="homebutton" src="images/homebutton.gif" fetchpriority="high"/></NavLink>
                    </div>
                    <h1 className={styles.H1_STYLE_MENU_MAP}><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/map">Map</NavLink></h1>
                    <h1 className={styles.H1_STYLE_LOGIN}><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">Login</NavLink></h1>
                    {/*{{id} == "reaction@hansung.ac.kr" ? <NavLink to='/myroom/profile'><img className={styles.BUTTON_PROFILEIMG} alt="profile" src="images/profile.png" fetchpriority="high"/></NavLink> : <h1 className={styles.H1_STYLE_LOGIN}><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">Login</NavLink></h1>}*/}
                </div>
                <div className={styles.MAIN_CONTAINER}>
                    {/*<h1>{`e ${id}`}</h1>*/}
                    <img className={styles.MAIN_IMG} alt = "mainimg" src="images/image1.gif"/>
                    <h1 className={styles.H1_STYLE_MAP}>MAP</h1>
                    <h1 className={styles.H1_STYLE_FOOD}>FOOD</h1>
                    <h1 className={styles.H1_STYLE_DRINK}>DRINK</h1>
                    <h1 className={styles.H1_STYLE_SERVICE}>A service that finds restaurants through maps and leaves comments</h1>
                    <img className={styles.MAIN_IMG_ARROW} alt = "arrow" src="images/arrow.png"/>
                    <img className={styles.MAIN_IMG_ARROW_OUTWARD} alt = "arrow_outward" src="images/arrow_outward.png"/>
                </div>
                <div className={styles.BOTTOM_CONTAINER}>
                    <img className={styles.BOTTOM_BUTTON_IMG} alt='bottombutton' src="images/bottombutton.gif" fetchpriority="high"/>
                    <span className={styles.BOTTOM_SPAN}>??2022 Team Re:action Production</span>
                </div>
            </div>
        </div>
                );
    }

