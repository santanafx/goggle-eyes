import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineCaretDown } from "react-icons/ai";
import logo from '../images/logo.webp'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header>
            <div className={styles.headerContainerTop}>
                <p>END OF SEASON SALE - UP TO 80% OFF</p>
            </div>
            <div className={styles.headerContainerBottom}>
                <div className={styles.headerLogo}>
                    <img src={logo} alt="Logo from goggle eyes" />
                </div>
                <nav className={styles.headerMenu}>
                    <div>
                        <a href="/#">HOME</a>
                    </div>
                    <div>
                        <a href="/#">PAGES</a>
                        <AiOutlineCaretDown />
                    </div>
                    <div>
                        <a href="/#">SHOP</a>
                        <AiOutlineCaretDown />
                    </div>
                    <div>
                        <a href="/#">SINGLE SALE</a>
                    </div>
                    <div>
                        <a href="/#">SALE</a>
                    </div>
                </nav>
                <div className={styles.headerUserSettings}>
                    <AiOutlineUser size='25' />
                    <div>
                        <AiOutlineShoppingCart size='25' />
                        <p>0</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
