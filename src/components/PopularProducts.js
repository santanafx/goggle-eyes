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
                        <img src={data[4].items[0].image} alt="" />
                        <h2>{data[4].items[0].name}</h2>
                        <span>{data[4].items[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[4].items[1].image} alt="" />
                        <h2>{data[4].items[1].name}</h2>
                        <span>{data[4].items[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[3].items[0].image} alt="" />
                        <h2>{data[3].items[0].name}</h2>
                        <span>{data[3].items[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[3].items[1].image} alt="" />
                        <h2>{data[3].items[1].name}</h2>
                        <span>{data[3].items[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[2].items[1].image} alt="" />
                        <h2>{data[2].items[1].name}</h2>
                        <span>{data[2].items[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[2].items[0].image} alt="" />
                        <h2>{data[2].items[0].name}</h2>
                        <span>{data[2].items[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[1].items[1].image} alt="" />
                        <h2>{data[1].items[1].name}</h2>
                        <span>{data[1].items[1].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                    <div>
                        <img src={data[1].items[0].image} alt="" />
                        <h2>{data[1].items[0].name}</h2>
                        <span>{data[1].items[0].price}</span>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </section> : ''}
        </>
    )
}
