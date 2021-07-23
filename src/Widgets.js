import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
 
 const newsArticle = (heading, subtitle) => (
   <div className="widgets__article">
     
     <div className="widgets__articleLeft">
       <FiberManualRecordIcon />
     </div>

     <div className="widgets__articleRight">
       <h4>{heading}</h4>
       <p>{subtitle}</p>
     </div>
     
   </div>
 );
 
 
  return (
    <div className="widgets">
      <div className="widgets__top">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Wow! is back", "Top news- 309 readers")}
      {newsArticle("Dude is back", "Top news- 9099 readers")}
      {newsArticle("Osmm is back", "Top news- 5099 readers")}
      {newsArticle("Nice is back", "Top news- 6059 readers")}
      {newsArticle("Good is back", "Top news- 2119 readers")}
      {newsArticle("Bester is back", "Top news- 4559 readers")}
      {newsArticle("Best is back", "Top news- 6019 readers")}

    </div>
  )
}

export default Widgets


