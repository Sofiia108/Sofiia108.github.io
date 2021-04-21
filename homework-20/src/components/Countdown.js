import React, { useRef, useEffect, useState } from "react";

export default function Countdown( { initialSeconds } ) {

    const initialTime = new Date(1970, 0, 1);
    const secondsToDate = initialTime.setSeconds(initialSeconds);

    const [seconds, setSeconds] = useState(secondsToDate);
    const [pause, setPause] = useState(false);

    let intervalRef = useRef();

    useEffect(() => {
        setPause(false);
        intervalRef.current = setInterval( initialTime.setSeconds(seconds-1) , 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(initialTime.setSeconds(seconds-1), 1000);
        }
        setPause((prev) => !prev);
    };

    return (
        <div>
            <div>{seconds.toLocaleString()}</div>
            <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
        </div>
    );
}

