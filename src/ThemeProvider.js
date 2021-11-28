import React, { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeReducer } from "./themeReducer";

//HOC = Higher Order Component
// used to wrap other components around our context provider
const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, 'LIGHTMODE');

    return (
        <ThemeContext.Provider value={{state: state, dispatch: dispatch}}>
            {props.children}
            </ThemeContext.Provider>
    );
};

export default ThemeProvider;