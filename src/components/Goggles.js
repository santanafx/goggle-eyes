import React from 'react'
import styles from './Goggles.module.css'

export const Goggles = () => {
    return (
        <section>
            <div className={styles.gogglesTitle}>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maximus orci ac condi mentum efficitur. Suspendi potenti.</h1>
            </div>
            <div className={styles.gogglesImgsContainer}>
                <div>
                    <img src="./images/swimming-goggles.webp" alt="Swimming goggles." />
                    <span>Swimming goggles (2)</span>
                </div>
                <div>
                    <img src="./images/sunglasses.webp" alt="Sunglasses." />
                    <span>Sunglasses (2)</span>
                </div>
                <div>
                    <img src="./images/eye-glasses.webp" alt="Eye glasses." />
                    <span>Eye glasses (2)</span>
                </div>
                <div>
                    <img src="./images/diving-glasses.webp" alt="Diving glasses." />
                    <span>Diving glasses (2)</span>
                </div>
                <div>
                    <img src="./images/brandedglasses.webp" alt="Branded glasses." />
                    <span>Branded (2)</span>
                </div>
            </div>
        </section>
    )
}
