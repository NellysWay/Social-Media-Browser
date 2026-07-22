import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


const StatCard = ({
    //destructuring props
    siteName,
    siteLogo,
    followers,
    username,
    newFollowCount,
    ratioLogo,
}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
         
        <div className={`stats-card card-light ${darkMode ? 'card-dark' : 'card-light'}`}>
            
            <p className={`text-light ${darkMode ? 'text-dark' : 'text-light'}`}> <img src={siteLogo} alt={siteName} /> {username}</p>

            <h1 className={`sub-count num-light ${darkMode ? 'num-dark' : 'num-light'}`}>{followers}</h1>

            <p className={`follow-title text-light ${darkMode ? 'text-dark' : 'text-light'}`}>
                {siteName === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}
            </p>

            <p className={`num-light ${darkMode ? 'num-dark' : 'num-light'}`}> <img src= {ratioLogo} alt={siteLogo}/> {newFollowCount}</p>
        </div>
    
    );
};

export default StatCard;