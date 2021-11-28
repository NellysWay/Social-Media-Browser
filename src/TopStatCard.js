import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";



const TopCard = ({
    title,
    followers,
}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
     <section className={`bg-lightTop ${darkMode ? 'bg-darkTop' : 'bg-lightTop'}`}>
        <div className="title">
         <h1 className={`num-light ${darkMode ? 'num-dark' : 'num-light'}`}>{title}</h1>
        <p className={`text-light ${darkMode ? 'text-dark' : 'text-light'}`}>{followers}</p>
         </div>
  
  
         

    </section>
    );
};

export default TopCard;