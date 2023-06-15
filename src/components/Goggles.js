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
                        <div>
                            <img src={data[0].image} alt="Swimming goggles." />
                            <span>Swimming goggles (2)</span>
                        </div>
                        <div>
                            <img src={data[1].image} alt="Sunglasses." />
                            <span>Sunglasses (2)</span>
                        </div>
                        <div>
                            <img src={data[2].image} alt="Eye glasses." />
                            <span>Eye glasses (2)</span>
                        </div>
                        <div>
                            <img src={data[3].image} alt="Diving glasses." />
                            <span>Diving glasses (2)</span>
                        </div>
                        <div>
                            <img src={data[4].image} alt="Branded glasses." />
                            <span>Branded (2)</span>
                        </div>
                    </div></> : ''}
        </section>
    )
}
