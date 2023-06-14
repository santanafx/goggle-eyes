import React from 'react'
import styles from './InformationBar.module.css'
import { TbTruckDelivery, TbCash } from "react-icons/tb";
import { RiCustomerService2Fill, RiGift2Fill } from "react-icons/ri";

export const InformationBar = () => {
    return (
        <div className={styles.informationBarBg}>
            <div className={styles.informationBarContainer}>
                <div className={styles.informationBarDescription}>
                    <TbTruckDelivery size='40' />
                    <div className={styles.informationBarText}>
                        <p>Free Delivery</p>
                        <span>on order over $150</span>
                    </div>
                </div>
                <div className={styles.informationBarDescription}>
                    <TbCash size='40' />
                    <div className={styles.informationBarText}>
                        <p>Refund Guarantee</p>
                        <span>on order over $150</span>
                    </div>
                </div>
                <div className={styles.informationBarDescription}>
                    <RiCustomerService2Fill size='40' />
                    <div className={styles.informationBarText}>
                        <p>24/7 support</p>
                        <span>Efficient Customer care</span>
                    </div>
                </div>
                <div className={styles.informationBarDescription}>
                    <RiGift2Fill size='40' />
                    <div className={styles.informationBarText}>
                        <p>Discounts Available</p>
                        <span>Use our coupon codes</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
