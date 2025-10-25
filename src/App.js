import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import Menu from './components/Menu';
import GameSelection from './components/GameSelection';
import { difficulties } from './utils/difficulty';
import PauseMenu from './components/PauseMenu';

function App() {

  const [currentScreen, setCurrentScreen] = useState('menu'); // Menu, Game Selection, Game
  const [difficulty, setDifficulty] = useState(difficulties[1]);
  const [operations, setOperations] = useState(['add']);  // add, sub, div, mult
  const [gameMode, setGameMode] = useState('infinite');  // Infinite, survival
  const [showPauseMenu, setShowPauseMenu] = useState(false);

  return (
    <div className="App">
      {showPauseMenu ? <PauseMenu goToMainMenu={()=>setCurrentScreen('menu')} close={()=>setShowPauseMenu(false)} difficulty={difficulty} operations={operations} /> : null}
      <div className='game-container'>
        { currentScreen === 'menu' ? <Menu switchScreen={setCurrentScreen} /> 
        : currentScreen === 'game-selection' ? <GameSelection switchScreen={setCurrentScreen} difficulty={difficulty} setDifficulty={setDifficulty} gameMode={gameMode} setGameMode={setGameMode} operations={operations} setOperations={setOperations}/> 
        : currentScreen === "game" ? <Game setShowPauseMenu={setShowPauseMenu} switchScreen={setCurrentScreen} difficulty={difficulty} operations={operations} gameMode={gameMode}/> : null}
      </div>
    </div>
  );
}

export default App;
