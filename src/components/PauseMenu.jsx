import PlusIcon from "../icons/Add";
import DivideIcon from "../icons/Divide";
import MinusIcon from "../icons/Minus";
import PlayIcon from "../icons/Play";
import MultiplyIcon from "../icons/Multiply";

const PauseMenu = ({goToMainMenu, difficulty, operations, close}) => {

    const goToMenu = () =>{
        goToMainMenu();
        close();
    }
    return ( 
        <div className="pause-menu">
            <h2>PAUSE</h2>
            <div className="current-settings">
                <p><b>Difficulty </b>{difficulty.name}</p>
                <b>Operations</b>
                <div className="operations-container">
                    {operations.includes('add') ? <PlusIcon /> : null}
                    {operations.includes('sub') ? <MinusIcon /> : null}
                    {operations.includes('mult') ? <MultiplyIcon /> : null}
                    {operations.includes('div') ? <DivideIcon /> : null}
                </div>
            </div>
            <div className="menu-buttons">
                <button>Settings</button>
                <button onClick={goToMenu}>Back to menu</button>
                <button onClick={close}><PlayIcon color="white" /></button>
            </div>
        </div>
     );
}
 
export default PauseMenu;