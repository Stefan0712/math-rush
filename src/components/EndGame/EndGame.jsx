import styles from './EndGame.module.css';

const EndGame = ({gameData, setCurrentScreen}) => {
    return ( 
        <div className={styles.endGame}>
            <h2>Game Over</h2>
            {gameData ? <div className={styles.gameStats}>
                <p>Total answers: {gameData.correctAnswers + gameData.wrongAnswers}</p>
                <p>Correct answers: {gameData.correctAnswers}</p>
                <p>Wrong answers: {gameData.wrongAnswers}</p>
                <p>Highest streak: {gameData.maxStreak}</p>
                <p>Score: {gameData.score ?? 0}</p>
            </div> : null}
            <button onClick={()=>setCurrentScreen('menu')}>Exit</button>
        </div>
     );
}
 
export default EndGame;