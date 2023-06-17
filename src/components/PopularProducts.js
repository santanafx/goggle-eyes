import React from 'react'
import styles from "./PopularProducts.module.css"
import { Context } from '../context/GlobalContext';

export const PopularProducts = () => {

    const { data } = React.useContext(Context);

    return (
        <>{data !== undefined ?
            <section className={styles.popularContainerBg}>
                <div className={styles.popularContainerTop}>
                    <h1>Popular Products</h1>
                    <span>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum efficitur. Suspendi potenti. Fusce diam felis.</span>
                </div>
                <div className={styles.popularContainerBottom}>
                    <div>
                        <img src={data[0].brandedGlasses[0].image} alt="" />
                        <h2>{data[0].brandedGlasses[0].name}</h2>
                        <span>{data[0].brandedGlasses[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].brandedGlasses[1].image} alt="" />
                        <h2>{data[0].brandedGlasses[1].name}</h2>
                        <span>{data[0].brandedGlasses[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].divingGlasses[0].image} alt="" />
                        <h2>{data[0].divingGlasses[0].name}</h2>
                        <span>{data[0].divingGlasses[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].divingGlasses[1].image} alt="" />
                        <h2>{data[0].divingGlasses[1].name}</h2>
                        <span>{data[0].divingGlasses[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].eyeGlasses[1].image} alt="" />
                        <h2>{data[0].eyeGlasses[1].name}</h2>
                        <span>{data[0].eyeGlasses[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].eyeGlasses[0].image} alt="" />
                        <h2>{data[0].eyeGlasses[0].name}</h2>
                        <span>{data[0].eyeGlasses[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].sunGlasses[1].image} alt="" />
                        <h2>{data[0].sunGlasses[1].name}</h2>
                        <span>{data[0].sunGlasses[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[0].sunGlasses[0].image} alt="" />
                        <h2>{data[0].sunGlasses[0].name}</h2>
                        <span>{data[0].sunGlasses[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </section> : ''}
        </>
    )
}
