import React from 'react';
import styles from './Clock.module.css'
import { Counter } from './Counter';

export const Clock = () => {

    const date = 'Jan 1, 2024 00:00:00';

    const [day, setDay] = React.useState();
    const [hour, setHour] = React.useState();
    const [minute, setMinute] = React.useState();
    const [second, setSecond] = React.useState();
    const [att, setAtt] = React.useState(true);

    React.useEffect(() => {
        const countDate = new Date(date).getTime();
        const countDateNow = new Date().getTime();

        const countDateInterval = countDate - countDateNow;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const dayNumber = Math.floor(countDateInterval / day);
        const hourNumber = Math.floor((countDateInterval % day) / hour);
        const minuteNumber = Math.floor((countDateInterval % hour) / minute);
        const secondNumber = Math.floor((countDateInterval % minute) / second);

        setDay(dayNumber);
        setHour(hourNumber);
        setMinute(minuteNumber);
        setSecond(secondNumber);

    }, [att])

    const attTime = () => {
        setAtt(!att);
    }

    setTimeout(attTime, 1000);

    return (

        <div className={styles.relogio}>
            <Counter time='Days' number={day} />
            <Counter time='Hours' number={hour} />
            <Counter time='Mins' number={minute} />
            <Counter time='Secs' number={second} />
        </div>
    );
}

