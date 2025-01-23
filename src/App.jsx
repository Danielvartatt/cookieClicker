import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Cookie count is ${count}`;
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Cookie</button>
    </div>
  );
}

export default App;
