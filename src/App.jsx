import { useEffect, useState } from "react";
import "./App.scss";

console.clear();

const App = () => {
  const [state, setState] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight +
          window.scrollY -
          document.body.scrollHeight +
          250 >=
        0
      ) {
        if (state) {
          setState(false);
        }
      }
    };
  }, []);
  useEffect(() => {
    if (!state) {
      setTimeout(() => {
        console.log("");
        console.log("Timeouted");
        setState(true);
      }, 1000);
    }
  }, [state]);

  useEffect(() => console.log("state:", state), [state]);

  return <div className="app">App</div>;
};

export default App;
