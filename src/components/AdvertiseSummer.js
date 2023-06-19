import React from 'react'
import styles from "./AdvertiseSummer.module.css"

export const AdvertiseSummer = () => {
    return (
        <section>
            <div className={styles.advertiseSummerContainer}>
                <img src="/images/banner1.webp" alt="Banner venda de verão." />
                <img src="/images/banner2.webp" alt="Banner venda de verão." />
                <img src="/images/banner3.webp" alt="Banner venda de verão." />
            </div>
        </section>
    )
}
