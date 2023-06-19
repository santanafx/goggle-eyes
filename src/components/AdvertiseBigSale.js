import React from 'react'
import styles from './AdvertiseBigSale.module.css'
import { Clock } from './Clock'


export const AdvertiseBigSale = () => {
    return (
        <section>
            <div className={styles.advertiseBigSaleContainer}>
                <div className={styles.advertiseBigSaleBanner}>
                    <img src="/images/bigsale1.webp" alt="Banner da grande venda." />
                    <div className={styles.advertiseDarkBg}></div>
                    <div className={styles.advertiseBigSaleNumb}>
                        <div>
                            <div>
                                <h1>BIG SALE</h1>
                                <span>UP TO 35% OFF</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.advertiseBigSaleClock}>
                    <img src="/images/bigsale2.webp" alt="Banner da grande venda." />
                    <div className={styles.advertiseDarkBg}></div>
                    <div className={styles.advertiseBigSaleCount}>
                        <div>
                            <div className={styles.advertiseBigSaleCountText}>
                                <span>SUMMER SALE</span>
                                <h1>DEAL OF THE DAY</h1>
                            </div>
                            <Clock />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
