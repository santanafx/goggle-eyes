import React from 'react'
import styles from './Featured.module.css'
import { Context } from '../context/GlobalContext'

export const Featured = () => {

    const { data } = React.useContext(Context);

    return (
        <>{data !== undefined ?
            <section className={styles.featuredContainerBg}>
                <div className={styles.featuredContainerTop}>
                    <h1>Featured Products</h1>
                    <span>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum efficitur. Suspendi potenti. Fusce diam felis.</span>
                </div>
                <div className={styles.featuredContainerBottom}>
                    <div>
                        <img src={data[0].brandedGlasses[0].image} alt="" />
                        <h2>{data[0].brandedGlasses[0].name}</h2>
                        <span>{data[0].brandedGlasses[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].divingGlasses[0].image} alt="" />
                        <h2>{data[0].divingGlasses[0].name}</h2>
                        <span>{data[0].divingGlasses[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].eyeGlasses[1].image} alt="" />
                        <h2>{data[0].eyeGlasses[1].name}</h2>
                        <span>{data[0].eyeGlasses[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].sunGlasses[1].image} alt="" />
                        <h2>{data[0].sunGlasses[1].name}</h2>
                        <span>{data[0].sunGlasses[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </section> : ''}
        </>
    )
}
