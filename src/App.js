import React from "react";
import StatCard from "./StatCard";
import { getStats } from './stats';
import './social.css';
import { getTop } from "./topstats";
import TopCard from "./TopStatCard";
import { getViewStat } from "./viewstats";
import ViewCard from "./ViewStatCard";




const App = () => {
    const stats = getStats(); // array of stats from stats.js
    const topstats = getTop(); // array of stats from topstats.js
    const viewstats = getViewStat(); // array of stats from viewstats.js

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
        
        <div>
            <div className="top_sec">{renderTopCard()}</div>
            <div className="stats">{renderStatCards()}</div>
            <div className="updated_stats">{renderViewCards()}</div>
        </div>       
         </>
    );
}

export default App;