import React from 'react'
import styles from './Goggles.module.css'
import { Context } from '../context/GlobalContext'

export const Goggles = () => {

    const { data } = React.useContext(Context);

    return (
        <section>
            {data !== undefined ?
                <>
                    <div className={styles.gogglesTitle}>
                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maximus orci ac condi mentum efficitur. Suspendi potenti.</h1>
                    </div>
                    <div className={styles.gogglesImgsContainer}>
                        <div >
                            <img src='/images/swimming-goggles.webp' alt="Swimming goggles." />
                            <span>Swimming goggles ({data[0].items.length})</span>
                        </div>
                        <div >
                            <img src='/images/sunglasses.webp' alt="Sunglasses." />
                            <span>Sunglasses ({data[1].items.length})</span>
                        </div>
                        <div >
                            <img src='/images/eye-glasses.webp' alt="Eye glasses." />
                            <span>Eye glasses ({data[2].items.length})</span>
                        </div>
                        <div >
                            <img src='/images/diving-glasses.webp' alt="Diving glasses." />
                            <span>Diving glasses ({data[3].items.length})</span>
                        </div>
                        <div >
                            <img src='/images/brandedglasses.webp' alt="Branded glasses." />
                            <span>Branded ({data[4].items.length})</span>
                        </div>
                    </div></> : ''}
        </section>
    )
}
