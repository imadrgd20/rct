import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [dateData, setDateData] = useState(() => {
    const d = new Date();
    return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
});

  return (
    <div className="App">
      
      <header className="App-header"> 
        <h1>Welcome to Time Stamp</h1>
        <p >enter a date </p>
        <input type='date' value={dateData} onChange={e=>setDateData(e.target.value)}></input>
        <a href={`http://localhost:8080/api/timestamp/:${dateData}`}>{`http://localhost:8080/api/timestamp/:${dateData}`}</a>
      </header>
    </div>
  );
}

export default App;
