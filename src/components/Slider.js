import React from 'react'
import styles from './Slider.module.css'
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import { VscCircleLargeFilled } from "react-icons/vsc";


export const Slider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [animation, setAnimation] = React.useState(false);
    const timerRef = React.useRef(null);

    React.useEffect(() => {
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            goToNext();
            setAnimation(!animation);
        }, 5000)
    },)

    const goToNext = () => {
        if (currentIndex === slides.length - 1) {
            setCurrentIndex(0);
            setAnimation(!animation);
        } else {
            setCurrentIndex(currentIndex + 1);
            setAnimation(!animation);
        }
    }

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            setAnimation(!animation);
        }
        if (currentIndex === 0) {
            setCurrentIndex(slides.length - 1)
            setAnimation(!animation);
        }
    }

    const goToIndex = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div className={styles.sliderContainer}>
            {animation ? <div className={styles.sliderAnimationImg}
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
            </div> : ''}
            {animation ? '' : <div className={styles.sliderAnimationImg}
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
            </div>}
            <div className={styles.sliderRightArrow} onClick={() => goToNext()} tabIndex={1}>
                <AiOutlineCaretRight size='60' color='white' />
            </div>
            <div className={styles.sliderLeftArrow} onClick={() => goToPrevious()} tabIndex={2}>
                <AiOutlineCaretLeft size='60' color='white' />
            </div>
            <div className={styles.sliderDots}>
                {slides.map((element, index) => (
                    <VscCircleLargeFilled onClick={() => goToIndex(index)} style={{ margin: '0px 10px' }} size='20' color='white' key={element + index} />
                ))}
            </div>
        </div>
    )
}
