import React from 'react'
import styles from './Slider.module.css'
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import { VscCircleLargeFilled } from "react-icons/vsc";


export const Slider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const timerRef = React.useRef();

    const goToNext = () => {
        if (currentIndex === slides.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
        if (currentIndex === 0) {
            setCurrentIndex(slides.length - 1)
        }
    }

    const goToIndex = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div className={styles.sliderContainer}>
            <img src={slides[currentIndex].url} alt="" />
            <div onClick={() => goToNext()}>
                <AiOutlineCaretRight size='60' color='white' />
            </div>
            <div onClick={() => goToPrevious()}>
                <AiOutlineCaretLeft size='60' color='white' />
            </div>
            <div>
                {slides.map((element, index) => (
                    <VscCircleLargeFilled onClick={() => goToIndex(index)} style={{ margin: '0px 10px' }} size='20' color='white' key={element + index} />
                ))}
            </div>
        </div>
    )
}
