import React from 'react'
import { Slider } from '../components/Slider';

export const Home = () => {

    const slides = [
        { url: './images/slide1.webp' },
        { url: './images/slide2.webp' },
        { url: './images/slide3.webp' },
    ]

    return (
        <main>
            {console.log(slides.length)}
            <Slider slides={slides} />
        </main>
    )
}
