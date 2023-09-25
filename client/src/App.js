import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        // console.log(data)
      }
    )
  }, [])
  console.log(data);
  return (
    <div className="App">
      {data?.members.map((singleData, index) =>
        <h1 key={index}>
          {singleData}
        </h1>
      )}
    </div>
  );
}

export default App;
