import React, { useState, useEffect } from "react";
import './App.css';
import TableModule from "./TableModule";


const App = () => {
  const [getData, setData] = useState(null);

  useEffect(() => {
    fetch('/tableData.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <TableModule tableData={getData}/>
  );
};

export default App;
