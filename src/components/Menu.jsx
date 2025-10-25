import styles from './Menu.module.css';

const Menu = ({switchScreen}) => {
    return ( 
        <div className={styles.menu}>
            <h1 className={styles.gameTitle}>Quick Math</h1>
            <div className={styles.menuButtons}>
                <button className={styles.menuButton} onClick={()=>switchScreen('game-selection')}>Start</button>
                <button className={styles.menuButton}>Tutorial</button>
                <button className={styles.menuButton}>Settings</button>
            </div>
        </div>
     );
}
 
export default Menu;