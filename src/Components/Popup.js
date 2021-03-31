import React from "react";
import "./popup.css";


export default function Popup(props) {

  //Destruct the props
  const {trigger, setTrigger, condition} = props;

  //add # before all the keywords.
  let keywords = (condition.keywords) ? condition.keywords.map(key => " #" + key) : "";
  let synonyms = (condition.synonyms) ? condition.synonyms.map(syn => syn + ". ") : "";

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>x</button>
        <img className="image-popup"  src={condition.image || "./human.png"}></img>
          <div className="title-popup">{condition.label}</div>
          <div className="snippet-popup">{condition.snippet}</div>
          <br></br>
          <label style={{fontWeight:"bold", textAlign:"Left"}}>Synonyms</label>
          <div className="synonyms-popup">{synonyms}</div>
          <br></br>
          <div className="keywords-popup">{keywords}</div>
      </div>      
    </div>
  ) : ""
}