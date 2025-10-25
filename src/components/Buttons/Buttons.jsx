import { useEffect, useState } from 'react';
import styles from './Buttons.module.css';
import { generateNumbers } from '../../utils/difficulty';
import Add from '../../icons/Add';

const Buttons = ({difficulty, currentSelection, setCurrentSelection, setTarget, target, setCurrentScore, setCurrentStreak, showResult}) => {

    const [selected, setSelected] = useState([]);
    const [buttons, setButtons] = useState(Array.from({ length: 9 }, () => Math.floor(Math.random() * 10) + 1));
    const [solution, setSolution] = useState(null);

    useEffect(()=>{
        const result = generateNumbers(difficulty);
        setTarget(result.target);
        setButtons(result.numbers);
        setSolution(result.solution);
    },[])
 

    const handleSelect = (index, value) => {
        if (selected.includes(index)) {
            // Deselect by index
            const newSelected = selected.filter(i => i !== index);
            const newSelection = currentSelection.filter((_, i) => i !== selected.indexOf(index));
            setSelected(newSelected);
            setCurrentSelection(newSelection);
        } else if (selected.length < difficulty.selections) {
            const newSelected = [...selected, index];
            const newSelection = [...currentSelection, value];
            setSelected(newSelected);
            setCurrentSelection(newSelection);

            const total = newSelection.reduce((sum, num) => sum + num, 0);
            checkAnswer(total, newSelection.length);
        }
    };

    const checkAnswer = (total, selections) => {
        //console.log(total, target, total === target, selections, difficulty.selections, selections === difficulty.selections)
        if(total === target){
            showResult('win');
            setCurrentScore(prev=>prev + difficulty.scoreMultiplier);
            setCurrentStreak(prev=>prev+1);
            nextRound();
        }else if(selections === difficulty.selections && total !== target){
            setCurrentScore(0);
            setCurrentStreak(0);
            nextRound();
            showResult('lose');
        }
    }
    
    const nextRound = () =>{
        setCurrentSelection([]);
        setSelected([]);
        const result = generateNumbers(difficulty);
        setTarget(result.target);
        setButtons(result.numbers);
        setSolution(result.solution);
    }
    return ( 
        <div className={styles.buttons}>
            <div className={styles.selectedButtonsContainer}>
                {Array.from({ length: difficulty.selections }).map((_, i) => {
                    const selectedIndex = selected[i];
                    const value = selectedIndex !== undefined ? buttons[selectedIndex] : null;
                    return (
                        <>
                            <div key={i} className={`${styles.slot} ${value !== null ? styles.filled : ''}`} >
                                {value !== null && value}
                            </div>
                            {i < difficulty.selections - 1 ? <Add /> : null}
                        </>
                    );
                })}
            </div>
            <div className={styles.buttonsContainer}>
                {buttons.map((value, index) => (
                    <button key={index} className={`${selected.includes(index) ? styles.selectedGameButton : ''}`} onClick={() => handleSelect(index, value)}>
                        {value}
                    </button>
                ))}
            </div>
        </div>
     );
}
 
export default Buttons;