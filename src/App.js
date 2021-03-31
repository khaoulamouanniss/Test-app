import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import ConditionList from "./Components/ConditionList"

function App() {

  const [conditions,setConditions] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:5000/dev/api/getConditions`)
    .then(res => {
      setConditions(res.data.conditions);
    })
  }, []);
  
  return (
    <div className="App">
      <ConditionList conditions={conditions}></ConditionList>
    </div>
  );
}

export default App;
