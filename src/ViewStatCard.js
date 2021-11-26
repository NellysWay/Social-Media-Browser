import React from "react";

const ViewCard = ({
    siteName,
    analytics,
    followers,
    ratio,
}) => {
    return (
        <div className="analytic_View">
      <p>{analytics}</p>
      <h1>{followers}</h1>
      <p class="up_Stats down_Stats"> {ratio} </p>
    </div>
    )
};

export default ViewCard; 