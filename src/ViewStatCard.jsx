import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ViewCard = ({
    siteLogo,
    siteName,
    analytics,
    followers,
    ratio,
    ratioLogo,
}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={`analytic_View card-light ${darkMode ? 'card-dark' : 'card-light'}`}>
      <p className={`analytics text-light ${darkMode ? 'text-dark' : 'text-light'}`}>{analytics} <img className="overview" src={siteLogo} alt={siteName}/></p>
      <h1 className={`followers num-light ${darkMode ? 'num-dark' : 'num-light'}`}>{followers}</h1>
      <p className={`ratio num-light ${darkMode ? 'num-dark' : 'num-light'}`}> <img src={ratioLogo} alt={siteName}/> {ratio} </p>
    </div>
    );
};

export default ViewCard; 