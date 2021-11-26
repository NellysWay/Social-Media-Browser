import React from "react";
import StatCard from "./StatCard";
import { getStats } from './stats';
import './social.css';
import { getTop } from "./topstats";
import TopCard from "./TopStatCard";




const App = () => {
    const stats = getStats(); // array of stats from stats.js
    const topstats = getTop(); // array of stats from topstats.js


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
    return (
        <>
        
        <div>
            <div className="top_sec">{renderTopCard()}</div>
            <div className="stats">{renderStatCards()}</div>
        </div>       
         </>
    );
}

export default App;