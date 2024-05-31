import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const baseUrl = 'https://8080-imadrgd20-rct-xzx8dlzkkve.ws-eu114.gitpod.io/api/timestamp/';

  const [dateData, setDateData] = useState(() => {
    const d = new Date();
    return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
  });

  const timestampUrl = baseUrl + dateData;

  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Welcome to Time Stamp</h1>
        <p>Enter a date</p>
        <input type='date' value={dateData} onChange={e => setDateData(e.target.value)}></input>
        <a href={timestampUrl}>{timestampUrl}</a>
      </header>
    </div>
  );
}

export default App;
