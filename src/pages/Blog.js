import React from 'react'
import styles from './Blog.module.css'

export const Blog = () => {

    return (
        <section>
            <div className={styles.blogTopContainer}>
                <img src="/images/slide1.webp" alt="Imagem mulher de óculos." />
                <div className={styles.blogBlueLayer}></div>
                <div className={styles.blogText}>
                    <h1>Blog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, eaque rerum nobis dolorem consequuntur, cum deserunt quae.</p>
                </div>
            </div>
            <div className={styles.blogBottomContainer}>
                <div className={styles.blogBottomContainerSubDiv}>
                    <div>
                        <img src="/images/professional-swimmer.webp" alt="Nadador profissional." />
                    </div>
                    <p>Professional swimmer training in goggles</p>
                    <button>LEARN MORE</button>
                </div>
                <div className={styles.blogBottomContainerSubDiv}>
                    <div>
                        <img src="/images/laboratory-worker.webp" alt="Cientista de laboratório." />
                    </div>
                    <p>Goggles & mask for laboratory workers</p>
                    <button>LEARN MORE</button>
                </div>
                <div className={styles.blogBottomContainerSubDiv}>
                    <div>
                        <img src="/images/protective-goggles.webp" alt="Óculos protetor." />
                    </div>
                    <p>Best protective goggles to use</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </section>
    )
}
