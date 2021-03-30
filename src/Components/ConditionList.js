import React from "react";
import Data from"../conditions.json";
import Condition from "./Condition";
import "./style.css";


export default function ConditionList(props) {
  const conditions = Data.conditions;
  
  return (
    <div className="container">
      {conditions.map(condition => {
        return (
          <>
          <Condition condition ={condition}></Condition>
          </>
      )})}
      
    </div>
  )}