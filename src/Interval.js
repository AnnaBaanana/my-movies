import {useState, useEffect} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false)
    const [revert, setRevert] = useState(false)

    function handlePlayClick() {
        setIsPaused(false)
        setRevert(false)
    }

    function handlePauseClick() {
        setIsPaused(true)
    }

    function handleRevertClick() {
        setRevert(true)
    }

    useEffect( () => { 
        if(!isPaused) {
        let interval = setInterval(() => {setCount(count => revert? count-1 :count+1)}, 1000);
        return () => clearInterval(interval)}}
, [isPaused, revert])
    

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handlePlayClick}>Play</button>
            <button onClick={handlePauseClick}>Pause</button>
            <button onClick={handleRevertClick}>Revert</button>
        </div>
    )
}

export default Counter;