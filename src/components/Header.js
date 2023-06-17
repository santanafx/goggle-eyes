import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineCaretDown, AiOutlineClose } from "react-icons/ai";
import styles from './Header.module.css'

export const Header = () => {
    const [menuPagesActive, setMenuPagesActive] = React.useState(false);
    const [menuShopActive, setMenuShopActive] = React.useState(false);
    const [menuCartActive, setMenuCartActive] = React.useState(false);

    return (
        <header>

            <div className={styles.headerContainerTop}>
                <p>END OF SEASON SALE - UP TO 80% OFF</p>
            </div>
            <div className={styles.headerContainerBottom}>
                <div className={styles.headerLogo}>
                    <img src='./images/logo.webp' alt="Logo from goggle eyes" />
                </div>
                <nav className={styles.headerMenu}>
                    <div>
                        <a href="/#">HOME</a>
                    </div>
                    <div className={styles.headerMenuPages} onMouseEnter={() => setMenuPagesActive(!menuPagesActive)} onMouseLeave={() => setMenuPagesActive(!menuPagesActive)}>
                        <a href="/#">PAGES</a>
                        <AiOutlineCaretDown />
                        {menuPagesActive ?
                            <div className={styles.dropDownMenuPages}>
                                <a href="/#">ABOUT</a>
                                <a href="/#">BLOG</a>
                            </div>
                            : ''}
                    </div>
                    <div className={styles.headerMenuShop} onMouseEnter={() => setMenuShopActive(!menuShopActive)} onMouseLeave={() => setMenuShopActive(!menuShopActive)}>
                        <a href="/#">SHOP</a>
                        <AiOutlineCaretDown />
                        {menuShopActive ?
                            <div className={styles.dropDownMenuShop}>
                                <a href="/#">CART</a>
                                <a href="/#">CHECKOUT</a>
                            </div>
                            : ''}
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
                        <AiOutlineShoppingCart size='25' onClick={() => setMenuCartActive(!menuCartActive)} />
                        <p>0</p>
                    </div>
                </div>
            </div>
            {menuCartActive ? <>
                <div className={styles.headerDarkMenu}></div>
                <div className={styles.sideBarMenu}>
                    <AiOutlineClose size='25' onClick={() => setMenuCartActive(!menuCartActive)} />
                </div>
            </> : ''}
        </header>
    )
}
