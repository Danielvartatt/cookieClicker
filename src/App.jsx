import { useEffect } from "react";
import { useState } from "react";
import styles from "./assets/Cookie.module.css";
import "./assets/cookie.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Cookie count is ${count}`;
  }, [count]);
  return (
    <div className={styles.cookiebackground}>
      <div className={styles.maindiv}>
        <div className={styles.cookiediv}>
          <h1 className={styles.cookiebox}>cookie number:{count}</h1>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className={styles.button}
          >
            <img src="./image/cookie.png" className={styles.cookie} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
