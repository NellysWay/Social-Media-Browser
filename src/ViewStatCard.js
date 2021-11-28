import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ViewCard = ({
    siteName,
    analytics,
    followers,
    ratio,
}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <div className={`analytic_View card-light ${darkMode ? 'card-dark' : 'card-light'}`}>
      <p className={`text-light ${darkMode ? 'text-dark' : 'text-light'}`}>{analytics}</p>
      <h1 className={`num-light ${darkMode ? 'num-dark' : 'num-light'}`}>{followers}</h1>
      <p class="up_Stats down_Stats"> {ratio} </p>
    </div>
    );
};

export default ViewCard; 