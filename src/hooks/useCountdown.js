const { useEffect, useState } = require("react");

const useCountdown = (time = '00:00') => {
    const [timeLeft, setTimeLeft] = useState(time);
    const [color, setColor] = useState('#000');
    const [colorPer, setColorPer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log("PROPS TIME: ", timeLeft)
            const splittedTime = timeLeft.split(":")
            const seconds = Number(splittedTime[0]) * 60 + Number(splittedTime[1]);
            const tSecLeft = seconds - 1;
            const minLeft = parseInt(tSecLeft / 60, 10);
            const secLeft = tSecLeft % 60;
            const timeString = `${minLeft < 10 ? `0${minLeft}` : minLeft}:${secLeft < 10 ? `0${secLeft}` : secLeft}`
            if (tSecLeft > -1) {

                setTimeLeft(timeString)
            }
            else {
                clearInterval(interval)
            }
            setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
            setColorPer((seconds / (Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]))) * 100)
            // console.log("TimeLeft: ", timeString)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [timeLeft])

    return [timeLeft, color, colorPer]

}

export default useCountdown