import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    // Use useState to initialize target time once
    const [targetTime] = useState(new Date().getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days from now
    const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetTime - now;

            if (distance < 0) {
                clearInterval(intervalId); // Stop the timer when time is up
                setTimeLeft(0);
            } else {
                setTimeLeft(distance);
            }
        }, 1000);

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [targetTime]); // Dependency is the fixed target time

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div>
           
            {timeLeft > 0 ? (
                <div>
                    <p style={{margin:0 , fontWeight:600}}>0{days} gün {hours} : {minutes} : {seconds}</p>
                </div>
            ) : (
                <p>Time's up!</p>
            )}
        </div>
    );
};

export default CountdownTimer;
