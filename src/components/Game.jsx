import { useEffect, useState } from "react";
import styles from './Game.module.css';
import Buttons from "./Buttons/Buttons";
import Streak from '../icons/Streak';
import Trophy from '../icons/Trophy';
import Diamond from '../icons/Diamond';
import Wrong from '../icons/Wrong';
import Correct from '../icons/Correct';
import Pause from '../icons/Pause';

const Game = ({difficulty, setShowPauseMenu, setRoundData, setCurrentScreen, duration}) => {
    const [currentScore, setCurrentScore] = useState(0);
    const [target, setTarget] = useState(0);
    const [currentSelection, setCurrentSelection] = useState([]);
    const [currentOperation, setCurrentOperation] = useState('add', "sub");
    const [currentStreak, setCurrentStreak] = useState(0)
    const [highScore, setHighScore] = useState(0);
    const [roundStatus, setRoundStatus] = useState("running"); // running, win, lose

    const [timeLeft, setTimeLeft] = useState(duration ?? 60); // Timer
    // Round Data
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);

    useEffect(() => {
        if (timeLeft <= 0) {
            endGame();
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const endGame = () =>{
        const roundData = {
            correctAnswers, 
            wrongAnswers,
            maxStreak,
            currentScore
        }
        setRoundData(roundData);  
        setCurrentScreen("end");
    }


   useEffect(()=>{
    if(highScore < currentScore){
        setHighScore(currentScore);
    }
   }, [currentScore]);


   const showResult = (type) => {
        // Save the highest streak
        if(currentStreak > maxStreak){
            setMaxStreak(currentStreak);
        };

        if(type === 'win'){
            setRoundStatus('win');
            setCorrectAnswers(prev=>prev+1);
            setTimeout(()=>{
                setRoundStatus('running')
            },1000)
        } else if(type === 'lose'){
            setRoundStatus('lose');
            setWrongAnswers(prev=>prev+1);
            setTimeout(()=>{
                setRoundStatus('running')
            },1000)
        }
   }
    return ( 
        <div className={styles.game}>
            <div className={styles.gameInfo}>
                <div className={styles.firstColumn}>
                    <div className={styles.currentScore}>
                        <Trophy />
                        <p>{highScore}</p>
                    </div>
                    <div className={styles.highScore}>
                        <Diamond />
                        <p>{currentScore}</p>
                    </div>
                    <div className={styles.streaks}>
                        <Streak />
                        <p>{currentStreak}</p>
                    </div>
                </div>
                <div className={styles.secondColumn}>
                    <h2>{timeLeft}</h2>
                    <div className={`${styles.currentTarget} ${styles[roundStatus]}`}>{roundStatus === 'running' ? <p>{target}</p> : roundStatus === 'win' ? <Correct color="white" size={'40px'}/> : roundStatus === 'lose' ? <Wrong color="white" size={'40px'} /> : <p>{target}</p>}</div>
                </div> 
                <div className={styles.thirdColumn}>
                    <button onClick={()=>setShowPauseMenu(true)} className={styles.settingsButton}><Pause /></button>
                </div>
            </div>
            <Buttons showResult={showResult} setTarget={setTarget} difficulty={difficulty} setHighScore={setHighScore} setCurrentStreak={setCurrentStreak} setCurrentScore={setCurrentScore} target={target} currentSelection={currentSelection} setCurrentSelection={setCurrentSelection} currentOperation={currentOperation}/>
        </div>
     );
}
 
export default Game;