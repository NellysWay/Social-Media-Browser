import React, {useContext} from "react";
import StatCard from "./StatCard";
import { getStats } from './stats';
import './social.css';
import { getTop } from "./topstats";
import TopCard from "./TopStatCard";
import { getViewStat } from "./viewstats";
import ViewCard from "./ViewStatCard";
import { ThemeContext } from "./ThemeContext";





const App = () => {
    const stats = getStats(); // array of stats from stats.js
    const topstats = getTop(); // array of stats from topstats.js
    const viewstats = getViewStat(); // array of stats from viewstats.js
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const renderStatCards = () =>
        stats.map((stat) => (
            <StatCard
            key={stat.siteName}
            siteName={stat.siteName}
            siteLogo={stat.siteLogo}
            followers={stat.followers}
            username={stat.username}
            newFollowCount={stat.newFollowCount}
            />
        ));
    const renderTopCard = () =>
            topstats.map((topstat) => (
                <TopCard
                title={topstat.title}
                followers={topstat.followers}
                />
            ));

    const renderViewCards = () =>
       viewstats.map((viewstat) => (
           <ViewCard
           analytics={viewstat.analytics}
           followers={viewstat.followers}
           ratio={viewstat.ratio}
           />
        ));
    return (
        <>
        
        <div className={`body ${darkMode ? 'bg-dark' : 'bg-light'}`}>
            
            <div className="top_sec">{renderTopCard()} </div> 
            <div className="stats">{renderStatCards()}</div>
            <h1 className= {`header ${darkMode ? 'num-dark' : 'num-light'}`}> Overview - Today </h1>
            <div className="updated_stats">{renderViewCards()}</div>
        </div>       
         </>
    );
}

export default App;