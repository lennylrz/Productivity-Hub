import React, {useState, useEffect} from "react";
import styles from './DigitalClock.css'
function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000)
    }, [])

    function padZero(x) {
        if (x < 10) {
            return `0${x}`
        } else {
            return x
        }
    }
    function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
    
}
    return(
        <div className="digital-clock">
            <span>{formatTime()}</span>
        </div>
    )
}

export default DigitalClock