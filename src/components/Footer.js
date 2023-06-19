import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer>
            <section className={styles.footerContainerBg}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerLogo}>
                        <img src="/images/logo.webp" alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cumque voluptas consequatur similique enim distinctio corrupti delectus aut repudiandae sapiente, porro adipisci et earum assumenda.</span>
                    </div>
                    <div className={styles.footerCustumer}>
                        <p>CUSTOMER SERVICES</p>
                        <span>Contact Us</span>
                        <span>Help And Advice</span>
                        <span>Delivery</span>
                        <span>Terms And Conditions</span>
                        <span>Refund Policy</span>
                        <span>FAQs</span>
                    </div>
                    <div className={styles.footerOpen}>
                        <p>OPEN HOURS</p>
                        <div>
                            <span>Monday To Friday</span>
                            <span>8 Am To 10 Pm</span>
                        </div>
                        <span>Saturday & Sunday</span>
                        <div>
                            <span>10 Am To 8 Pm</span>
                            <span>Holiday Is Off</span>
                        </div>
                    </div>
                    <div className={styles.footerContacts}>
                        <p>CONTACTS</p>
                        <div>
                            <BsFillTelephoneFill />
                            <span>+1 800 603 6035</span>
                        </div>
                        <div>
                            <AiOutlineMail />
                            <span>mail@domain.com</span>
                        </div>
                        <span>The Company Name Inc. 8901 Marmora
                            Road, Glasgow, D04 89GR.</span>
                    </div>
                </div>
            </section>
            <section className={styles.footerBottomBg}>
                <div className={styles.footerBottom}>
                    <span>© Goggles Eye. Theme by HasnainDEV.</span>
                    <img src="/images/bank.png" alt="Banks." />
                </div>
            </section>
        </footer>
    )
}
