import React, { useRef, useEffect, useState } from "react";

export default function Countdown({initialSeconds, step}) {

    const [num, setNum] = useState(initialSeconds);
    const [pause, setPause] = useState(false);

    let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev > 0 ? prev - step : 0);

    useEffect(() => {
        setPause(false);
        intervalRef.current = setInterval(decreaseNum, step * 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(decreaseNum, step * 1000);
        }
        setPause((prev) => !prev);
    };

    let minutes = Math.floor(num / 60);
    let seconds = num - minutes * 60;

    function str_pad_left(string,pad,length) {
        return (new Array(length+1).join(pad)+string).slice(-length);
    }

    let finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);

    return (
        <div>
            <div>{finalTime}</div>
            <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
        </div>
    );
}