import React from "react";


const TopCard = ({
    title,
    followers,
}) => {
    return (
     <section className="top_sec">
        <div className="title">
         <h1>{title}</h1>
        <p>{followers}</p>
         </div>
  
  
         <p>Dark Mode <input type="checkbox" name="switch" id="switch"/>
         <label for="switch"></label>
         </p>

    </section>
    );
};

export default TopCard;