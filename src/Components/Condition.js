import React,{useState} from "react";
import Popup from "./Popup"
import "./style.css";


export default function Condition(props) {

  const condition = props.condition;
  const snippet = condition.snippet ? condition.snippet.slice(0, 70) + "..." : "";

  const [showPopup,setShowPopup] = useState(false)

        return (
          <div className="condition">
            <img className = "image" src={condition.image || "./human.png"}></img>
            <div className = "title">{condition.label}</div>
            <div className = "snippet">{snippet}<button className="more-btn" onClick = {() => setShowPopup(true)}>Find out more</button></div>
            
            <Popup trigger={showPopup} setTrigger={setShowPopup} condition={condition}></Popup>
          </div>
        )}