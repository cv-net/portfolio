import React, { useState, useRef } from 'react';
import useInterval from '@use-it/interval';
import playButton from './img/play.png';
import pauseButton from './img/pause.png';
import stopButton from './img/stop.png';
import stopFalse from './img/stopfalse.svg';
let minutes, seconds;

function TimerInterface(props) {
    const timer = useRef(props.time);

    const [ play, setPlay ] = useState(false);
    const [ stop, setStop ] = useState(true);
    const [ delay, setDelay ] = useState(null);

    useInterval(() => {
        minutes = parseInt(timer.current / 60, 10);
        seconds = parseInt(timer.current % 60, 10);

        minutes = minutes.toString().length === 1 ? `0${minutes}` : `${minutes}`;
        seconds = seconds.toString().length === 1 ? `0${seconds}` : `${seconds}`;

        console.log(`${minutes}:${seconds}`);

        if (timer.current < 0) {
            timer.current = props.time;
        }

        timer.current--;

        props.changeTimeDisplay(`${minutes}:${seconds}`);

    }, delay);

    const handlePlay = () => {
        setPlay(true);
        setStop(false);
        setDelay(1000); 
        props.isRunning(true);
    }

    const handlePause = () => {
        setPlay(false);
        setStop(false);
        setDelay(null);
        props.isRunning(false);
    }

    const handleStop = () => {
        setPlay(false);
        setStop(true);
        setDelay(null);
        timer.current = props.time;
        props.changeTimeDisplay(`${ props.time / 60 }:00`);
        props.isRunning(false);
    }

    if (stop) {
        return(
            <div id='sessioncontrols'>
                <img src={playButton} alt='play button' onClick={handlePlay}></img>
                <img src={stopFalse} alt='stop button' ></img>
            </div>
        );
    } else if (play) {
        return(
            <div id='sessioncontrols'>
                <img src={pauseButton} alt='pause button' onClick={handlePause}></img>
                <img src={stopButton} alt='stop button' onClick={handleStop}></img>
            </div>
            
        );
    } else {
        return(
            <div id='sessioncontrols'>
                <img src={playButton} alt='play button' onClick={handlePlay}></img>
                <img src={stopFalse} alt='stop button' onClick={handleStop}></img>
            </div>
        );
    }

}

export default TimerInterface;