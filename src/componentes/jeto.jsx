import './jeto.css'
import React, { useRef, useState, useEffect } from "react";
import useVideoPlayer from './videoPlayer';

const Jeto = () => {

    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        // handleVideoProgress,
        // handleVideoSpeed,
        // toggleMute,
    } = useVideoPlayer(videoElement);

    const [src, setSrc] = useState(null);

    // const BorrarVideo = () => {
    //     if (playerState.progress === 100) {
    //         setVideoClass('closed');
    //         console.log(playerState.progress);
    //     }
    // }

    const [videoClass, setVideoClass] = useState('open');
    const [gridClass, setGridClass] = useState ('libreriaOpen')

    const playB2 = () => {
        setSrc('./AJ_1.mp4');
        togglePlay();
    }

    const playC2 = () => {
        setSrc('./AJ_2.mp4');
        togglePlay();
    }

    const playC5 = () => {
        setSrc('./AJ_4.mp4');
        togglePlay();
    }

    const playD3 = () => {
        setSrc('./AJ_3.mp4');
        togglePlay();
    }

    useEffect(() => {
        if (!playerState.isPlaying){
            setGridClass('libreriaOpen')
        }
        else if (playerState.progress > 0 && playerState.progress < 100) {
            setVideoClass('open');
            setGridClass('libreriaClosed')

        }
        else if (playerState.progress === 100) {
            setVideoClass('closed');
            setGridClass('libreriaOpen')
            console.log(playerState.progress + videoClass + gridClass);
        }
    }, [playerState.progress, playerState.isPlaying, videoClass, gridClass])


    return (
        <div className="containerBib1">
            <img className="casilla" src="./TITULO.png" alt="TIT" />
            <video className={videoClass}
                src={src}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
            />
            <div className={gridClass}>
                <div className="columnA">
                    <img className="casilla" src="./A.png" alt="A" />
                </div>
                <div className="columnB">
                    <img className="casilla" src="./B1.png" alt="B1" />
                    <img className="casillaCursor" src="./B2.png" alt="B2" onClick={playB2} />
                    <img className="casilla" src="./B3.png" alt="B3" />
                    <img className="casilla" src="./B4.png" alt="B4" />
                    <img className="casilla" src="./B5.png" alt="B5" />
                    <img className="casilla" src="./B6.png" alt="B6" />
                </div>
                <div className="columnC">
                    <img className="casilla" src="./C1.png" alt="C1" />
                    <img className="casillaCursor" src="./C2.png" alt="C2" onClick={playC2} />
                    <img className="casilla" src="./C3.png" alt="C3" />
                    <img className="casilla" src="./C4.png" alt="C4" />
                    <img className="casillaCursor" src="./C5.png" alt="C5" onClick={playC5} />
                    <img className="casilla" src="./C6.png" alt="C6" />
                </div>
                <div className="columnD">
                    <img className="casilla" src="./D1.png" alt="D1" />
                    <img className="casilla" src="./D2.png" alt="D2" />
                    <img className="casillaCursor" src="./D3.png" alt="D3" onClick={playD3} />
                    <img className="casilla" src="./D4.png" alt="D4" />
                    <img className="casilla" src="./D5.png" alt="D5" />
                    <img className="casilla" src="./D6.png" alt="D6" />
                </div>
                <div className="columnE">
                    <img className="casilla" src="./E1.png" alt="E1" />
                    <img className="casilla" src="./E2.png" alt="E2" />
                    <img className="casilla" src="./E3.png" alt="E3" />
                    <img className="casilla" src="./E4.png" alt="E4" />
                    <img className="casilla" src="./E5.png" alt="E5" />
                    <img className="casilla" src="./E6.png" alt="E6" />
                </div>
                <div className="columnF">
                    <img className="casilla" src="./F.png" alt="F" />
                </div>
            </div>
        </div>
    )
}

export default Jeto;
