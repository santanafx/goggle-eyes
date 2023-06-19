import React from 'react'
import styles from './Goggles.module.css'
import { Context } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom';

export const Goggles = () => {

    const { data } = React.useContext(Context);
    const navigate = useNavigate();

    return (
        <section>
            {data !== undefined ?
                <>
                    <div className={styles.gogglesTitle}>
                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maximus orci ac condi mentum efficitur. Suspendi potenti.</h1>
                    </div>
                    <div className={styles.gogglesImgsContainer}>
                        <div onClick={() => navigate('/collection/swimmingGoggles')}>
                            <img src='/images/swimming-goggles.webp' alt="Swimming goggles." />
                            <span>Swimming goggles ({data[0].items.length})</span>
                        </div>
                        <div onClick={() => navigate('/collection/sunGlasses')}>
                            <img src='/images/sunglasses.webp' alt="Sunglasses." />
                            <span>Sunglasses ({data[1].items.length})</span>
                        </div>
                        <div onClick={() => navigate('/collection/eyeGlasses')}>
                            <img src='/images/eye-glasses.webp' alt="Eye glasses." />
                            <span>Eye glasses ({data[2].items.length})</span>
                        </div>
                        <div onClick={() => navigate('/collection/divingGlasses')}>
                            <img src='/images/diving-glasses.webp' alt="Diving glasses." />
                            <span>Diving glasses ({data[3].items.length})</span>
                        </div>
                        <div onClick={() => navigate('/collection/brandedGlasses')}>
                            <img src='/images/brandedglasses.webp' alt="Branded glasses." />
                            <span>Branded ({data[4].items.length})</span>
                        </div>
                    </div></> : ''}
        </section>
    )
}
