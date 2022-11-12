import React,{Component}from 'react';
import styles from './MainPageComponents.module.css';

class MainPageComponents extends Component {
    render() {
        return (
        <body className ={styles.SITE_CONTAINER}>
            <div className ="MAIN">
                <div className = {styles.TOP_CONTAINER}>
                    <div className={styles.TOP_BUTTON_CONTAINER}>
                        <img className={styles.TOP_BUTTON_IMG} alt="homebutton" src="images/homebutton.gif" fetchpriority="high"/>    
                    </div>
                </div>
                <div className={styles.MAIN_CONTAINER}>
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
                    <span className={styles.BOTTOM_SPAN}>©2022 Team Re:action Production</span>
                </div>
            </div>
        </body>
                );
    }
}

export default MainPageComponents;