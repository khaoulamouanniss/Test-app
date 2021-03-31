import React from "react";
import Condition from "./Condition";
import "./style.css";


export default function ConditionList(props) {

  const conditions = props.conditions;
  
  return (
    <div className="container">
      {conditions.map(condition => {
        return (
          <>
          <Condition condition={condition}></Condition>
          </>
      )})}
      
    </div>
  )}