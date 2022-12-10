import { useEffect, useState } from "react";
import "./App.scss";

console.clear();

const navItems = ["Home", "About", "Services", "Portfolio", "FAQs", "Contact"];

const App = () => {
  const [IsHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState({ left: 0, width: 0 });
  const [active, setActive] = useState({ left: null, width: null });
  const [clickEffect, setClickEffect] = useState(false);

  const handelMouseEnter = (e) => {
    setIsHovered(true);
    setHovered({ left: e.target.offsetLeft, width: e.target.offsetWidth });
  };
  const handelClick = (e) => {
    setActive({ left: e.target.offsetLeft, width: e.target.offsetWidth });
    setClickEffect(true);
    setTimeout(() => {
      setClickEffect(false);
    }, 500);
  };
  const handelMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="app">
      <div className="nav">
        <div
          className={clickEffect ? "indicator clickEffect" : "indicator"}
          style={{
            left: (!IsHovered ? active.left : false) || hovered.left,
            width: (!IsHovered ? active.width : false) || hovered.width,
            opacity: active.left !== null && active.width !== null && 1,
          }}
        />
        {navItems.map((e, i) => {
          return (
            <div
              key={i}
              className="item"
              onMouseEnter={handelMouseEnter}
              onClick={handelClick}
              onMouseLeave={handelMouseLeave}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
