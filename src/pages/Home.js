import React from 'react'
import { Slider } from '../components/Slider';
import { InformationBar } from '../components/InformationBar';
import { Goggles } from '../components/Goggles';

export const Home = () => {

    const slides = [
        { url: './images/slide1.webp', card: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum hic rem corporis, esse dolor rerum ab unde quasi non id nihil possimus aliquid quibusdam veniam! Nesciunt commodi est facere?' },
        { url: './images/slide2.webp', card: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum hic rem corporis, esse dolor rerum ab unde quasi non id nihil possimus aliquid quibusdam veniam! Nesciunt commodi est facere?' },
        { url: './images/slide3.webp', card: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum hic rem corporis, esse dolor rerum ab unde quasi non id nihil possimus aliquid quibusdam veniam! Nesciunt commodi est facere?' },
    ]

    return (
        <main>
            <Slider slides={slides} />
            <InformationBar />
            <Goggles />
        </main>
    )
}
