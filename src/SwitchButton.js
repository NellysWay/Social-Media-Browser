import React, { useContext} from "react";
import { ThemeContext } from "./ThemeContext";

const SwitchButton = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onClickHandler = () => {
        if (darkMode) {
            theme.dispatch({ type: 'LIGHTMODE' });
        } else {
            theme.dispatch({ type: 'DARKMODE' });
        }
    };

    return (
        <p className={`text-light ${darkMode ? 'text-dark' : 'text-light'}`}>Dark Mode
    <input name="swtich" id="switch" type="checkbox" className={` btn-light ${darkMode ? 'btn-dark' : 'btn-light'}`} 
    onClick={onClickHandler}/>
    <label for="switch"></label>
    </p>
    );
};

export default SwitchButton;