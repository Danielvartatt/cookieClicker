import styles from "./assets/Cookie.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function CookieClicker() {
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
