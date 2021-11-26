import React from "react";

const StatCard = ({
    //destructuring props
    siteName,
    siteLogo,
    followers,
    username,
    newFollowCount,
}) => {
    return (
        <div className="stats-card">
            <p> <img src={siteLogo} alt={siteName} /> {username}</p>

            <h1 className="sub-count">{followers}</h1>

            <p className="follow-title">
                {siteName === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}
            </p>

            <p>{newFollowCount}</p>
        </div>
    );
};

export default StatCard;