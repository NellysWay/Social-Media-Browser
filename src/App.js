import react from "react";
import StatCard from "./StatCard";
import { getStats } from './stats';
import './social.css';



const App = () => {
    const stats = getStats(); // array of stats from stats.js

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

    return (
        <>
        <div>
            <div className="stats-container">{renderStatCards}</div>
        </div>       
         </>
    );
}

export default App;