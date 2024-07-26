import React from 'react'
import styles from '../../style/Header.module.css'
import SearchIcon from "../../assets/icons/magnifying-glass.png"
import Language from "../../assets/icons/internet.png"
import MenuIcon from "../../assets/icons/menu.png"
import UserIcon from "../../assets/icons/user.png"
import CrossIcon from "../../assets/icons/cross.png"
import AppIcon from "../../assets/icons/app.png"
const Header = () => {
    return (
        <>
            <div>

                <div className={styles.header}>
                    <div className={styles.navbar}>
                        <div className={styles.navbarElement1}>
                            <h3 id={styles.cursor_pointer}>Anywhere</h3>
                            <span className={styles.vertical_line}></span>
                            <h3 id={styles.cursor_pointer}>Any week</h3>
                            <span className={styles.vertical_line}></span>
                            <h3 id={styles.cursor_pointer} className={styles.nav_item_3}>Add guest</h3>
                            <img id={styles.searchIcon} src={SearchIcon} alt='searchIcon' />
                        </div>
                        <div className={styles.navbarElement2}>
                            <img id={styles.languageIcon} src={Language} alt="language" />
                            <div className={styles.userMenu}>
                                <img id={styles.menuIcon} src={MenuIcon} alt="menu" />
                                <img id={styles.userIcon} src={UserIcon}alt="user" />
                            </div>
                        </div>




                    </div>
                </div>




                <div className={styles.header2}>
                    <div className={styles.left_side_header}>
                        <img id={styles.hostedIcon} src={CrossIcon} alt="cross" />
                        <img id={styles.mediumIcon} src={AppIcon} alt="app" />
                        <div className={styles.getApp}>
                            <h5>Get the app</h5>
                            <h6 id={styles.secondary_text_color}>The fastest,easiest way</h6>
                        </div>

                    </div>
                    <button id={styles.useApp}>USE APP</button>
                </div>
            </div>


        </>
    )
}

export default Header