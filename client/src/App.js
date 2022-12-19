import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState(false);
  const [inpval] = useState({
    key: process.env.REACT_APP_API_KEY,
  });
  useEffect(() => {
    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.msg === "invalid") {
          setdata(false);
        } else {
          setdata(true);
        }
      });
  }, [inpval]);

  return (
    <div className="App">
      {data ? <h2>Token Valid !!! Hello I am React</h2> : <h2>Invalid Key</h2>}
    </div>
  );
}

export default App;
