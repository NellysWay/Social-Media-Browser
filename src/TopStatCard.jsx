import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";



const TopCard = ({
    title,
    followers,
    mode,
}) => {
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
     <section className={`bg-lightTop ${darkMode ? 'bg-darkTop' : 'bg-lightTop'}`}>
        <div className={`border-light ${darkMode ? 'border-dark' : 'border-light'}`}>
         <h1 className={`num-light ${darkMode ? 'num-dark' : 'num-light'}`}>{title}</h1>
        <p className={`text-light ${darkMode ? 'text-dark' : 'text-light'}`}>{followers}</p>
         </div>
  
         <p className={`text-light ${darkMode ? 'text-dark' : 'text-light'}`}>{mode}<input name="swtich" id="switch" type="checkbox"
    onClick={onClickHandler}/>
    <label for="switch"></label>
    </p>
         

    </section>
    );
};

export default TopCard;