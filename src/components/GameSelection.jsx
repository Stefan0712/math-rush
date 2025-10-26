import { difficulties } from '../utils/difficulty';
import styles from './GameSelection.module.css';
import Add from '../icons/Add';
import Minus from '../icons/Minus';
import Multiply from '../icons/Multiply';
import Divide from '../icons/Divide';
import PlayIcon from '../icons/Play';

const GameSelection = ({switchScreen, setDifficulty, difficulty, operations, duration, setDuration, setOperations, gameMode, setGameMode}) => {
    return ( 
        <div className={styles.gameSelection}>
            <h2>Play</h2>
            <div className={styles.difficulty}>
                <label>Select Difficulty:</label>
                <select value={difficulty.value} onChange={(e) => setDifficulty(difficulties.find(d => d.value === e.target.value))} className={styles.difficultyInput} >
                    {difficulties.map((item, index)=><option key={index} value={item.value}>{item.name}</option>)}
                </select>
                <p>{difficulty.name} selected. {difficulty.desc}</p>

            </div>
            <fieldset className={styles.durationSlider}>
                <div className={styles.durationText}>
                    <h3>Duration</h3>
                    <label> {duration} seconds</label>
                </div>
                <input type='range' onChange={(e)=>setDuration(e.target.value)} value={duration} min={30} max={150} step={5} />
            </fieldset>
            <h3>Select operation</h3>
            <div className={styles.gameOperation}>
                <button 
                    className={`${styles.gameOperationButton} ${operations.includes('add') ? styles.selectedOperation : null}`}
                    onClick={(e) => setOperations(prev => prev.includes('add') ? [...prev.filter(i=>i !== 'add')] : [...prev, 'add'])}
                >
                    <Add color='white' />
                </button>
                <button 
                    className={`${styles.gameOperationButton} ${operations.includes('sub') ? styles.selectedOperation : null}`}
                    onClick={(e) => setOperations(prev => prev.includes('sub') ? [...prev.filter(i=>i !== 'sub')] : [...prev, 'sub'])}
                >
                    <Minus color='white' />
                </button>
                <button 
                    className={`${styles.gameOperationButton} ${operations.includes('mult') ? styles.selectedOperation : null}`}
                    onClick={(e) => setOperations(prev => prev.includes('mult') ? [...prev.filter(i=>i !== 'mult')] : [...prev, 'mult'])}
                >
                    <Multiply color='white' />
                </button>
                <button 
                    className={`${styles.gameOperationButton} ${operations.includes('div') ? styles.selectedOperation : null}`}
                    onClick={(e) => setOperations(prev => prev.includes('div') ? [...prev.filter(i=>i !== 'div')] : [...prev, 'div'])}
                >
                    <Divide color='white'/>
                </button>
            </div>
            <div className={styles.gameMode}>
                <button onClick={()=>setGameMode('infinite')} className={gameMode === 'infinite' ? styles.selectedGameModeButton : ''}>Infinite</button>
                <button onClick={()=>setGameMode('survival')} className={gameMode === 'survival' ? styles.selectedGameModeButton : ''}>Survival</button>
            </div>
            <button className={styles.startButton} onClick={()=>switchScreen('game')}><PlayIcon color='white' /></button>
        </div>
     );
}
 
export default GameSelection;