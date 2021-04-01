import React,{useState} from 'react'
import "./App.css";
import axios from "axios";
function App() {
  const [apiData, setApiData] = useState([])
  axios
    .get("/api/test")
    .then((response) => setApiData(response.data))
    .catch((error) => console.log(error));
  return (
    <div className="App">
      <h2>College Suite</h2>
      {JSON.stringify(apiData)}
    </div>
  );
}

export default App;
